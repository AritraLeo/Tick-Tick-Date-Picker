"use client";

// components/RecurrencePreview.tsx
import { useDatePicker } from './DatePickerContext';
import { useEffect, useState } from 'react';
import { addDays, addWeeks, addMonths, addYears, format, isBefore } from 'date-fns';

const RecurrencePreview = () => {
    const { recurrence, customization, dateRange } = useDatePicker();
    const [previewDates, setPreviewDates] = useState<string[]>([]);

    useEffect(() => {
        if (dateRange.start && recurrence) {
            const newDates = calculateRecurrence(recurrence, customization, dateRange);
            setPreviewDates(newDates);
        }
    }, [recurrence, customization, dateRange]);

    return (
        <div>
            <h2>Recurrence Preview</h2>
            <ul>
                {previewDates.map((date) => (
                    <li key={date}>{date}</li>
                ))}
            </ul>
        </div>
    );
};

// Utility function to calculate the recurring dates
const calculateRecurrence = (
    recurrence: string,
    customization: { interval: number; days: string[] },
    dateRange: { start: string | null; end: string | null }
) => {
    if (!dateRange.start) return [];

    const startDate = new Date(dateRange.start);
    const endDate = dateRange.end ? new Date(dateRange.end) : null;
    const dates: string[] = [];

    let currentDate = new Date(startDate);
    const interval = customization.interval > 0 ? customization.interval : 1; // Default to 1 if no interval is provided

    // Add the initial start date
    dates.push(format(currentDate, 'EEE MMM dd yyyy'));

    // Recurrence logic
    switch (recurrence) {
        case 'daily':
            while (endDate && isBefore(currentDate, endDate)) {
                currentDate = addDays(currentDate, interval);
                dates.push(format(currentDate, 'EEE MMM dd yyyy'));
            }
            break;

        case 'weekly':
            while (endDate && isBefore(currentDate, endDate)) {
                currentDate = addWeeks(currentDate, interval);
                dates.push(format(currentDate, 'EEE MMM dd yyyy'));
            }
            break;

        case 'monthly':
            while (endDate && isBefore(currentDate, endDate)) {
                currentDate = addMonths(currentDate, interval);
                dates.push(format(currentDate, 'EEE MMM dd yyyy'));
            }
            break;

        case 'yearly':
            while (endDate && isBefore(currentDate, endDate)) {
                currentDate = addYears(currentDate, interval);
                dates.push(format(currentDate, 'EEE MMM dd yyyy'));
            }
            break;

        default:
            break;
    }

    return dates;
};

export default RecurrencePreview;
