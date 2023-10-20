import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import {useState} from "react";

function App() {
    const [data,setData]= useState([
        {id:1,firstName:"John",secondName:"Kennedy",age:32},
        {id:2,firstName:"Krystian",secondName:"Obama",age:17},
        {id:3,firstName:"Donald",secondName:"Taks",age:15},
        {id:4,firstName:"Mariusz",secondName:"Pudzianowski",age:47},
        {id:5,firstName:"Elon",secondName:"Biden",age:12}
    ]);
  return (
      <div>
          <h1>My First Project</h1>
          <h2>Named</h2>
        <Table data={data}/>
          <hr/>
          <form onSubmit={(event)=>{
              event.preventDefault();
              setData([...data,{
                  id:data.length+1,
                  firstName:event.target.firstName.value,
                  secondName:event.target.secondName.value,
                  age:Number(event.target.age.value),
              }])
              event.target.reset();
          }}>
              <input name={"firstName"} placeholder={"Imie"}/><br/>
                  <input name={"secondName"} placeholder={"Nazwisko"}/><br/>
                   <input name={"age"} placeholder={"Wiek"} type={"number"}/><br/>
                   <button type={"submit"}>Dodaj</button>
          </form>
      </div>
  );
}

export default App;
