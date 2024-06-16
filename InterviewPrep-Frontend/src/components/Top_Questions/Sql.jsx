import React from "react";

function Sql() {
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
        <h3 style={h3tag}>Q.1 What is SQL?</h3>
        <p>
          SQL stands for Structured Query Language. It is the standard language
          for relational database management systems which is used for accessing
          and manipulating databases.{" "}
        </p>
      </div>

      {/* Q.2  */}
      <div>
        <h3 style={h3tag}>
          Q.2 What is the difference between SQL and NoSQL databases?
        </h3>
        <p>
          <b>SQL - </b>It is reletional data model which stores data in form of
          table.
        </p>
        <p>
          <b>No SQL - </b>It is kind of database system that doesn't store data
          in table format.
        </p>
      </div>

      {/* Q.3  */}
      <div>
        <h3 style={h3tag}>Q.3 What are Tables, Fields & records?</h3>
        <p>
          A table is an organized collection of data stored in the form of rows
          and columns. Columns can be categorized as vertical and rows as
          horizontal. The columns in a table are called fields while the rows
          can be referred to as records.
        </p>
      </div>

      {/* Q.4  */}
      <div>
        <h3 style={h3tag}>Q.4 What are Constraints in SQL?</h3>
        <p>
          Constraints are used to specify the rules concerning data in the
          table. It can be applied for single or multiple fields in an SQL table
          during the creation of the table or after creating using the ALTER
          TABLE command. The constraints are:
        </p>
        <li>
          <b>NOT NULL - </b>Restricts NULL value from being inserted into a
          column.
        </li>
        <li>
          <b>CHECK - </b> Verifies that all values in a field satisfy a
          condition.
        </li>
        <li>
          <b>DEFAULT - </b>Automatically assigns a default value if no value has
          been specified for the field.
        </li>
        <li>
          <b>UNIQUE - </b> Ensures unique values to be inserted into the field.
        </li>
        <li>
          <b>INDEX - </b>Indexes a field providing faster retrieval of records.
        </li>
        <li>
          <b>PRIMARY KEY - </b>Not NULL & UNIQE.
        </li>
        <li>
          <b>FOREIGN KEY - </b>Ensures referential integrity for a record in
          another table.
        </li>
      </div>

      {/* Q.5  */}
      <div>
        <h3 style={h3tag}>Q.5 What is a Query?</h3>
        <p>
          A query is a request for data or information from a database table or
          combination of tables. A database query can be either a select query
          or an action query.
        </p>
      </div>

      {/* Q.6  */}
      <div>
        <h3 style={h3tag}>Q.6 What is a Join? Describe its different types.</h3>
        <p>
          A JOIN clause is used to combine rows from two or more tables, based
          on a related column between them. There are multiple types of joins:
        </p>

        <p>
          <b>1. INNER JOIN</b>
        </p>
        <p>
          JOIN (or explicitly INNER JOIN) returns rows that have matching values
          in both tables.
        </p>
        <img src="https://www.w3schools.com/sql/img_inner_join.png" alt="" />

        <p>
          <b>2. LEFT JOIN</b>
        </p>
        <p>
          LEFT JOIN returns all rows from the left table with corresponding rows
          from the right table. If there's no matching row, NULLs are returned
          as values from the second table.
        </p>
        <img src="https://www.w3schools.com/sql/img_left_join.png" alt="" />

        <p>
          <b>3. RIGHT JOIN</b>
        </p>
        <p>
          RIGHT JOIN returns all rows from the right table with corresponding
          rows from the left table. If there's no matching row, NULLs are
          returned as values from the left table.
        </p>
        <img src="https://www.w3schools.com/sql/img_right_join.png" alt="" />

        <p>
          <b>4. FULL JOIN</b>
        </p>
        <p>
          FULL JOIN (or explicitly FULL OUTER JOIN) returns all rows from both
          tables – if there's no matching row in the second table, NULLs are
          returned.
        </p>
        <img
          src="https://www.w3schools.com/sql/img_full_outer_join.png"
          alt=""
        />

        <p>
          <b>5. SELF JOIN</b>
        </p>
        <p>
          A self join is a regular join, but the table is joined with itself.
        </p>
        <img
          width="250px"
          height="150px"
          src="https://www.devart.com/dbforge/sql/sqlcomplete/images/self-join-schema-small.png"
          alt=""
        />

        <p>
          <b>6. NATURAL JOIN</b>
        </p>
        <p>
          NATURAL JOIN will join tables by all columns with the same name. There
          is no condition here.
        </p>
        <img
          width="480px"
          height="260px"
          src="https://scaler.com/topics/images/natural-left-join-in-sql.webp"
          alt=""
        />
      </div>

      {/* Q.7  */}
      <div>
        <h3 style={h3tag}>Q.7 What is a Cross-Join?</h3>
        <p>
          CROSS JOIN returns all possible combinations of rows from both tables.
          There are two syntaxes available.
        </p>
        <pre> SELECT city.name, country.name FROM city CROSS JOIN country;</pre>
        <pre> SELECT city.name, country.name FROM city, country;</pre>
      </div>

      {/* Q,8  */}
      <div>
        <h3 style={h3tag}>Q.8 Difference Between truncate & delete & drop?</h3>
        <p>
          <b>DROP - </b>The DROP statement is used to delete an existing SQL
          database or a table. 'DROP DATABASE' & 'DROP TABLE' to delete database
          and table respectively.
        </p>
        <p>
          <b>TRUNCATE - </b>The TRUNCATE command is used to delete all the rows
          from the table and free the space containing the table. It can be
          rolled back if required. It maintains a log to lock the row of the
          table before deleting it and hence it’s slow.
        </p>
        <p>
          <b>DELETE - </b>The DELETE command deletes only the rows from the
          table based on the condition given in the where clause or deletes all
          the rows from the table if no condition is specified. But it does not
          free the space containing the table.
        </p>
      </div>

      {/* Q.9  */}
      <div>
        <h3 style={h3tag}>
          Q.9 What is an Index? Explain its different types.
        </h3>
        <p>
          Indexes are used to retrieve data from the database more quickly than
          otherwise. The users cannot see the indexes, they are just used to
          speed up searches/queries. The CREATE INDEX statement is used to
          create indexes in tables.
        </p>
        <p>
          There are different types of indexes that can be created for different
          purposes:
        </p>
        <p>
          <b># Unique and Non-Unique Index:</b>
        </p>
        <p>
          Unique indexes are indexes that help maintain data integrity by
          ensuring that no two rows of data in a table have identical key
          values. Once a unique index has been defined for a table, uniqueness
          is enforced whenever keys are added or changed within the index.
        </p>
        <p>
          Non-unique indexes, on the other hand, are not used to enforce
          constraints on the tables with which they are associated. Instead,
          non-unique indexes are used solely to improve query performance by
          maintaining a sorted order of data values that are used frequently.
        </p>

        <p>
          <b># Clustered and Non-Clustered Index:</b>
        </p>
        <p>
          Clustered indexes are indexes whose order of the rows in the database
          corresponds to the order of the rows in the index. This is why only
          one clustered index can exist in a given table, whereas, multiple
          non-clustered indexes can exist in the table.
        </p>
        <p>
          The only difference between clustered and non-clustered indexes is
          that the database manager attempts to keep the data in the database in
          the same order as the corresponding keys appear in the clustered
          index.
        </p>
      </div>

      {/* Q.10  */}
      <div>
        <h3 style={h3tag}>
          Q.10 What is the difference between Clustered and Non-clustered index?
        </h3>
        <li>
          Clustered index modifies the way records are stored in a database
          based on the indexed column. A non-clustered index creates a separate
          entity within the table which references the original table.
        </li>
        <li>
          Clustered index is used for easy and speedy retrieval of data from the
          database, whereas, fetching records from the non-clustered index is
          relatively slower.
        </li>
        <li>
          In SQL, a table can have a single clustered index whereas it can have
          multiple non-clustered indexes.
        </li>
      </div>

      {/* Q.11  */}
      <div>
        <h3 style={h3tag}>Q.11 What are Aggregate and Scalar functions?</h3>
        <p>
          An aggregate function performs operations on a collection of values to
          return a single scalar value. Aggregate functions are often used with
          the GROUP BY and HAVING clauses of the SELECT statement. Following are
          the widely used SQL aggregate functions:
        </p>
        <li>
          <b>AVG() - </b> Calculates the mean of a collection of values.
        </li>
        <li>
          <b>COUNT() - </b> Counts the total number of records in a specific
          table or view.
        </li>
        <li>
          <b>MIN() - </b> Calculates the minimum of a collection of values.
        </li>
        <li>
          <b>MAX() - </b> Calculates the maximum of a collection of values.
        </li>
        <li>
          <b>SUM() - </b> Calculates the sum of a collection of values.
        </li>
        <li>
          <b>FIRST() - </b> Fetches the first element in a collection of values.
        </li>
        <li>
          <b>LAST() - </b> Fetches the last element in a collection of values.
        </li>
        <p>
          All aggregate functions described above ignore NULL values except for
          the COUNT function.
        </p>

        <p>
          A scalar function returns a single value based on the input value.
          Following are the widely used SQL scalar functions:
        </p>
        <li>
          <b>LEN() - </b> Calculates the total length of the given field
          (column).
        </li>
        <li>
          <b>UCASE() - </b>Converts a collection of string values to uppercase
          characters.
        </li>
        <li>
          <b>LCASE() - </b>Converts a collection of string values to lowercase
          characters.
        </li>
        <li>
          <b>MID() - </b> Extracts substrings from a collection of string values
          in a table.
        </li>
        <li>
          <b>CONCAT() - </b>Concatenates two or more strings.
        </li>
        <li>
          <b>RAND() - </b> Generates a random collection of numbers of a given
          length.
        </li>
        <li>
          <b>ROUND() - </b> Calculates the round-off integer value for a numeric
          field (or decimal point values).
        </li>
        <li>
          <b>NOW() - </b>Returns the current date & time.
        </li>
        <li>
          <b>FORMAT() - </b>Sets the format to display a collection of values.
        </li>
      </div>

      {/* Q.12  */}
      <div>
        <h3 style={h3tag}>Q.12 What is a Subquery?</h3>
        <p>
          A subquery is a query within another query, also known as a nested
          query or inner query. It is used to restrict or enhance the data to be
          queried by the main query, thus restricting or enhancing the output of
          the main query respectively.
        </p>
      </div>

      {/* Q.13  */}
      <div>
        <h3 style={h3tag}>Q.13 Explain Group BY clause?</h3>
        <p>
          GROUP BY groups together rows that have the same values in specified
          columns. It computes summaries (aggregates) for each unique
          combination of values. We use having clause with group by clause to
          give the condition.
        </p>
        <p>
          The GROUP BY statement is often used with aggregate functions
          (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one
          or more columns. The HAVING clause was added to SQL because the WHERE
          keyword cannot be used with aggregate functions.
        </p>
      </div>

      {/* Q.14  */}
      <div>
        <h3 style={h3tag}>Q.14 Explain UNION clause?</h3>
        <p>
          The UNION operator is used to combine the result-set of two or more
          SELECT statements or queries.
          <li>
            Every SELECT statement within UNION must have the same number of
            columns
          </li>
          <li>The columns must also have similar data types</li>
          <li>
            The columns in every SELECT statement must also be in the same order
          </li>
          <p>
            <b>NOTE: </b>The UNION operator selects only distinct values by
            default. To allow duplicate values, use UNION ALL. Also The column
            names in the result-set are usually equal to the column names in the
            first SELECT statement.
          </p>
        </p>
      </div>
    </div>
  );
}

export default Sql;
