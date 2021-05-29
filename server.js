const mysql = require("mysql");
const inquirer = require("inquirer");

const departments = " ";
const roles = " ";
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
  //   connection.query("select * from role", function (err, res) {
  //     roles = res.map((role) => ({ name: role.title, value: role.id }));
  //   });
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

viewAllRoles();
