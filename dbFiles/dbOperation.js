const { computeHeadingLevel } = require('@testing-library/react');
const config               = require('./dbConfig'),
      sql                  = require('mssql');

const getEmployees = async(Firstname) => {
  try {
    console.log(Firstname);
    let pool = await sql.connect(config);
    let employees = await pool.request().query(`Select * From Employeedemographics where Firstname = '${Firstname}'`)
    return employees;
  }
  catch(error){
  }
}

const createEmployee = async(Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request()
    .query(`Insert into Employeedemographics values
    (${Employee.EmployeeID}, '${Employee.Firstname}', '${Employee.Lastname}', '${Employee.Age}', '${Employee.Gender}')
    `)
    return employees;
  }
  catch(error){
  }
}



module.exports = {
  createEmployee,
  getEmployees
}