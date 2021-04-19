import React, { useContext } from 'react'
import BreakTimeController from './TimerControllers/BreakTimeController'
import WorkTimeController from './TimerControllers/WorkTimeController'

function TimerControllers(props) {

    return (
        <div>
            <WorkTimeController workingTime={props.workingTime} addWorkingTime={props.addWorkingTime} removeWorkingTime={props.removeWorkingTime} />
            <BreakTimeController breakTime={props.breakTime} addBreakTime={props.addBreakTime} removeBreakTime={props.removeBreakTime} />
        </div>
    )
}

export default TimerControllers
