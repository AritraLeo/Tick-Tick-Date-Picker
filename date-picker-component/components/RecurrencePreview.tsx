"use client";

// components/RecurrencePreview.tsx
import { useDatePicker } from './DatePickerContext';
import { useEffect, useState } from 'react';
import { addDays, addWeeks, addMonths, addYears, format, isBefore, getDay, addDays as addDaysFn, eachMonthOfInterval, isSameMonth, lastDayOfMonth } from 'date-fns';

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
    customization: { interval: number; days: string[]; nthDayOfMonth?: number },
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
            if (customization.nthDayOfMonth !== undefined) {
                const nthDay = customization.nthDayOfMonth;
                const targetDayOfWeek = customization.days[0]; // Assume customization.days contains one day for nth-day option

                eachMonthOfInterval({ start: startDate, end: endDate || lastDayOfMonth(currentDate) }).forEach(
                    (month) => {
                        const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
                        let weekDayCount = 0;
                        let nthDayDate: Date | null = null;

                        for (let day = firstDayOfMonth; isSameMonth(day, firstDayOfMonth); day = addDaysFn(day, 1)) {
                            if (getDay(day) === parseInt(targetDayOfWeek)) {
                                weekDayCount += 1;
                                if (weekDayCount === nthDay) {
                                    nthDayDate = day;
                                    break;
                                }
                            }
                        }
                        if (nthDayDate) {
                            dates.push(format(nthDayDate, 'EEE MMM dd yyyy'));
                        }
                    }
                );
            } else {
                while (endDate && isBefore(currentDate, endDate)) {
                    currentDate = addMonths(currentDate, interval);
                    dates.push(format(currentDate, 'EEE MMM dd yyyy'));
                }
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
