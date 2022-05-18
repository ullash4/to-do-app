import React from "react";
import { toast } from "react-toastify";

const TaskRow = ({ index, task, refetch }) => {
  const { name, description,role, _id } = task;
  
  
  
  const handleDelete = (_id) => {
    const sure = window.confirm("Are you sure?");

    if (sure) {
      fetch(`http://localhost:5000/task/${_id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            refetch()
            toast.success(`Task ${name} is now deleted`);
          }
        });
    }
  };

  const handleComplete=(_id)=>{
    fetch(`http://localhost:5000/task/complete/${_id}`,{
        method: 'PUT'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
  }
  
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <p className={`${role === 'complete' && 'line-through'}`}>{description}</p>
      </td>
      <td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-xs mx-1 btn-error">Delete</button>
        <button onClick={()=>handleComplete(_id)} className="btn btn-xs mx-1 btn-success">Complete</button>
      </td>
    </tr>
  );
};

export default TaskRow;
