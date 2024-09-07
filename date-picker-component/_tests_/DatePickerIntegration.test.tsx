// __tests__/DatePickerIntegration.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../components/DatePicker';
import { DatePickerProvider } from '../components/DatePickerContext';

describe('DatePicker Integration', () => {
    it('should display recurring dates correctly', () => {
        render(
            <DatePickerProvider>
                <DatePicker />
            </DatePickerProvider>
        );

        // Select weekly recurrence
        fireEvent.click(screen.getByText('Weekly'));

        // Select "Monday" in the customization panel
        fireEvent.click(screen.getByText('Mon'));

        // Set a date range
        fireEvent.change(screen.getByLabelText('Start Date:'), { target: { value: '2023-09-01' } });
        fireEvent.change(screen.getByLabelText('End Date:'), { target: { value: '2023-09-30' } });

        // Preview should show recurring Mondays in September 2023
        expect(screen.getByText('Mon Sep 04 2023')).toBeInTheDocument();
        expect(screen.getByText('Mon Sep 11 2023')).toBeInTheDocument();
        expect(screen.getByText('Mon Sep 18 2023')).toBeInTheDocument();
        expect(screen.getByText('Mon Sep 25 2023')).toBeInTheDocument();
    });

    it('should display nth day of the month correctly', () => {
        render(
            <DatePickerProvider>
                <DatePicker />
            </DatePickerProvider>
        );

        // Select monthly recurrence
        fireEvent.click(screen.getByText('Monthly'));

        // Set nth day of the month to "Second" and day of the week to "Tuesday"
        fireEvent.change(screen.getByRole('combobox', { name: /nth day/i }), { target: { value: '2' } });
        fireEvent.change(screen.getByRole('combobox', { name: /day of week/i }), { target: { value: '2' } }); // Tuesday

        // Set a date range
        fireEvent.change(screen.getByLabelText('Start Date:'), { target: { value: '2023-09-01' } });
        fireEvent.change(screen.getByLabelText('End Date:'), { target: { value: '2023-12-31' } });

        // Preview should show second Tuesday of each month
        expect(screen.getByText('Tue Sep 12 2023')).toBeInTheDocument();
        expect(screen.getByText('Tue Oct 10 2023')).toBeInTheDocument();
        expect(screen.getByText('Tue Nov 14 2023')).toBeInTheDocument();
        expect(screen.getByText('Tue Dec 12 2023')).toBeInTheDocument();
    });
});
