import React,{useState, useEffect } from 'react'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {Button,Icon,message} from "antd";




const  Profile = () => {

  const initialTodo = () => {
    if(localStorage.getItem('items') === undefined || localStorage.getItem('items') === null ){
      return [];
    }else{
      
      return  JSON.parse(localStorage.getItem('items'));
    }
  }

  const [todos, setTodos] = useState(initialTodo);
  const [loading,setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  try {
    localStorage.setItem('items', JSON.stringify(todos))
    setLoading(false);
  } catch (error) {
    message.warning(error);
    setLoading(false);
  }
  
},[todos]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted : false}];
    localStorage.setItem('items', JSON.stringify(newTodos));
    const data = JSON.parse(localStorage.getItem('items'));
    //console.log(data);
    setLoading(true);
    setTodos(data);
    setLoading(false);
  };

  const onLogout = () => {
    document.location.assign("/");
  }

  
  return (
    <div className="app" style={{padding:'20px',maxWidth:"500px",margin:"0px auto",marginTop:"50px"}}>
    <div style={{marginBottom:"30px",textAlign:"right",maxWidth:"500px"}}><Button onClick={onLogout} style={{}} type="danger"><Icon type="logout" />Log Out</Button></div>
      <div>
      <h2>Create Your Task List</h2>
      
      </div>
    
    <div style={{maxWidth:"500px"}}>
       <TodoForm addTodo={addTodo} />
    </div>
      <div style={{maxWidth:"500px",marginTop:"30px"}}>
        
          <TodoList
            todo={todos}
            setTodos={setTodos}
            loading={loading}
          />

      </div>
    </div>
  );
}


export default Profile;