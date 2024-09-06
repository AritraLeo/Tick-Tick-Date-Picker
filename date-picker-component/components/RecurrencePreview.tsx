"use client"
// components/RecurrencePreview.tsx
import { useDatePicker } from './DatePickerContext';
import { useEffect, useState } from 'react';

const RecurrencePreview = () => {
    const { recurrence, dateRange } = useDatePicker();
    const [previewDates, setPreviewDates] = useState<string[]>([]);

    useEffect(() => {
        if (dateRange.start && recurrence) {
            // Here you would calculate the recurrence based on the selected options
            const newDates = calculateRecurrence(recurrence, dateRange);
            setPreviewDates(newDates);
        }
    }, [recurrence, dateRange]);

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
const calculateRecurrence = (recurrence: string, dateRange: { start: string | null; end: string | null }) => {
    const startDate = new Date(dateRange.start!);
    const endDate = dateRange.end ? new Date(dateRange.end) : new Date(startDate);
    const dates: string[] = [];

    // Recurrence logic here - for demonstration, this just adds the start date
    dates.push(startDate.toDateString());

    // Handle different recurrence types (daily, weekly, monthly, yearly)
    if (recurrence === 'weekly') {
        // Example: Add weekly occurrences
        let nextDate = new Date(startDate);
        while (nextDate <= endDate) {
            nextDate.setDate(nextDate.getDate() + 7); // Add 7 days for weekly recurrence
            dates.push(nextDate.toDateString());
        }
    }
    // todo: (monthly, yearly, etc.)

    return dates;
};

export default RecurrencePreview;
