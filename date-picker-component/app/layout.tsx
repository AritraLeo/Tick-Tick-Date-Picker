// app/layout.tsx
import './globals.css';
import { DatePickerProvider } from '../components/DatePickerContext';

export const metadata = {
  title: 'Date Picker Component',
  description: 'A reusable date picker component in Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DatePickerProvider>{children}</DatePickerProvider>
      </body>
    </html>
  );
}
