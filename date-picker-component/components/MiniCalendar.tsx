"use client"

// components/MiniCalendar.tsx
import { useDatePicker } from './DatePickerContext';
import { format, addDays, parseISO } from 'date-fns';

const MiniCalendar = () => {
    const { recurrence, customization, dateRange } = useDatePicker();

    const getRecurringDates = () => {
        if (!dateRange.start) return [];

        const dates: Date[] = [];
        let current = parseISO(dateRange.start);

        while (!dateRange.end || current <= parseISO(dateRange.end)) {
            dates.push(current);
            current = addDays(current, customization.interval);
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
