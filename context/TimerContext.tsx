import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";

type TimerContextType = {
    timer: string;
    setTimer: React.Dispatch<React.SetStateAction<string>>;
    isTimerStarted: boolean;
    setIsTimerStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimerContext = createContext<TimerContextType>(null!);

export function TimerProvider({ children }: { children: ReactNode }) {
    const [timer, setTimer] = useState("");
    const [isTimerStarted, setIsTimerStarted] = useState(false);

    useEffect(() => {
        setTimer("");
    }, [isTimerStarted]);

    return (
        <TimerContext.Provider value={{
            timer,
            setTimer,
            isTimerStarted,
            setIsTimerStarted            
        }}>
            {children}
        </TimerContext.Provider>
    );
}

export const useTimer = () => useContext(TimerContext);