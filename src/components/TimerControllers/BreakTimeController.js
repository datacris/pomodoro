import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function BreakTimeController({ breakTime, addBreakTime, removeBreakTime }) {
    return (
        <div>
            <button onClick={addBreakTime}> <AddIcon /> </button>
            <span> Break time {breakTime}</span>
            <button onClick={removeBreakTime}> <RemoveIcon /> </button>
        </div>
    )
}

export default BreakTimeController
