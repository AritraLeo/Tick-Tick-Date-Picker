// __tests__/CustomizationPanel.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { DatePickerProvider } from '../components/DatePickerContext';
import CustomizationPanel from '../components/CustomizationPanel';

describe('CustomizationPanel', () => {
    it('should update the interval input', () => {
        render(
            <DatePickerProvider>
                <CustomizationPanel />
            </DatePickerProvider>
        );
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: '2' } });
        expect(input).toHaveValue(2);
    });

    it('should toggle days in weekly recurrence', () => {
        render(
            <DatePickerProvider>
                <CustomizationPanel />
            </DatePickerProvider>
        );
        const mondayButton = screen.getByText('Mon');

        fireEvent.click(mondayButton);
        expect(mondayButton).toHaveClass('bg-blue-500');

        fireEvent.click(mondayButton);
        expect(mondayButton).not.toHaveClass('bg-blue-500');
    });

    it('should update nth day of month and day of the week for monthly recurrence', () => {
        render(
            <DatePickerProvider>
                <CustomizationPanel />
            </DatePickerProvider>
        );
        const nthDaySelect = screen.getByRole('combobox', { name: /nth day/i });
        fireEvent.change(nthDaySelect, { target: { value: '2' } });
        expect(nthDaySelect).toHaveValue('2');
    });
});
