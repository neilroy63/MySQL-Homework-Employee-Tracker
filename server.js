const mysql = require("mysql");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

const departments = " ";
var roles = [];
const employees = " ";

const connection = mysql.createConnection({
  host: "localhost",

  //  port
  port: 3306,

  //  username
  user: "root",

  //  MySQL password
  password: "root",
  database: "emloyee_db",
});

// Starting mySQL connection
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected Database");
  //   Database queries
  // connection.query("select * from role", function (err, res) {
  //   roles = res.map((role) => ({ name: role.title, value: role.id }));
  // });
  // console.log("res", res);
  askQuestions();
});

const viewAllRoles = () => {
  const query = "SELECT * FROM role";
  connection.query(query, (err, res) => {
    // // res.forEach(({ role }) =>
    //   console.log(role.id, role.title, role.salary, role.department_id)
    // );
    console.table(res);
  });
};

const viewDepartments = () => {
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    // // res.forEach(({ role }) =>
    //   console.log(role.id, role.title, role.salary, role.department_id)
    // );
    console.table(res);
  });
};

// function to use inquirer to ask questions to get data that gets passed to functions that perform database queries
const askQuestions = () => {
  inquirer
    .prompt(
      // object containing questions
      {
        type: "list",
        message: "What would you like to do?",
        name: "choices",
        choices: [
          {
            name: "View all roles",
            value: "View roles",
          },
          {
            name: "View all departments",
            value: "View departments",
          },
        ],
      }
    )
    .then(function (res) {
      choiceList(res.choices);
    });
};

function choiceList(choice) {
  switch (choice) {
    case "View roles":
      viewAllRoles();
      break;
    case "View departments":
      viewDepartments();
  }
}