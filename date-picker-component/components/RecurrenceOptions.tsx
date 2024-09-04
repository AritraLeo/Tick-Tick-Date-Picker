"use client"
// components/RecurrenceOptions.tsx
import { useDatePicker } from './DatePickerContext';

const RecurrenceOptions = () => {
    const { recurrence, setRecurrence } = useDatePicker();

    return (
        <div className="flex space-x-4">
            {['daily', 'weekly', 'monthly', 'yearly'].map((option) => (
                <button
                    key={option}
                    onClick={() => setRecurrence(option)}
                    className={`px-4 py-2 rounded ${recurrence === option ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default RecurrenceOptions;
