// components/DatePicker.tsx
import RecurrenceOptions from './RecurrenceOptions';
import CustomizationPanel from './CustomizationPanel';
import MiniCalendar from './MiniCalendar';
import DateRangePicker from './DateRangePicker';

const DatePicker = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <RecurrenceOptions />
            <CustomizationPanel />
            <DateRangePicker />
            <MiniCalendar />
        </div>
    );
};

export default DatePicker;
