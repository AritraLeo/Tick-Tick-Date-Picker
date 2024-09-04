// app/page.tsx
import DatePicker from '../components/DatePicker';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <DatePicker />
    </main>
  );
}
