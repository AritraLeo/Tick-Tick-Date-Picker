// jest.setup.ts
import '@testing-library/jest-dom/extend-expect';

// __tests__/RecurrenceOptions.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import { DatePickerProvider } from '../components/DatePickerContext';

const renderWithContext = (component: JSX.Element) => {
    return render(<DatePickerProvider>{component}</DatePickerProvider>);
};

describe('RecurrenceOptions Component', () => {
    it('should render all recurrence options', () => {
        renderWithContext(<RecurrenceOptions />);
        expect(screen.getByText('Daily')).toBeInTheDocument();
        expect(screen.getByText('Weekly')).toBeInTheDocument();
        expect(screen.getByText('Monthly')).toBeInTheDocument();
        expect(screen.getByText('Yearly')).toBeInTheDocument();
    });

    it('should update recurrence option when clicked', () => {
        renderWithContext(<RecurrenceOptions />);

        const dailyButton = screen.getByText('Daily');
        const weeklyButton = screen.getByText('Weekly');

        // Initially, the Daily button should be active
        expect(dailyButton).toHaveClass('bg-blue-500');

        // Click on the Weekly button
        fireEvent.click(weeklyButton);

        // Now the Weekly button should be active
        expect(weeklyButton).toHaveClass('bg-blue-500');
        expect(dailyButton).toHaveClass('bg-gray-200');
    });
});
