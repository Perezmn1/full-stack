import './App.css';
import React, {useState} from 'react';

function App() {
  const [returnData, setReturnedData] = useState(['Welcome to my Project']);
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''})

const setInput = (e) => {
  const {name, value} = e.target;
  console.log(value);
  if(name === 'EmployeeID' || name === 'Age'){
    setEmployee(prevState => ({
      ...prevState,
      [name]: parseInt(value)
    }));
    return;
  }
  setEmployee(prevState => ({
    ...prevState,
    [name]: value 
  }));
}

  const fetchData = async () => {
   const newData = await fetch('./api', {
     method: 'POST',
     headers: {
       'content-type':'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       name: employee.Firstname
     })
   })
   .then(res => res.json())
   console.log(newData);
   setReturnedData(newData[0])
  }
  
  const createEmployee = async () => {
   const newData = await fetch('./quit', {
     method: 'POST',
     headers: {
       'content-type':'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       ...employee
     })
   })
   .then(res => res.json())
   setReturnedData(newData[0])
  }

  return (
  <div className="App">
    <input 
      type="number" 
      name="EmployeeID" 
      placeholder="EmployeeID" 
      onChange={setInput}></input>
    <input 
      name="Firstname" 
      placeholder="FirstName" 
      onChange={setInput}></input>
    <input 
      name="Lastname" 
      placeholder="LastName" 
      onChange={setInput}></input>
    <input 
      type="number" 
      name="Age" 
      placeholder="Age" 
      onChange={setInput}></input>
    <input 
    name="Gender" 
    placeholder="Gender" 
    onChange={setInput}></input>
    <button onClick={() => fetchData()}>Click</button>
    <button onClick={() => createEmployee()}>Create</button>
    <p>EmployeeID :{returnData.EmployeeID}</p>
    <p>Firstname :{returnData.Firstname}</p>
    <p>Lastname :{returnData.Lastname}</p>
    <p>Age :{returnData.Age}</p>
    <p>Gender :{returnData.Gender}</p>
    {/* {returnData} */}
  </div>
  );
}

export default App;