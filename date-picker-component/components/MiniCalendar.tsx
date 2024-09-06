"use client";

// components/MiniCalendar.tsx
import { useDatePicker } from './DatePickerContext';
import { format, addDays, parseISO } from 'date-fns';

const MiniCalendar = () => {
    const { recurrence, customization, dateRange } = useDatePicker();

    const MAX_DATES = 365; // Limit the number of dates to prevent infinite loops

    const getRecurringDates = () => {
        if (!dateRange.start) return [];

        const dates: Date[] = [];
        let current = parseISO(dateRange.start);
        let count = 0;

        // Ensure interval is a positive number
        const interval = customization.interval > 0 ? customization.interval : 1;

        while ((!dateRange.end || current <= parseISO(dateRange.end)) && count < MAX_DATES) {
            dates.push(current);
            current = addDays(current, interval); // Add the specified interval
            count++; // Avoid infinite loop by limiting the number of iterations
        }

        return dates;
    };

    const dates = getRecurringDates();

    return (
        <div className="grid grid-cols-7 gap-2 mt-4">
            {dates.map((date, index) => (
                <div key={index} className="text-center p-2 bg-gray-100 rounded">
                    {format(date, 'MMM d')}
                </div>
            ))}
        </div>
    );
};

export default MiniCalendar;
