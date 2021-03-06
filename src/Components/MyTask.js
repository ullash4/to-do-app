import React from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";
import TaskRow from "./TaskRow";

const MyTask = () => {
  const {
    isLoading,
    data: tasks,
    refetch,
  } = useQuery("toDoTasks", () =>
    fetch("https://peaceful-ravine-79364.herokuapp.com/task").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-20 my-10">
      <h1 className="text-2xl font-bold text-center my-5">
        All task load Here{tasks.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <TaskRow
                refetch={refetch}
                index={index}
                key={task._id}
                task={task}
              ></TaskRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTask;
