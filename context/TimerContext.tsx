import { Children, createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface TimeContextType {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimeContextType>({
    duration: 10,
    setDuration: () => {},
});

interface TimerProviderProps {
    children: ReactNode;
}

const TimeProvider = ({ children }: TimerProviderProps) => {
    const [duration, setDuration] = useState(10);

    return (
        <TimerContext.Provider value ={{ duration, setDuration }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimeProvider;