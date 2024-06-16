import React from "react";

function Dbms() {
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
          Q.1 What is DBMS and what is its utility? Explain RDBMS with examples.
        </h3>
        <p>
          <strong>DBMS</strong> stands for Database Management System, is a set
          of applications or programs that enable users to create and maintain a
          database.DBMS provides a tool or an interface for performing various
          operations such as inserting, deleting, updating, etc. into a
          database. A DBMS system helps a user to overcome problems like data
          inconsistency, data redundancy, etc. in a database and makes it more
          convenient and organized to use it.
        </p>
        <p>
          <strong>RDMS</strong> stands for Relational Database Management System
          & was introduced in the 1970s to access & store data more efficiently
          than DBMS. RDBMS stores data in the form of tables as compared to DBMS
          which stores data as files. Storing data as rows and columns makes it
          easier to locate specific values in the database and makes it more
          efficient as compared to DBMS.
        </p>
        <p>
          <strong>Examples</strong> of popular RDBMS systems are MySQL, Oracle
          DB, etc.
        </p>
      </div>

      {/* Q.2  */}
      <div>
        <h3 style={h3tag}>Q.2 What is Database?</h3>
        <p>
          A Database is an organized, consistent, and logical collection of data
          that can easily be updated, accessed, and managed.
        </p>
        <p>
          Data within the most common types of databases in operation today is
          typically modeled in rows and columns in a series of tables to make
          processing and data querying efficient. The data can then be easily
          accessed, managed, modified, updated, controlled, and organized. Most
          databases use structured query language (SQL) for writing and querying
          data.
        </p>
      </div>

      {/* Q.3  */}
      <div>
        <h3 style={h3tag}>Q.3 Explain a few advantages of a DBMS.</h3>
        <p>
          <strong>(i) Data Sharing: </strong>Data from a single database can be
          simultaneously shared by multiple users.
        </p>
        <p>
          <strong>(ii) Integrity constraints: </strong> The existence of such
          constraints allows storing of data in an organized and refined manner.
        </p>
        <p>
          <strong>(iii) Controlling redundancy in a database: </strong>
          Eliminates redundancy in a database by providing a mechanism that
          integrates all the data in a single database.
        </p>
        <p>
          <strong>(iv) Data Independence: </strong>This allows changing the data
          structure without altering the composition of any of the executing
          application programs.
        </p>
        <p>
          <strong>(v) Provides backup and recovery facility: </strong> It can be
          configured to automatically create the backup of the data and restore
          the data in the database whenever required.
        </p>
        <p>
          <strong>(vi) Data Security: </strong> DBMS provides the necessary
          tools to make the storage and transfer of data more reliable and
          secure. Authentication (the process of giving restricted access to a
          user) and encryption (encrypting sensitive data such as OTP, credit
          card information, etc.) are some popular tools used to secure data in
          a DBMS.
        </p>
      </div>

      {/* Q.4  */}
      <div>
        <h3 style={h3tag}>Q.4 Explain different languages present in DBMS.</h3>
        <p>
          <strong>(i) DDL(Data Definition Language) :</strong> It contains
          commands which are required to define the database. E.g. CREATE,
          ALTER, DROP, TRUNCATE, RENAME, etc.
        </p>
        <p>
          <strong>(ii) DML(Data Manipulation Language) :</strong> It contains
          commands which are required to manipulate the data present in the
          database. E.g., SELECT, UPDATE, INSERT, DELETE, etc.
        </p>
        <p>
          <strong>(iii) DCL(Data Control Language) : </strong> It contains
          commands which are required to deal with the user permissions and
          controls of the database system. E.g., GRANT and REVOKE.
        </p>
        <p>
          <strong>(iv) TCL(Transaction Control Language) :</strong> It contains
          commands which are required to deal with the transaction of the
          database. E.g., COMMIT, ROLLBACK, and SAVEPOINT.
        </p>
      </div>

      {/* Q.5  */}
      <div>
        <h3 style={h3tag}>Q.5 What is meant by ACID properties in DBMS?</h3>
        <p>
          ACID stands for Atomicity, Consistency, Isolation, and Durability in a
          DBMS these are those properties that ensure a safe and secure way of
          sharing data among multiple users.{" "}
        </p>
        <img
          width="680px"
          height="450px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/265/original/acid_properties.png?1617187570"
          alt=""
        />
        <p>
          <strong>(i) Atomicity : </strong> This property reflects the concept
          of either executing the whole query or executing nothing at all, which
          implies that if an update occurs in a database then that update should
          either be reflected in the whole database or should not be reflected
          at all.
        </p>
        <p>
          <strong>(ii) Consistency : </strong>This property ensures that the
          data remains consistent before and after a transaction in a database.
        </p>
        <p>
          <strong>(iii) Isolation : </strong> This property ensures that each
          transaction is occurring independently of the others. This implies
          that the state of an ongoing transaction doesn’t affect the state of
          another ongoing transaction.
        </p>
        <p>
          <strong>(iv) Durability : </strong> This property ensures that the
          data is not lost in cases of a system failure or restart and is
          present in the same state as it was before the system failure or
          restart.
        </p>
      </div>

      {/* Q.6  */}
      <div>
        <h3 style={h3tag}>
          Q.6 Are NULL values in a database the same as that of blank space or
          zero?
        </h3>
        <p>
          No, a NULL value is very different from that of zero and blank space
          as it represents a value that is assigned, unknown, unavailable, or
          not applicable as compared to blank space which represents a character
          and zero represents a number.
        </p>
        <p>
          Example: NULL value in “number_of_courses” taken by a student
          represents that its value is unknown whereas 0 in it means that the
          student hasn’t taken any courses.
        </p>
      </div>

      {/* Q.7  */}
      <div>
        <h3 style={h3tag}>
          Q.7 Mention the issues with traditional file-based systems that make
          DBMS a better choice?
        </h3>
        <p>
          <strong>(i) Data redundancy & inconsistency : </strong>File processing
          system leads to the usage of many copies of same data, This is data
          redundancy. In file system if we need to change any of the data, then
          we need to change data at all copies. If not, Then this will lead to
          inconsistency.
        </p>
        <p>
          <strong>(ii) difficulty in accessing data : </strong>In a file
          processing system, to access data differently we need to have
          Different programs. Means for every different task we need different
          program. eg. For To access names of student we need different program
          and To access address different program is needed.
        </p>
        <p>
          <strong>(iii) Data Isolation : </strong>Here files are stored in
          different locations, different formats thus they are isolated. For eg.
          At One location the student data may be stored in '.txt' format and in
          other location the same file may be stored in '.doc' format
        </p>
        <p>
          <strong>(iv) Integrity problems : </strong>File system doesn’t assure
          that the data is 100% correct and consistent.
        </p>
        <p>
          <strong>(v) Security Problems :</strong>File system does not provide
          strong and powerfull security mechanism.
        </p>
      </div>

      {/* Q.8  */}
      <div>
        <h3 style={h3tag}>Q.8 What is Data Warehousing?</h3>
        <p>
          The process of collecting, extracting, transforming, and loading data
          from multiple sources and storing them in one database is known as
          data warehousing. A data warehouse can be considered as a central
          repository where data flows from transactional systems and other
          relational databases and is used for data analytics. A data warehouse
          comprises a wide variety of an organization’s historical data that
          supports the decision-making process in an organization.
        </p>
        <img
          width="600px"
          height="350px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/268/original/data_warehousing.png?1617187867"
          alt=""
        />
      </div>

      {/* Q.9  */}
      <div>
        <h3 style={h3tag}>
          Q.9 What is database schema and instance? explain three schema
          architecture.
        </h3>
        <li>
          <b> Schema - </b>Database schema represents the structure of data.
          Means how data is stored in database.
        </li>
        <li>
          <b> Instance - </b>The actual data stored in a database at a
          particular moment in Time. This includes the collection of all data in
          databse.
        </li>
        <br />
        <p>
          <strong>
            # Three schema architecture or levels of data abstraction :
          </strong>
        </p>
        <img
          width="420px"
          height="500px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/223/original/levels_of_abstraction.png?1616075395"
          alt=""
        />
        <p>
          <strong>(i) Physical or Internal level : </strong> It describes the
          physical storage structure of the database and the details of this
          level are typically hidden from system admins, developers, and users.{" "}
        </p>
        <p>
          <strong>(ii) Conceptual or Logical level : </strong> It is the level
          on which developers and system admins work and it determines the
          structure of database and what is the relationship between the data
          points.
        </p>
        <p>
          <strong>(iii) External or View level : </strong>It includes number of
          external schema or user views. Each external schema describes the part
          of the database that a particular user group is interested in and
          hides the rest of the the databse from that user grou.{" "}
        </p>
      </div>

      {/* Q.10  */}
      <div>
        <h3 style={h3tag}>
          Q.10 Explain the difference between a 2-tier and 3-tier architecture
          in a DBMS.
        </h3>
        <p>
          The <b>2-tier architecture</b> refers to the client-server
          architecture in which applications at the client end directly
          communicate with the database at the server end without any middleware
          involved.
        </p>
        <p>
          <b>Example - </b>Contact Management System created using MS-Access or
          Railway Reservation System, etc.
        </p>
        <img
          width="380px"
          height="500px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/283/original/2_tier.png?1617188844"
          alt=""
        />

        <p>
          The <b> 3-tier architecture </b> contains another layer between the
          client and the server to provide GUI to the users and make the system
          much more secure and accessible. In this type of architecture, the
          application present on the client end interacts with an application on
          the server end which further communicates with the database system.
        </p>
        <img
          width="430px"
          height="560px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/284/original/3_tier.png?1617188871"
          alt=""
        />
      </div>

      {/* Q,11  */}
      <div>
        <h3 style={h3tag}>
          Q.11 What is meant by an entity-relationship (E-R) model? Explain the
          terms Entity, Entity Type, and Entity Set in DBMS.
        </h3>
        <p>
          An <b>entity-relationship model </b> is a diagrammatic approach to a
          database design where real-world objects are represented as entities
          and relationships between them are mentioned.{" "}
        </p>
        <img
          width="640px"
          height="350px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/269/original/E_R_Model.png?1617187943"
          alt=""
        />

        <li>
          <b>Entity : </b>An entity is defined as a real-world object having
          attributes that represent characteristics of that particular object.
          For example, a student, an employee, or a teacher represents an
          entity.
        </li>
        <li>
          <b>Entity Type : </b>An entity type is defined as a collection of
          entities that have the same attributes. One or more related tables in
          a database represent an entity type. Entity type or attributes can be
          understood as a characteristic which uniquely identifies the entity.
          For example, a student represents an entity that has attributes such
          as student_id, student_name, etc.
        </li>
        <li>
          <b>Entity Set : </b>An entity set can be defined as a set of all the
          entities present in a specific entity type in a database. For example,
          a set of all the students, employees, teachers, etc. represent an
          entity set.
        </li>
      </div>

      {/* Q.12  */}
      <div>
        <h3 style={h3tag}>
          Q.12 Explain different types of relationships amongst tables in a
          DBMS.
        </h3>
        <p>
          Following are different types of relationship amongst tables in a DBMS
          system:
        </p>
        <li>
          <b>One to One Relationship :</b>This type of relationship is applied
          when a particular row in table X is linked to a single row in table Y.
        </li>
        <img
          width="600px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/270/original/1_to_1.png?1617188060"
          alt=""
        />

        <li>
          <b>One to Many Relationship : </b> This type of relationship is
          applied when a single row in table X is related to many rows in table
          Y.
        </li>
        <img
          width="600px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/271/original/1_to_n.png?1617188084"
          alt=""
        />

        <li>
          <b>Many to Many Relationship : </b>This type of relationship is
          applied when multiple rows in table X can be linked to multiple rows
          in table Y.
        </li>
        <img
          width="600px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/272/original/m_to_m.png?1617188110"
          alt=""
        />

        <li>
          <b>Many to One Relationship : </b>This type of relationship is applied
          when multiple rows in table X are linked to singal rows in table Y.
        </li>
      </div>

      {/* Q.13  */}
      <div>
        <h3 style={h3tag}>Q.13 What is database Keys?</h3>
        <p>
          Keys in database is used to uniquely identify and access any record or
          row of data from a table. It is also used to establish and identify
          relationships among tables.
        </p>
        <p>
          <strong>(i) Primary Key : </strong>Uniq and not null.
        </p>
        <p>
          <strong>(ii) Candidate Key : </strong>The candidate key represents a
          set of properties that can uniquely identify a table. Each table may
          have multiple candidate keys. One key amongst all candidate keys can
          be chosen as a primary key.
        </p>
        <p>
          <strong>(iii) Super Key : </strong> The super key defines a set of
          attributes that can uniquely identify a tuple. Candidate key and
          primary key are subsets of the super key, in other words, the super
          key is their superset.
        </p>
        <p>
          <strong>(iv) Alternate Key : </strong> All the candidate keys which
          are not chosen as primary keys are considered as alternate Keys.
        </p>
        <p>
          <strong>(v) Foreign Key : </strong>Foreign key is a field(or set of
          fields) in one table, that refers to the primary key in another table.
        </p>
        <p>
          <strong>(vi) Composite key : </strong> A composite key refers to a
          combination of two or more columns that can uniquely identify each
          tuple in a table.
        </p>
      </div>

      {/* Q.14  */}
      <div>
        <h3 style={h3tag}>Q.14 Explain Integrity Constraints?</h3>
        <p>
          <strong>(i) Domain Constraint : </strong>It is used to restrict values
          or attributes a column can hold in table. The values should be in
          Domain Range.
        </p>
        <p>
          <strong>(ii) Entity Constraint : </strong>It is used to ensure that
          primary key can't be null.
        </p>
        <p>
          <strong>(iii) Referential Constraint : </strong>If a Foreign key in
          table1 refers to the primary key of table2, Then every value of
          foreign key in Table1 must be either NULL or be available in Table2.{" "}
        </p>
        <p>
          <strong>(iv) Key Constraint : </strong>An entity set can have multiple
          keys, but out of which one key will be primary key. And Selected key
          musst be uniq & not NULL.
        </p>
      </div>

      {/* Q.15  */}
      <div>
        <h3 style={h3tag}>Q.15 Explain Indexing in DBMS?</h3>
        <p>
          Indexing is used to optimize the performance of a database by
          minimizing the number of disk accesses required when a query is
          processed. The index is a type of data structure. It is used to locate
          and access the data in a database table quickly.
        </p>
        <p>
          <strong>Index Structure:</strong>
        </p>
        <p>Indexes can be created using some database columns.</p>
        <img
          src="https://static.javatpoint.com/dbms/images/dbms-indexing-in-dbms.png"
          alt=""
        />
        <li>
          The first column of the database is the search key that contains a
          copy of the primary key or candidate key of the table. The values of
          the primary key are stored in sorted order so that the corresponding
          data can be accessed easily.
        </li>
        <li>
          The second column of the database is the data reference. It contains a
          set of pointers holding the address of the disk block where the value
          of the particular key can be found.
        </li>
      </div>

      {/* Q.16  */}
      <div>
        <h3 style={h3tag}>Q.16 Explain Sharding.</h3>
        <p>
          Sharding is a method of splitting and storing a single logical dataset
          in multiple databases. By distributing the data among multiple
          machines, a cluster of database systems can store larger dataset and
          handle additional requests. Sharding is necessary if a dataset is too
          large to be stored in a single database. Moreover, many sharding
          strategies allow additional machines to be added. Sharding allows a
          database cluster to scale along with its data and traffic growth.
        </p>
      </div>

      {/* Q.17  */}
      <div>
        <h3 style={h3tag}>Q.17 Explain Concurrency.</h3>
        <p>
          Concurrency Control in a Database Management System is a fundamental
          concept that ensures multiple transactions can occur concurrently
          without compromising the integrity or consistency of the database.
        </p>
        <br />
        <strong> # Why Concurrency Control :</strong>
        <p>
          concurrent execution can lead to various following challenges & to
          avoid these challenges we need Concurrency Control.
        </p>
        <p>
          <strong>(i) Lost Updates : </strong>Consider two users trying to
          update the same data. If one user reads a data item and then another
          user reads the same item and updates it, the first user’s updates
          could be lost if they weren’t aware of the second user’s actions.
        </p>
        <p>
          <strong>(ii) Uncommitted Data : </strong>If one user accesses data
          that another user has updated but not yet committed (finalized), and
          then the second user decides to abort (cancel) their transaction, the
          first user has invalid data.
        </p>
        <p>
          <strong>(iii) Inconsistent Retrievals : </strong>A transaction reads
          several values from the database, but another transaction modifies
          some of those values in the middle of its operation.
        </p>
        <p>The various concurrency control techniques are:</p>
        <p>(i) Two-phase locking Protocol</p>
        <p>(ii) Time stamp ordering Protocol</p>
        <p>(iii) Validation concurrency control</p>
      </div>

      {/* Q.18  */}
      <div>
        <h3 style={h3tag}>
          Q.18 What is a serializable schedule? explain conflict
          serializability.
        </h3>
        <p>
          If a non-serial schedule can be transformed into its corresponding
          serial schedule, it is said to be serializable. Simply said, a
          non-serial schedule is referred to as a serializable schedule if it
          yields the same results as a serial timetable.
        </p>
        <p>
          <strong> Conflict serializability </strong> is a property of a
          schedule that guarantees that the outcome of the concurrent
          transactions is equivalent to some serial order of the same
          transactions. This means that the concurrent schedule does not violate
          any data dependencies or constraints that would be enforced by the
          serial order. A schedule is conflict serializable if it can be
          transformed into a serial schedule by swapping the order of
          non-conflicting operations. Two operations conflict if they belong to
          different transactions and access the same data item, and at least one
          of them is a write operation.
        </p>
      </div>

      {/* Q.19  */}
      <div>
        <h3 style={h3tag}>Q.19 Explain Normalization in detail.</h3>
        <p>
          Normalization is the process of minimizing redundancy from a relation
          or set of relations. Redundancy in relation may cause insertion,
          deletion, and update anomalies. So, it helps to minimize the
          redundancy in relations. Normal forms are used to eliminate or reduce
          redundancy in database tables.
        </p>
        <p>
          <b> # Normal Forms :</b>
        </p>
        <p>
          <b>(i) First Normal Form (1NF): </b> This is the most basic level of
          normalization. In 1NF, each table cell should contain only a single
          value, and each column should have a unique name. The first normal
          form helps to eliminate duplicate data and simplify queries.{" "}
        </p>
        <p>
          <b>(ii) Second Normal Form (2NF): </b> A relation will be in 2NF if it
          is in 1NF and all non-key attributes are fully functional dependent on
          the primary key.{" "}
        </p>
        <p>
          <b>(iii) Third Normal Form (3NF): </b> A relation is in the third
          normal form, if there is no transitive dependency for non-prime
          attributes as well as it is in the second normal form. If A-B and B-C
          are two FDs then A-C is called transitive dependency. The
          normalization of 2NF relations to 3NF involves the removal of
          transitive dependencies.{" "}
        </p>
        <p>
          <b>(iv) Boyce-codd Normal Form (BCNF): </b> Table must be in Third
          Normal Form. In relation 'X-Y', X must be a superkey in a relation.{" "}
        </p>
      </div>

      {/* Q.20  */}
      <div>
        <h3 style={h3tag}>Q.20 what is lock? Exclusive lock vs share lock.</h3>
        <p>
          In this type of protocol, any transaction cannot read or write data
          until it acquires an appropriate lock on it. There are two types of
          lock:
        </p>
        <p>
          <b>(i) Shared lock :</b>
        </p>
        <p>
          Shared locks allow multiple transactions to read the same data
          simultaneously, but prevents modification until all shared locks have
          been released. Shared locks are also called read locks, and are used
          for maintaining read integrity.
        </p>

        <p>
          <b>(ii) Exclusive lock : </b>
        </p>
        <p>
          Exclusive locks allow only one transaction access to read or modify
          data at a given time. No other transactions can read or modify the
          data until the current transaction releases its Exclusive lock.
          Exclusive locks are also known as write locks.{" "}
        </p>
      </div>
    </div>
  );
}

export default Dbms;
