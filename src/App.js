import React from "react";
import "./style.css";

export default function App() {

  const testFetch = async() => {
    const response =  await fetch("http://localhost:8000/api/todolist/get/all")
    const fetchedTodolist = await response.json();
    console.log(fetchedTodolist);
  }
  testFetch()
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
