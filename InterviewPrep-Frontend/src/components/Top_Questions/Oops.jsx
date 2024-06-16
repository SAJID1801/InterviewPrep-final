import React from "react";

function Oops() {
  const bodytag = {
    padding: "10px 150px",
    margin: "9px 2px",
    lineHeight: "1.7",
  };
  const h3tag = {
    margin: "33px 2px 15px 2px",
    fontSize: "25px",
    fontWeight: "500",
  };
  return (
    <div style={bodytag}>
      {/* Q.1  */}
      <div>
        <h3 style={h3tag}>
          Q.1 What is meant by the term OOPs? What are some major Object
          Oriented Programming languages?
        </h3>
        <p>
          OOPs refers to Object-Oriented Programming. Object-Oriented
          Programming is a methodology or paradigm to design a program using
          classes and objects. Objects can be considered as real-world instances
          of entities like class, that have some characteristics and behaviors.
        </p>
        <p>
          The programming languages that use and follow the Object-Oriented
          Programming paradigm or OOPs, are known as Object-Oriented Programming
          languages. Some of the major Object-Oriented Programming languages
          include:
        </p>
        <li>Java</li>
        <li>Python</li>
        <li>C++</li>
        <li>Javascript</li>
        <li>PHP</li>
      </div>

      {/* Q.2 */}
      <div>
        <h3 style={h3tag}>Q.2 What is the nedd for OOPs?</h3>
        <p>
          There are many reasons why OOPs is mostly preferred, but the most
          important among them are:{" "}
        </p>
        <li>
          OOPs helps users to understand the software easily, although they
          don’t know the actual implementation.
        </li>
        <li>
          With OOPs, the readability, understandability, and maintainability of
          the code increase multifold.
        </li>
        <li>
          Even very big software can be easily written and managed easily using
          OOPs.
        </li>
      </div>

      {/* Q.3  */}
      <div>
        <h3 style={h3tag}>
          Q.3 What are some other programming paradigms other than OOPs?
        </h3>
        <p>
          Programming paradigms refers to the method of classification of
          programming languages based on their features. There are mainly two
          types of Programming Paradigms:
        </p>
        <p>
          <b>1. Imperative Programming Paradigm:</b> Imperative programming
          focuses on HOW to execute program logic and defines control flow as
          statements that change a program state. This can be further classified
          as:
        </p>
        <p>
          a){" "}
          <span className="underline"> Procedural Programming Paradigm: </span>{" "}
          Procedural programming specifies the steps a program must take to
          reach the desired state, usually read in order from top to bottom.
        </p>
        <p>
          b){" "}
          <span className=" underline">
            Object-Oriented Programming or OOP:
          </span>{" "}
          Object-oriented programming (OOP) organizes programs as objects, that
          contain some data and have some behavior.
        </p>
        <p>
          c) <span className=" underline">Parallel Programming:</span> Parallel
          programming paradigm breaks a task into subtasks and focuses on
          executing them simultaneously at the same time.
        </p>

        <p>
          <b>2. Declarative Programming Paradigm: </b> Declarative programming
          focuses on WHAT to execute and defines program logic, but not a
          detailed control flow. Declarative paradigm can be further classified
          into:
        </p>
        <p>
          a) <span className=" underline"> Logical Programming Paradigm: </span>{" "}
          Logical programming paradigm is based on formal logic, which refers to
          a set of sentences expressing facts and rules about how to solve a
          problem.
        </p>
        <p>
          b){" "}
          <span className=" underline"> Functional Programming Paradigm: </span>
          Functional programming is a programming paradigm where programs are
          constructed by applying and composing functions.
        </p>
        <p>
          c){" "}
          <span className=" underline"> Database Programming Paradigm: </span>{" "}
          Database programming model is used to manage data and information
          structured as fields, records, and files.
        </p>
      </div>

      {/* Q.4  */}
      <div>
        <h3 style={h3tag}>Q.4 What is meant by Structured Programming?</h3>
        <p>
          <b>Structured Programming</b> refers to the method of programming
          which consists of a completely structured control flow. Here structure
          refers to a block, which contains a set of rules, and has a definitive
          control flow, such as (if/then/else), (while and for), block
          structures, and subroutines. Nearly all programming paradigms include
          Structured programming, including the OOPs model.
        </p>
      </div>

      {/* Q.5  */}
      <div>
        <h3 style={h3tag}>Q.5 What are some advantages of using OOPs?</h3>
        <li>
          Highly complex programs can be created, handled, and maintained easily
          using object-oriented programming.
        </li>
        <li>OOPs, promote code reuse, thereby reducing redundancy.</li>
        <li>
          OOPs also helps to hide the unnecessary details with the help of Data
          Abstraction.
        </li>
        <li>
          OOPs, are based on a bottom-up approach, unlike the Structural
          programming paradigm, which uses a top-down approach.
        </li>
        <li>Polymorphism offers a lot of flexibility in OOPs.</li>
      </div>

      {/* Q.6  */}
      <div>
        <h3 style={h3tag}>Q.6 What are Classes & Objects?</h3>
        <p>
          <b># Class - </b>Class is a blueprint or template from which objects
          are created. A Class contains Attributes and behavior for objects. For
          example, a "Mobile Phone" has attributes like a brand name, RAM, and
          functions like texting and calling. Thus, the mobile phone is a class
          of various phones (the objects).
        </p>
        <p>
          <b># Object - </b>An object refers to the instance of the class. In
          the real world, an object is an actual entity to which a user
          interacts, whereas class is just the blueprint for that object. So the
          objects consume space and have some characteristic behavior. For
          example, a specific mobile like "Google Pixel 6a".
        </p>
      </div>

      {/* Q.7  */}
      <div>
        <h3 style={h3tag}>Q.7 What is encapsulation?</h3>
        <img
          height="350px"
          width="600px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/062/original/encapsulation.png?1614861880"
          alt=""
        />
        <p>
          Encapsulation is the process of binding data members and methods of a
          program together to do a specific job, without revealing unnecessary
          details.
        </p>
        <p>Encapsulation can also be defined in two different ways:</p>
        <p>
          <strong>1) Data hiding: </strong>Encapsulation is the process of
          hiding unwanted information, such as restricting access to any member
          of an object.
        </p>
        <p>
          <strong>2) Data binding: </strong>Encapsulation is the process of
          binding the data members and the methods together as a whole, as a
          class.
        </p>
      </div>

      {/* Q.8  */}
      <div>
        <h3 style={h3tag}>Q.8 What is Polymorphism?</h3>
        <p>
          Polymorphism means many forms. In OOPs, Polymorphism refers to the
          process by which some code, data, method, or object behaves
          differently under different circumstances or contexts. Compile-time
          polymorphism and Run time polymorphism are the two types of
          polymorphisms in OOPs languages.
        </p>
        <p>
          <strong>
            # Compile-time Polymorphism/Method Overloading/Static or Early
            Binding :{" "}
          </strong>
        </p>
        <p>
          Two methods with same name but different number of Parameters or
          different types of parameters. compiler decides what shape or value
          has to be taken by the entity in the picture.
        </p>

        <p>
          <strong>
            # Run-time Polymorphism/Method Overriding/Dynamic or Late Binding :{" "}
          </strong>
        </p>
        <p>
          Two methods with same name, with same number of parameters and with
          same type of parameters, But both method in different classes. It
          happens in Case of Inheritance. Here child's method will Override the
          parents method.it can't be decided by the compiler. Therefore what
          shape or value has to be taken depends upon the execution.
        </p>
      </div>

      {/* Q.9  */}
      <div>
        <h3 style={h3tag}>
          Q.9 Is it always necessary to create objects from class?
        </h3>
        <p>
          No. An object is necessary to be created if the base class has
          non-static methods. But if the class has static methods, then objects
          don’t need to be created. You can call the class method directly in
          this case, using the class name.
        </p>
      </div>

      {/* Q.10  */}
      <div>
        <h3 style={h3tag}>Q.10 How much memory does a class occupy?</h3>
        <p>
          Classes do not consume any memory. They are just a blueprint based on
          which objects are created. Now when objects are created, they actually
          initialize the class members and methods and therefore consume memory.
        </p>
      </div>

      {/* Q.11  */}
      <div>
        <h3 style={h3tag}>Q.11 What is a constructor & Destructor?</h3>
        <p>
          <strong>Constructor</strong> is a special method of class which is
          used to initializes the objects. Whenever the object of class is
          created, the constructor is called automatically. A class can have
          multiple constructors that differ in the number and/or type of their
          parameters. It's not, however, possible to have two constructors with
          the exact same parameters.
        </p>
        <p>
          {" "}
          <strong> Destructor </strong>is an instance member function that is
          invoked automatically whenever an object is going to be destroyed.
          Meaning, a destructor is the last function that is going to be called
          before an object is destroyed. It is not possible to define more than
          one destructor. Destructor neither requires any argument nor returns
          any value. Destructor release memory space occupied by the objects
          created by the constructor.{" "}
        </p>
      </div>

      {/* Q.12  */}
      <div>
        <h3 style={h3tag}>Q.12 Explain different Types of Constructors?</h3>
        <p>
          <strong>(i) Default Constructor: </strong> A default constructor is a
          constructor that takes no arguments. It is used to create an object
          with default values for its attributes.{" "}
        </p>
        <p>
          <strong>(ii) Parameterized Constructor: </strong> A parameterized
          constructor is a constructor that takes one or more arguments. It is
          used to create an object with custom values for its attributes.{" "}
        </p>
        <p>
          <strong>(iii) Copy Constructor: </strong>Copy Constructor is a type of
          constructor, whose purpose is to copy an object to another. What it
          means is that a copy constructor will clone an object and its values,
          into another object, is provided that both the objects are of the same
          class.
        </p>
      </div>

      {/* Q.13  */}
      <div>
        <h3 style={h3tag}>
          Q.13 Are class and structure the same? If not, what's the difference
          between a class and a structure?
        </h3>
        <p>
          No, class and structure are not the same. Though they appear to be
          similar, they have differences that make them apart. For example, the
          structure is saved in the stack memory, whereas the class is saved in
          the heap memory. Also, Data Abstraction cannot be achieved with the
          help of structure, but with class, Abstraction is majorly used.
        </p>
      </div>

      {/* Q.14  */}
      <div>
        <h3 style={h3tag}>Q.14 Explain Inheritance with it's Types.</h3>
        <p>
          Inheritance is a method through which one class inherits the
          properties from Another class. The class which inherits the properties
          is called child class and the class from which properties are being
          inherited is called Parent class.
        </p>
        <p>
          Inheritance provides the reusability of code especially when there is
          a large scale of code to reuse. It also establishes the relationship
          between different classes that is known as a Is-a relationship. We can
          also use it if we want to achieve method overriding.
        </p>
        <p>
          <strong> # Types Of Inheritance : </strong>
        </p>

        <p>
          <strong>(i) Single-inheritance</strong>
        </p>
        <br />
        <img
          height="160px"
          width="250px"
          src="https://media.geeksforgeeks.org/wp-content/uploads/single-inheritance.png"
          alt=""
        />
        <br />
        <br />
        <br />

        <p>
          <strong>(ii) Multiple-inheritance</strong>
        </p>
        <br />
        <img
          height="170px"
          width="550px"
          src="https://media.geeksforgeeks.org/wp-content/uploads/multiple-inheritance.png"
          alt=""
        />
        <br />
        <br />
        <br />

        <p>
          <strong>(iii) Multilevel-inheritance</strong>
        </p>
        <br />
        <img
          height="250px"
          width="350px"
          src="https://media.geeksforgeeks.org/wp-content/uploads/multilevel-inheritance.png"
          alt=""
        />
        <br />
        <br />
        <br />

        <p>
          <strong>(iv) Hierarchical-inheritance</strong>
        </p>
        <br />
        <img
          height="200px"
          width="400px"
          src="https://media.geeksforgeeks.org/wp-content/uploads/hierarchical-inheritance.png"
          alt=""
        />
        <br />
        <br />
        <br />
      </div>

      {/* Q.15  */}
      <div>
        <h3 style={h3tag}>Q.15 Explain Abstraction?</h3>
        <p>
          Abstraction is a process of hiding the implementation details and
          showing only functionality to the user. It can be achieved using
          abstract classes.
        </p>
        <p>
          <strong>Abstract class - </strong>It is restricted class, we can't
          create objects of this class. To access it, it must be inherited from
          another class. An abstract class can have both abstract and regular
          methods:
        </p>
        <p>
          <strong>Abstract methd - </strong>can only be used in an abstract
          class, and it does not have a body. The body is provided by the
          subclass (inherited from).
        </p>
      </div>

      {/* Q.16  */}
      <div>
        <h3 style={h3tag}>
          Q.16 Why constructor in abstraction but not in interface?
        </h3>
        <p>
          interface do not have constructor because all data members in
          interface are 'public abstract static final' by default.{" "}
        </p>
        <p>
          But in abstract classes we have abstract method as well as instance
          variables and non-abstract methods. To Initialize the non-abstract
          methods and instance variables there is constructor in abstract class.{" "}
        </p>
      </div>

      {/* Q.17  */}
      <div>
        <h3 style={h3tag}>Q.17 What are limitations of inheritance?</h3>
        <p>
          Yes, with more powers comes more complications. Inheritance is a very
          powerful feature in OOPs, but it has some limitations too. Inheritance
          needs more time to process, as it needs to navigate through multiple
          classes for its implementation. Also, the classes involved in
          Inheritance - the base class and the child class, are very tightly
          coupled together. So if one needs to make some changes, they might
          need to do nested changes in both classes. Inheritance might be
          complex for implementation, as well. So if not correctly implemented,
          this might lead to unexpected errors or incorrect outputs.
        </p>
      </div>

      {/* Q.18  */}
      <div>
        <h3 style={h3tag}>Q.18 Explain Interface in JAVA?</h3>
        <p>
          It is used to achieve abstraction & multiple inheritance. Interface
          methods does not have a body. To access interface methods, the
          interface must be implemented by another class with 'Implements'
          Keyword. The body of Interface method is provided by implement class.
        </p>
      </div>

      {/* Q.19  */}
      <div>
        <h3 style={h3tag}>Q.19 What are access specifiers?</h3>
        <p>
          <b>(i) Public - </b> Can be accessed from anywhere.
        </p>
        <p>
          <b>(ii) Private - </b>Only accessible within same class.
        </p>
        <p>
          <b>(iii) Default - </b>Only accessible in same class and in subclass,
          but subclass should be in same package.
        </p>
        <p>
          <b>(iv) Protected - </b>It is accessible in same class or in subclass.
          subclass can be different packages.{" "}
        </p>
      </div>
    </div>
  );
}

export default Oops;
