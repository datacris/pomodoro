import React from 'react'
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useEffect } from 'react';
import { useState } from 'react';

function PomodoroCountdown(props) {

    const [seconds, setSeconds] = useState(props.time)

    useEffect(() => {
        if (props.running) {
            const id = window.setInterval(() => {
                setSeconds(seconds => seconds - 1)
            }, 1000);
            return () => window.clearInterval(id)
        }

    }, [props.running]);

    const resetPomodoro = () => {
        setSeconds(props.time)
        if (props.running)
            props.toogleTimer()
    }

    const activeWorkingTimer = () => {
        props.activeWorkingTime()
        if (props.running)
            props.toogleTimer()
        setSeconds(props.time)
    }

    const activeBreakTimer = () => {
        props.activeBreakTime()
        if (props.running)
            props.toogleTimer()
        setSeconds(props.time)
    }

    const formatPomodoroCountdown = (seconds) => {
        let min = Math.floor(seconds / 60)
        let sec = seconds % 60
        if (min <= 9)
            min = '0' + min;
        if (sec <= 9)
            sec = '0' + sec;

        return `${min}:${sec}`
    }


    return (
        <div>
            <div className="countdown__custom">
                <h1>{seconds >= 1 ? formatPomodoroCountdown(seconds) : 'Times Up!'}</h1>
            </div>

            <div className="countdown__custom">
                <button
                    onClick={props.toogleTimer}
                    className={props.running === true ? 'active-label' : undefined}>
                    {props.running === true ? <PauseIcon /> : <PlayArrowIcon />}
                </button>
                <button onClick={resetPomodoro} >
                    <ReplayIcon />
                </button>
            </div>

            <div>
                <button
                    className={props.pomodoroCycle === 'work' ? 'active-label' : undefined}
                    onClick={activeWorkingTimer}
                >
                    Work Session
                </button>
                <button
                    className={props.pomodoroCycle === 'break' ? 'active-label' : undefined}
                    onClick={activeBreakTimer}
                >
                    Break Time
                </button>
            </div>

        </div>
    )
}

export default PomodoroCountdown
