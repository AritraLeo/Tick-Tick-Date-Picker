import CustomizationPanel from '@/components/CustomizationPanel';
import DatePicker from '@/components/DatePicker';
import { DatePickerProvider } from '@/components/DatePickerContext';
import DateRangePicker from '@/components/DateRangePicker';
import MiniCalendar from '@/components/MiniCalendar';
import RecurrenceOptions from '@/components/RecurrenceOptions';
import RecurrencePreview from '@/components/RecurrencePreview';

export default function HomePage() {
  return (
    <DatePickerProvider>
      <div className="p-6 bg-white rounded-lg shadow-md custom-container">
        <h1 className="text-2xl font-bold mb-4">Date Picker with Recurrence</h1>
        {/* <RecurrenceOptions />
        <CustomizationPanel />
        <RecurrencePreview />
        <MiniCalendar />
        <DateRangePicker /> */}
        <DatePicker />
      </div>
      {/* Other components */}
    </DatePickerProvider>
  );
}
