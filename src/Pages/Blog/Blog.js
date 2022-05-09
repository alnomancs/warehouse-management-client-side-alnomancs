import React from "react";
import { Accordion, Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container mt-5 mx-auto">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Q1. Difference between Javascript and nodejs?
          </Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Javascript</th>
                  <th>Nodejs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Javascript is a programming language</td>
                  <td>Nodejs is a Javascript Runtime environment</td>
                </tr>
                <tr>
                  <td>Javascript can only be run in the browsers.</td>
                  <td>
                    We can run Javascript outside the browser with the help of
                    NodeJS.
                  </td>
                </tr>
                <tr>
                  <td>It is basically used on the client-side.</td>
                  <td>It is mostly used on the server-side.</td>
                </tr>
                <tr>
                  <td>Javascript is used in frontend development.</td>
                  <td>Nodejs is used in server-side development.</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                  </td>
                  <td>
                    Some of the Nodejs modules are Lodash, express etc. These
                    modules are to be imported from npm.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Q2. Why should you use nodejs and when should you use mongodb
          </Accordion.Header>
          <Accordion.Body>
            <p>
              1. Node.js is easily employed as a server-side proxy where it can
              handle a large amount of simultaneous connections in a
              non-blocking manner. It’s especially useful for proxying different
              services with different response times, or collecting data from
              multiple source points. and it also easy to learn, large
              community, scalability, greate ecosystem
            </p>
            <p>
              2. MongoDB has become one of the most wanted databases in the
              world because it makes it easy for developers to store, manage,
              and retrieve data when creating applications with most programming
              languages. It is a natural form to store data. It is
              human-readable. Structured and unstructured information can be
              stored in the same document. You can nest JSON to store complex
              data objects.JSON has a flexible and dynamic schema, so adding
              fields or leaving a field out is not a problem.Documents map to
              objects in most popular programming languages.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q3. Difference between sql and nosql
          </Accordion.Header>
          <Accordion.Body>
            <p>
              1. SQL databases are relational, NoSQL databases are
              non-relational.
            </p>
            <p>
              2. SQL databases use structured query language and have a
              predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.
            </p>
            <p>
              3. SQL databases are vertically scalable, while NoSQL databases
              are horizontally scalable.
            </p>
            <p>
              4. SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores.
            </p>
            <p>
              5. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Q4. What is JWT and how does it work
          </Accordion.Header>
          <Accordion.Body>
            <p>
              1. JSON Web Token is a proposed Internet standard for creating
              data with optional signature and/or optional encryption whose
              payload holds JSON that asserts some number of claims. The tokens
              are signed either using a private secret or a public/private key.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
