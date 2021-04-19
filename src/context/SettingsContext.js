import { useState, createContext } from "react";

export const SettingsContext = createContext()

function SettingsContextProvider(props) {

    // const [pomodoro, setPomodoro] = useState(0)
    const defaultTime = 20

    const [pomodoroCurrentTime, setPomodoroCurrentTime] = useState(defaultTime)
    const [timerRunning, setTimerRunning] = useState(false)
    const [workingTime, setWorkingTime] = useState(defaultTime)
    const [breakTime, setBreakTime] = useState(5)
    const [sound, setSound] = useState('on')
    const [pomodoroCycle, setPomodoroCycle] = useState('work')
    const [timer, setTimer] = useState(0) 
    
   

    function toogleSound() {
        sound === 'on' ?
            setSound('off') :
            setSound('on')
    }
    function toogleTimer() {
        timerRunning === false ?
        setTimerRunning(true) :
        setTimerRunning(false)
      
    }
    

    function addWorkingTime() {
        setWorkingTime(workingTime + 1)
    }
    function removeWorkingTime() {
        if (workingTime > 0)
            setWorkingTime(workingTime - 1)
    }
    function addBreakTime() {
        setBreakTime(breakTime + 1)
    }
    function removeBreakTime() {
        if (workingTime > 0)
            setBreakTime(breakTime - 1)
    }

    function changePomodoroCycle(cycle) {
        console.log(cycle)
        setPomodoroCycle(cycle)
    }
    function activeWorkingTime () {
        if(pomodoroCycle !== 'work'){
            setPomodoroCycle('work')
            setPomodoroCurrentTime(workingTime)
        }
    }
    function activeBreakTime() {
        if(pomodoroCycle !== 'break'){
            setPomodoroCycle('break')
            setPomodoroCurrentTime(breakTime)
        }
    }


    return (
        <SettingsContext.Provider value={{
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
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}

export default SettingsContextProvider