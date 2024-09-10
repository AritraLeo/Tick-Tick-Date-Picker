"use client"
// components/DateRangePicker.tsx
import { useDatePicker } from './DatePickerContext';

const DateRangePicker = () => {
    const { dateRange, setDateRange } = useDatePicker();

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name + " " + value);
        setDateRange({ ...dateRange, [name]: value });
    };

    return (
        <div className="flex space-x-4 mt-4">
            <div>
                <label htmlFor="start-date">Start Date:</label>
                <input
                    id="start-date"
                    type="date"
                    name="start"
                    value={dateRange.start || ''}
                    onChange={handleDateChange}
                    className="border p-2 rounded"
                />
            </div>
            <div>
                <label htmlFor="end-date">End Date:</label>
                <input
                    id="end-date"
                    type="date"
                    name="end"
                    value={dateRange.end || ''}
                    onChange={handleDateChange}
                    className="border p-2 rounded"
                />
            </div>
        </div>
    );
};

export default DateRangePicker;
