// __tests__/RecurrenceOptions.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { DatePickerProvider } from '../components/DatePickerContext';
import RecurrenceOptions from '../components/RecurrenceOptions';

describe('RecurrenceOptions', () => {
    it('should render recurrence options', () => {
        render(
            <DatePickerProvider>
                <RecurrenceOptions />
            </DatePickerProvider>
        );
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(4); // daily, weekly, monthly, yearly
    });

    it('should allow selecting a recurrence option', () => {
        render(
            <DatePickerProvider>
                <RecurrenceOptions />
            </DatePickerProvider>
        );
        const dailyButton = screen.getByText('Daily');
        const weeklyButton = screen.getByText('Weekly');

        fireEvent.click(weeklyButton);
        expect(weeklyButton).toHaveClass('bg-blue-500');

        fireEvent.click(dailyButton);
        expect(dailyButton).toHaveClass('bg-blue-500');
        expect(weeklyButton).not.toHaveClass('bg-blue-500');
    });
});
