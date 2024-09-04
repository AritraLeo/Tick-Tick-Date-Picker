"use client"
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
                <span className="ml-2">{recurrence.slice(0, -2)}(s)</span>
            </div>

            {recurrence === 'weekly' && (
                <div className="mt-4">
                    <label>Select days of the week:</label>
                    <div className="flex space-x-2 mt-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                            <button
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
        </div>
    );
};

export default CustomizationPanel;
