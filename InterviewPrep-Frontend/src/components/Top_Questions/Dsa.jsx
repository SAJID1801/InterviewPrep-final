import React from "react";

function Dsa() {
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
      <div>
        <h3 style={h3tag}>Q.1 What are Data Structures?</h3>
        <p>
          Data structures are essential components that help organize and store
          data efficiently in computer memory. They provide a way to manage and
          manipulate data effectively, enabling faster access, insertion, and
          deletion operations. Common data structures include arrays, linked
          lists, stacks, queues, trees, and graphs , each serving specific
          purposes based on the requirements of the problem at hand.
        </p>
      </div>

      {/* Q.2  */}
      <div>
        <h3 style={h3tag}>Q.2 Why Create Data Structures?</h3>
        <p>
          Data structures serve a number of important functions in a program.
          They ensure that each line of code performs its function correctly and
          efficiently, they help the programmer identify and fix problems with
          his/her code, and they help to create a clear and organized code base.
        </p>
      </div>

      {/* Q.3  */}
      <div>
        <h3 style={h3tag}>Q.3 Describe the types of Data Structures?</h3>
        <img
          width="650px"
          height="250px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/632/original/types_of_Data_Structures.png?1659587899"
          alt=""
        />
        <li>
          <b>Linear Data Structure : </b>A data structure that includes data
          elements arranged sequentially or linearly, where each element is
          connected to its previous and next nearest elements, is referred to as
          a linear data structure. Arrays and linked lists are two examples of
          linear data structures.
        </li>
        <li>
          <b>Non-Linear Data Structure : </b> Non-linear data structures are
          data structures in which data elements are not arranged linearly or
          sequentially. We cannot walk through all elements in one pass in a
          non-linear data structure, as in a linear data structure. Trees and
          graphs are two examples of non-linear data structures.
        </li>
      </div>

      {/* Q.4  */}
      <div>
        <h3 style={h3tag}>
          Q.4 What is a stack data structure? What are the applications of
          stack?
        </h3>
        <p>
          It is a linear data structure that follows a particular order in which
          operations are performed. LIFO (Last In First Out) or FILO (First In
          Last Out) are two possible orders. A stack consists of a sequence of
          items. The element that's added last will come out first, a real-life
          example might be a stack of clothes on top of each other. When we
          remove the cloth that was previously on top, we can say that the cloth
          that was added last comes out first.
        </p>
        <img
          width="600px"
          height="350px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/633/original/stack_data_structure.png?1659588010"
          alt=""
        />
        <p>Following are some applications for stack data structure:</p>
        <ul>
          <li>It acts as temporary storage during recursive operations</li>
          <li>Redo and Undo operations in doc editors</li>
          <li>Reversing a string</li>
          <li>Postfix to Infix Expressions</li>
        </ul>
      </div>

      {/* Q.5  */}
      <div>
        <h3 style={h3tag}>
          Q.5 What is a queue data structure? What are the applications of
          queue?
        </h3>
        <p>
          It follows the principle of “First in, First out” (FIFO), where the
          first element added to the queue is the first one to be removed.
          Queues are commonly used in various algorithms and applications for
          their simplicity and efficiency in managing data flow.
        </p>
        <img
          width="900px"
          height="330px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/657/original/queue_data_structure.png?1660281254"
          alt=""
        />
        <p>Following are some applications of queue data structure:</p>
        <li>Breadth-first search algorithm in graphs.</li>
        <li>
          Operating system: job scheduling operations, Disk scheduling, CPU
          scheduling etc.
        </li>
        <li>Call management in call centres.</li>
      </div>

      {/* Q.6  */}
      <div>
        <h3 style={h3tag}>Q.6 What are the applications of arrays?</h3>
        <p>
          Array data structures are commonly used in databases and other
          computer systems to store large amounts of data efficiently. They are
          also useful for storing information that is frequently accessed, such
          as large amounts of text or images. Arrays are used as the underlying
          data structure for implementing stacks and queues, which are commonly
          used in algorithms and data structures.
        </p>
      </div>

      {/* Q.7  */}
      <div>
        <h3 style={h3tag}>
          Q.7 What is a linked list data structure? What are the applications
          for the Linked list?
        </h3>
        <p>
          Linked List can be defined as collection of objects called nodes that
          are randomly stored in the memory. A node contains two fields i.e.
          data stored at that particular address and the pointer which contains
          the address of the next node in the memory. The last node of the list
          contains pointer to the null.
        </p>
        <img
          width="700px"
          height="180px"
          src="https://static.javatpoint.com/ds/images/linked-list.png"
          alt=""
        />
        <p>
          It allocates the memory dynamically. All the nodes of linked list are
          non-contiguously stored in the memory and linked together with the
          help of pointers. Sizing is no longer a problem since we do not need
          to define its size at the time of declaration. List grows as per the
          program's demand and limited to the available memory space.
        </p>
        <p>Following are some applications of linked list data structure:</p>
        <ul>
          <li>
            Stack, Queue, binary trees, and graphs are implemented using linked
            lists.
          </li>
          <li>Dynamic management for Operating System memory.</li>
          <li>
            Forward and backward operation in the browser and music player.
          </li>
        </ul>
      </div>

      {/* Q.8  */}
      <div>
        <h3 style={h3tag}>Q.8 What is hashmap in data structure?</h3>
        <p>
          Hashmap is a data structure that uses an implementation of a hash
          table data structure which allows access or search to data in constant
          time (O(1)) complexity if you have the key. In the worst-case
          scenario, it can happen that all keys might have the same hashcode,
          which will result in the hash table turning into a linked list. In
          this case, searching a value will take O(n) complexity as opposed to
          O(1) time due to the nature of the linked list. Hence, care has to be
          taken while selecting hashing algorithm.
        </p>
      </div>

      {/* Q. 9  */}
      <div>
        <h3 style={h3tag}>
          Q.9 What is binary tree data structure? What are the applications for
          binary trees?
        </h3>
        <p>
          A binary tree is a data structure that is used to organize data in a
          way that allows for efficient retrieval and manipulation. A “binary
          tree” is a tree data structure where every node has two child nodes
          (at the most) that form the tree branches. These child nodes are
          called left and right child nodes.
        </p>
        <img
          width="590px"
          height="580px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/663/original/binary_tree_data_structure.png?1660281861"
          alt=""
        />
        <p>
          <b>Types:</b>
        </p>
        <p>
          <b>1) Full Binary Tree :</b>
        </p>
        <p>
          {" "}
          The tree can only be considered as the full binary tree if each node
          must contain either 0 or 2 children. The full binary tree can also be
          defined as the tree in which each node must contain 2 children except
          the leaf nodes.
        </p>
        <img
          width="140px"
          height="140px"
          src="https://static.javatpoint.com/ds/images/types-of-binary-tree.png"
          alt=""
        />

        <p>
          <b>2) Complete Binary Tree :</b>
        </p>
        <p>
          The complete binary tree is a tree in which all the nodes are
          completely filled except the last level. In the last level, all the
          nodes must be as left as possible. In a complete binary tree, the
          nodes should be added from the left.
        </p>
        <img
          width="290px"
          height="240px"
          src="https://static.javatpoint.com/ds/images/types-of-binary-tree2.png"
          alt=""
        />

        <p>
          <b>3) Perfect Binary Tree :</b>
        </p>
        <p>
          A tree is a perfect binary tree if all the internal nodes have 2
          children, and all the leaf nodes are at the same level.
        </p>
        <img
          width="260px"
          height="200px"
          src="https://static.javatpoint.com/ds/images/types-of-binary-tree3.png"
          alt=""
        />

        <p>
          <b>4) Degenerate Binary Tree :</b>
        </p>
        <p>
          A binary tree is said to be a degenerate binary tree or pathological
          binary tree if every internal node has only a single child. Such trees
          are similar to a linked list performance-wise. Here is an example of a
          degenerate binary tree.{" "}
        </p>
        <img
          width="200px"
          height="280px"
          src="https://static.javatpoint.com/ds/images/types-of-binary-tree5.png"
          alt=""
        />

        <p>
          Some More types are mensioned below like : BST, AVL trees. Following
          are some applications for binary tree data structure:
        </p>
        <li>
          It's widely used in computer networks for storing routing table
          information.
        </li>
        <li>Syntax parsing in compiler decision.</li>
        <li>File systems.</li>
        <li>Heap implementation.</li>
        <li>Trie.</li>
      </div>

      {/* Q.10  */}
      <div>
        <h3 style={h3tag}>
          Q.10 What is binary search tree data structure? What are the
          applications for binary search trees?
        </h3>
        <p>
          A Binary Search Tree is a Binary Tree where every node's left child
          has a lower value, and every node's right child has a higher value. A
          clear advantage with Binary Search Trees is that operations like
          search, delete, and insert are fast and done without having to shift
          values in memory. The time complexity for searching, insertion,
          deletion a BST for a value is O(h), where h is the height of the tree.
        </p>
        <p>Following are some applications for binary tree data structure:</p>
        <ul>
          <li>It is used for indexing and multi-level indexing.</li>
          <li>It is used for implementing various search algorithms.</li>
          <li>They are also used in priority queues.</li>
        </ul>
      </div>

      {/* Q.11  */}
      <div>
        <h3 style={h3tag}>Q.11 What are the applications for deque?</h3>
        <p>
          Following are some real-time applications for deque data structure:{" "}
        </p>
        <li>Storing a web browser’s history.</li>
        <li>Storing a software application’s list of undo operations.</li>
        <li>Job scheduling algorithm</li>
      </div>

      {/* Q.12  */}
      <div>
        <h3 style={h3tag}>
          Q.12 What are the applications for priority queue?
        </h3>
        <p>
          Following are some real-time applications for priority queue data
          structure:{" "}
        </p>
        <li>
          Used in graph algorithms like Dijkstra, Prim’s Minimum spanning tree
          etc.
        </li>
        <li>Huffman code for data compression.</li>
        <li>Finding Kth Largest/Smallest element</li>
      </div>

      {/* Q.13  */}
      <div>
        <h3 style={h3tag}>
          Q.13 What is graph data structure and its representations? What are
          the applications for graphs?
        </h3>
        <p>
          A graph is a type of non-linear data structure made up of nodes and
          edges. The nodes are also known as vertices, and edges are lines or
          arcs that connect any two nodes in the graph.
        </p>
        <img
          width="440px"
          height="300px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/648/original/graph_data_structure.png?1659593074"
          alt=""
        />
        <p>The following are the two most common graph representations:</p>
        <p>
          <strong>(i) Adjacency Matrix</strong>
        </p>
        <img
          width="600px"
          height="300px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/649/original/Adjacency_Matrix.png?1659593181"
          alt=""
        />

        <p>
          <strong>(ii) Adjacency List</strong>
        </p>
        <img
          width="750px"
          height="270px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/650/original/Adjacency_List.png?1659593262"
          alt=""
        />
      </div>

      {/* Q.14  */}
      <div>
        <h3 style={h3tag}>Q.14 What is AVL tree data structure?</h3>
        <p>
          AVL trees are height balancing binary search trees named after their
          inventors Adelson, Velski, and Landis. The AVL tree compares the
          heights of the left and right subtrees and ensures that the difference
          is less than equal to one. This distinction is known as the Balance
          Factor.
        </p>
        <pre>
          <strong>
            BalanceFactor = height(left-subtree) − height(right-subtree)
          </strong>
        </pre>
        <img
          width="500px"
          height="500px"
          src="https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/003/652/original/AVL_Tree.png?1659593590"
          alt=""
        />
      </div>
    </div>
  );
}

export default Dsa;
