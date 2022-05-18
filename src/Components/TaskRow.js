import React from "react";
import { toast } from "react-toastify";

const TaskRow = ({ index, task, refetch }) => {
  const { name, description, _id } = task;
  
  
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
  
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>
        <p className="text-ellipsis">{description}</p>
      </td>
      <td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-xs mx-1 btn-error">Delete</button>
        <button className="btn btn-xs mx-1 btn-success">Complete</button>
      </td>
    </tr>
  );
};

export default TaskRow;
