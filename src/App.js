import React, { useState, useContext } from 'react'
import TimerControllers from './components/TimerControllers'
import './index.css'
import { SettingsContext } from './context/SettingsContext'
import PomodoroCountdown from './components/PomodoroCountdown'

function AppPomodoro(props) {

    const {
        workingTime,
        breakTime,
        sound,
        pomodoroCycle,
        toogleSound,
        addWorkingTime,
        removeWorkingTime,
        addBreakTime,
        removeBreakTime,
        changePomodoroCycle,
        activeWorkingTime,
        activeBreakTime,
        pomodoroCurrentTime,
        timerRunning, 
        toogleTimer
    } = useContext(SettingsContext)

    return (
        <div className="container">
            <h1>Pomodoro</h1>
            <small>Pomodoro Timer.</small>
         
            <PomodoroCountdown
                time={pomodoroCurrentTime} running={timerRunning} toogleTimer={toogleTimer}
                pomodoroCycle={pomodoroCycle} activeBreakTime={activeBreakTime} activeWorkingTime={activeWorkingTime}
            />
            <TimerControllers
                activeBreakTime={activeBreakTime} activeWorkingTime={activeWorkingTime} toogleTimer={toogleTimer} timerRunning={timerRunning} key={pomodoroCurrentTime}
                pomodoroCycle={pomodoroCycle} changePomodoroCycle={changePomodoroCycle}
                workingTime={workingTime} addWorkingTime={addWorkingTime} removeWorkingTime={removeWorkingTime}
                breakTime={breakTime} addBreakTime={addBreakTime} removeBreakTime={removeBreakTime}
            />

        </div>
    )
}

export default AppPomodoro
