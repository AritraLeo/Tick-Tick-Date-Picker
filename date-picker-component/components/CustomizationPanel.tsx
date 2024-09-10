"use client";
// components/CustomizationPanel.tsx
import { useDatePicker } from './DatePickerContext';

const CustomizationPanel = () => {
    const { customization, setCustomization, recurrence } = useDatePicker();

    const updateInterval = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomization({ ...customization, interval: parseInt(e.target.value) });
    };

    const toggleDay = (day: string) => {
        const days = customization.days.includes(day)
            ? customization.days.filter((d) => d !== day)
            : [...customization.days, day];
        setCustomization({ ...customization, days });
    };

    const updateNthDayOfMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCustomization({ ...customization, nthDayOfMonth: parseInt(e.target.value) });
    };

    const updateDayOfWeek = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCustomization({ ...customization, days: [e.target.value] });
    };

    return (
        <div className="mt-4">
            <div className="flex items-center">
                <label className="mr-2">Every</label>
                <input
                    type="number"
                    value={customization.interval}
                    onChange={updateInterval}
                    className="border p-2 rounded"
                    min="1"
                />
                <span className="ml-2">{recurrence === 'daily' ? 'day' : recurrence.slice(0, -2)}(s)</span>
            </div>

            {recurrence === 'weekly' && (
                <div className="mt-4">
                    <label htmlFor="day-of-week">Select days of the week:</label>
                    <div className="flex space-x-2 mt-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <button
                                id="day-of-week"
                                key={day}
                                onClick={() => toggleDay(day)}
                                className={`px-3 py-1 rounded ${customization.days.includes(day) ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                    }`}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {recurrence === 'monthly' && (
                <div className="mt-4">
                    <label htmlFor="nth-day">Select nth day of the month:</label>
                    <div className="flex space-x-2 mt-2">
                        <select id="nth-day" onChange={updateNthDayOfMonth} className="border p-2 rounded">
                            {[1, 2, 3, 4].map((nth) => (
                                <option key={nth} value={nth}>
                                    {nth === 1 ? 'First' : nth === 2 ? 'Second' : nth === 3 ? 'Third' : 'Fourth'}
                                </option>
                            ))}
                        </select>

                        <select onChange={updateDayOfWeek} className="border p-2 rounded">
                            {['0', '1', '2', '3', '4', '5', '6'].map((day) => (
                                <option key={day} value={day}>
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][parseInt(day)]}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomizationPanel;
