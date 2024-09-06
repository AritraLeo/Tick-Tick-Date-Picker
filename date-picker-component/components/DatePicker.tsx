// components/DatePicker.tsx
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationPanel from './CustomizationPanel';
import MiniCalendar from './MiniCalendar';
import DateRangePicker from './DateRangePicker';
import RecurrencePreview from './RecurrencePreview';

const DatePicker = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md custom-container">
            <h1 className="text-2xl font-bold mb-4">Date Picker with Recurrence</h1>
            <RecurrenceOptions />
            <CustomizationPanel />
            <DateRangePicker />
            <RecurrencePreview />
            <MiniCalendar />
        </div>
    );
};

export default DatePicker;
