// // Import necessary modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Create Express
const app = express();

// Connect to MongoDB for documents
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB for documents"))
  .catch((err) =>
    console.error("Failed to connect to MongoDB for documents", err)
  );

// Connect to MongoDB for users

// Define user schema and model
const User = mongoose.model(
  "users",
  mongoose.Schema({
    name: String,
    email: String,
    password: String,
    currentRating: { type: Number, default: null },
    completedQuestionNames: [String],
  })
);

// Define document schema and model

const Document = mongoose.model(
  "Document",
  mongoose.Schema({
    name: String,
    link: String,
    rating: Number,
  })
);

// Your encryption function
function encrypt(password) {
  const hm = {
    A: "~",
    B: "`",
    C: "@",
    D: "#",
    E: "$",
    F: "%",
    G: "^",
    H: "&",
    I: "*",
    J: "(",
    K: ")",
    L: "-",
    M: "_",
    N: "+",
    O: "=",
    P: "/",
    Q: "?",
    R: "<",
    S: ">",
    T: ".",
    U: ",",
    V: ":",
    W: ";",
    X: "'",
    Y: '"',
    Z: "\\",

    a: "|",
    b: "{",
    c: "}",
    d: "[",
    e: "]",
    f: "!",
    g: "A",
    h: "B",
    i: "C",
    j: "D",
    k: "E",
    l: "F",
    m: "G",
    n: "H",
    o: "I",
    p: "J",
    q: "K",
    r: "L",
    s: "M",
    t: "N",
    u: "O",
    v: "P",
    w: "Q",
    x: "R",
    y: "S",
    z: "T",

    "~": "U",
    "`": "V",
    "@": "W",
    "#": "X",
    $: "Y",
    "%": "Z",
    "^": "a",
    "&": "b",
    "*": "c",
    "(": "d",
    ")": "e",
    "-": "f",
    _: "g",
    "+": "h",
    "=": "i",
    "/": "j",
    "?": "k",
    "<": "l",
    ">": "m",
    ".": "n",
    ",": "o",
    ":": "p",
    ";": "q",
    "'": "r",
    '"': "s",
    "\\": "t",
    "|": "u",
    "{": "v",
    "}": "w",
    "[": "x",
    "]": "y",
    "!": "z",

    0: "0",
    1: "8",
    2: "7",
    3: "5",
    4: "6",
    5: "4",
    6: "3",
    7: "2",
    8: "1",
    9: "9",
  };

  let cipher = "";
  for (let i = 0; i < password.length; i++) {
    cipher += hm[password[i]];
  }
  return cipher;
}

app.use(express.json());
app.use(cors());

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).send({ message: "User not registered" });
      return;
    }
    const cipher1 = encrypt(password);
    const reversedCipher = cipher1.split("").reverse().join("");
    const finalCipher = encrypt(reversedCipher);
    const validPassword = finalCipher === user.password;

    if (validPassword) {
      res.send({
        message: "Login Successful",
        email: user.email,
        rating: user.currentRating,
      });
    } else {
      res.status(400).send({ message: "Email/Password didn't match" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.status(400).send({ message: "User already registered" });
      return;
    }

    const cipher1 = encrypt(password);
    const reversedCipher = cipher1.split("").reverse().join("");
    const finalCipher = encrypt(reversedCipher);
    const newUser = new User({
      name,
      email,
      password: finalCipher,
      currentRating: null,
      completedQuestionNames: [],
    });
    await newUser.save();
    res.status(201).send({
      message: "Successfully Registered, Please login now.",
      email: email,
    });
  } catch (error) {
    res.send(error);
  }
});

// Define a route to fetch documents based on rating
app.post("/documents", async (req, res) => {
  const { email, rating } = req.body;
  try {
    // Parse the rating from the request parameters
    const user = await User.findOne({ email });
    if (user.currentRating === null) {
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      // Update user's current rating
      user.currentRating = rating;
      await user.save();
    }

    // Find 100 documents with rating starting from given rating-1
    const documents = await Document.find({ rating: { $gte: rating - 1 } })
      .limit(100)
      .select("name link");

    // Send the documents as JSON response
    res.json({
      questionsList: documents,
      solvedQuestions: user.completedQuestionNames,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update completed questions for a user
app.post("/update-completed-questions", async (req, res) => {
  const { email, questionId } = req.body;
  console.log(req.body);
  try {
    const result = await User.updateOne(
      { email: email },
      { $push: { completedQuestionNames: questionId } }
    );

    if (!result) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const user = await User.findOne({ email });
    res.status(200).json(user.completedQuestionNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Remove completed questions for a user
app.post("/remove-completed-questions", async (req, res) => {
  const { email, questionId } = req.body;

  try {
    const result = await User.updateOne(
      { email: email },
      { $pull: { completedQuestionNames: questionId } }
    );

    if (!result) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const user = await User.findOne({ email });
    res.status(200).json(user.completedQuestionNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//Routes
// app.listen(9002, () => {
//   console.log("BE started at port 9002");
// });
