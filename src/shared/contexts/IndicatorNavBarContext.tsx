import { createContext, useContext, useState } from 'react';

import { ProviderPropsChildren } from "../interfaces";

interface IValueIndicator {
    indicatorCurrent: number;
    setIndicatorCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const IndicatorContext = createContext({} as IValueIndicator)

export const UseIndicatorNavBar = () => {
    return useContext(IndicatorContext)
}

export const IndicatorNavBarContext: React.FC<ProviderPropsChildren> = ({ children }) => {
    const [indicatorCurrent, setIndicatorCurrent] = useState<number>(0)

    return (
        <IndicatorContext.Provider value={{ indicatorCurrent, setIndicatorCurrent }}>
            {children}
        </IndicatorContext.Provider>
    )
}