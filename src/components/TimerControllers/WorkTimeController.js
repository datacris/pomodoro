import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function WorkTimeController({workingTime, addWorkingTime, removeWorkingTime}) {
    return (
        <div>
            <button onClick={addWorkingTime}> <AddIcon /> </button>
            <span> Work time {workingTime}</span>
            <button onClick={removeWorkingTime}> <RemoveIcon /> </button>
        </div>
    )
}

export default WorkTimeController
