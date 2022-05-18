import React from 'react';

const TaskRow = ({index, task}) => {
    const {name, description} = task
    return (
        <tr>
        <th>{index+1}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    );
};

export default TaskRow;