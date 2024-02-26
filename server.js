const inquirer = require('inquirer');
const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
  start();
});

// Function to start the application
function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewDepartments();
          break;

        case 'View all roles':
          viewRoles();
          break;

        case 'View all employees':
          viewEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;
      }
    });
}

// Function to view all departments
function viewDepartments() {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// Function to view all roles
function viewRoles() {
  connection.query('SELECT * FROM roles', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// Function to view all employees
function viewEmployees() {
  connection.query('SELECT * FROM employees', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

// Function to add a department
function addDepartment() {
  inquirer
    .prompt({
      name: 'name',
      type: 'input',
      message: 'Enter the name of the department:'
    })
    .then((answer) => {
      connection.query(
        'INSERT INTO departments SET ?',
        {
          name: answer.name
        },
        (err) => {
          if (err) throw err;
          console.log('Department added successfully!');
          start();
        }
      );
    });
}

// Function to add a role
function addRole() {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for the role:'
      },
      {
        name: 'department_id',
        type: 'input',
        message: 'Enter the department id for the role:'
      }
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO roles SET ?',
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id
        },
        (err) => {
          if (err) throw err;
          console.log('Role added successfully!');
          start();
        }
      );
    });
}

// Function to add an employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: 'first_name',
        type: 'input',
        message: 'Enter the first name of the employee:'
      },
      {
        name: 'last_name',
        type: 'input',
        message: 'Enter the last name of the employee:'
      },
      {
        name: 'role_id',
        type: 'input',
        message: 'Enter the role id for the employee:'
      },
      {
        name: 'manager_id',
        type: 'input',
        message: 'Enter the manager id for the employee:'
      }
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO employees SET ?',
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
          manager_id: answer.manager_id
        },
        (err) => {
          if (err) throw err;
          console.log('Employee added successfully!');
          start();
        }
      );
    });
}

// Function to update an employee role
function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: 'employee_id',
        type: 'input',
        message: 'Enter the id

        import mysql.connector

# Establish connection to MySQL database
mydb = mysql.connector.connect(
  host="localhost",
  user="yourusername",
  password="yourpassword",
  database="yourdatabase"
)

# Function to add a department
def add_department():
    department_name = input("Enter the name of the department: ")
    cursor = mydb.cursor()
    cursor.execute("INSERT INTO departments (department_name) VALUES (%s)", (department_name,))
    mydb.commit()
    print("Department added successfully!")

# Function to add a role
def add_role():
    title = input("Enter the name of the role: ")
    salary = float(input("Enter the salary for the role: "))
    department_id = int(input("Enter the department ID for the role: "))
    cursor = mydb.cursor()
    cursor.execute("INSERT INTO roles (title, salary, department_id) VALUES (%s, %s, %s)", (title, salary, department_id))
    mydb.commit()
    print("Role added successfully!")

# Function to add an employee
def add_employee():
    first_name = input("Enter the employee's first name: ")
    last_name = input("Enter the employee's last name: ")
    role_id = int(input("Enter the role ID for the employee: "))
    manager_id = int(input("Enter the manager ID for the employee: "))
    cursor = mydb.cursor()
    cursor.execute("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (%s, %s, %s, %s)", (first_name, last_name, role_id, manager_id))
    mydb.commit()
    print("Employee added successfully!")

# Function to update an employee role
def update_employee_role():
    employee_id = int(input("Enter the employee ID to update: "))
    new_role_id = int(input("Enter the new role ID for the employee: "))
    cursor = mydb.cursor()
    cursor.execute("UPDATE employees SET role_id = %s WHERE employee_id = %s", (new_role_id, employee_id))
    mydb.commit()
    print("Employee role updated successfully!")

# Main function
def main():
    while True:
        print("\nChoose an option:")
        print("1. Add a department")
        print("2. Add a role")
        print("3. Add an employee")
        print("4. Update an employee role")
        print("5. Exit")
        choice = input("Enter your choice: ")
        if choice == "1":
            add_department()
        elif choice == "2":
            add_role()
        elif choice == "3":
            add_employee()
        elif choice == "4":
            update_employee_role()
        elif choice == "5":
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

