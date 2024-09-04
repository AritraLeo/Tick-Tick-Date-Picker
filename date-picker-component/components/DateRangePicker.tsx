"use client"
// components/DateRangePicker.tsx
import { useDatePicker } from './DatePickerContext';

const DateRangePicker = () => {
    const { dateRange, setDateRange } = useDatePicker();

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDateRange({ ...dateRange, [name]: value });
    };

    return (
        <div className="flex space-x-4 mt-4">
            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    name="start"
                    value={dateRange.start || ''}
                    onChange={handleDateChange}
                    className="border p-2 rounded"
                />
            </div>
            <div>
                <label>End Date:</label>
                <input
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
