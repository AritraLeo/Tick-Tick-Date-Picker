"use client";
import { createContext, useState, useContext, ReactNode } from 'react';

interface DatePickerContextProps {
    recurrence: string;
    setRecurrence: (recurrence: string) => void;
    customization: Customization;
    setCustomization: (customization: Customization) => void;
    dateRange: { start: string | null; end: string | null };
    setDateRange: (range: { start: string | null; end: string | null }) => void;
}

interface Customization {
    interval: number;
    days: string[]; // for weekly recurrence
    nthDayOfMonth?: number; // for nth day of the month recurrence
}

interface DateRange {
    start: string | null;
    end: string | null;
}

const DatePickerContext = createContext<DatePickerContextProps | undefined>(undefined);

export const DatePickerProvider = ({ children }: { children: ReactNode }) => {
    const [recurrence, setRecurrence] = useState<string>('daily');
    const [customization, setCustomization] = useState<Customization>({
        interval: 1,
        days: [],
        nthDayOfMonth: undefined // Initialize with undefined
    });
    const [dateRange, setDateRange] = useState<DateRange>({ start: null, end: null });

    return (
        <DatePickerContext.Provider
            value={{
                recurrence,
                setRecurrence,
                customization,
                setCustomization,
                dateRange,
                setDateRange,
            }}
        >
            {children}
        </DatePickerContext.Provider>
    );
};

export const useDatePicker = () => {
    const context = useContext(DatePickerContext);
    if (!context) {
        throw new Error('useDatePicker must be used within a DatePickerProvider');
    }
    return context;
};
