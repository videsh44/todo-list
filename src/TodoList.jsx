import React,{useState } from 'react'
import {List,Icon,Popconfirm} from 'antd';
import DetailsModal from "./DetailsModal";


const TodoList = (props) => {
 // const [data,setData] = useState([]);
const todos = props.todo;

const [showModal,setShowModal] = useState(false);
const [selectedDetails,setSelectedDetails] = useState([]);

 const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  props.setTodos(newTodos);
};

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
 props.setTodos(newTodos);
};

const openModal = (data) => {
  setSelectedDetails(data);
  setShowModal(true);
}

const closeModal = () =>{
  setShowModal(false);
}


    return (
      <div>
     
  <List
    loading={props.loading}
    itemLayout="horizontal"
    pagination={{
      pageSize: 10
    }}
    dataSource={props.todo}
    renderItem={(item,i) => (
      <List.Item
         style={{background:item.isCompleted === false ? "#FF6347" : "lightgreen",marginBottom:"10px",borderRadius:"5px",padding:"15px"}}
         actions={[<a 
                 style={{color:item.isCompleted === false ? "white" : "green"}} 
                 onClick={() => completeTodo(i)} > {item.isCompleted === false ? "Complete" : <Icon type="check" />}
                 </a>, 
                <span>
                  <Popconfirm
                     title="Are you sure delete this task?"
                     onConfirm={() => removeTodo(i)}
                     okText="Yes"
                     cancelText="No"
                   >
                    <a style={{color:"white"}}>Remove</a>
               </Popconfirm>
                </span>
                ,
                <a style={{color:"white"}} onClick={() => openModal(item)}>
                  <Icon type="eye" />View
                </a>]}
      >
        <List.Item.Meta
          title={<a style={{color: item.isCompleted === true ? "white" : "black"}} >{item.text}</a>}
        />
      </List.Item>
    )}
  />

   {
     showModal === true ?

     <DetailsModal 
       visible={showModal}
       onCancel={closeModal}
       title={selectedDetails.text}
       status={selectedDetails.isCompleted}
     /> : null
   }
      </div>
    );
  }

export default TodoList;