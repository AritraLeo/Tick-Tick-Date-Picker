// __tests__/DatePickerContext.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { DatePickerProvider, useDatePicker } from '../components/DatePickerContext';

describe('DatePickerContext', () => {
    it('should provide default values', () => {
        const { result } = renderHook(() => useDatePicker(), { wrapper: DatePickerProvider });

        expect(result.current.recurrence).toBe('daily');
        expect(result.current.customization).toEqual({ interval: 1, days: [], nthDayOfMonth: undefined });
        expect(result.current.dateRange).toEqual({ start: null, end: null });
    });

    it('should update the recurrence', () => {
        const { result } = renderHook(() => useDatePicker(), { wrapper: DatePickerProvider });

        act(() => result.current.setRecurrence('weekly'));
        expect(result.current.recurrence).toBe('weekly');
    });

    it('should update the customization', () => {
        const { result } = renderHook(() => useDatePicker(), { wrapper: DatePickerProvider });

        act(() => result.current.setCustomization({ interval: 2, days: ['Mon'], nthDayOfMonth: 1 }));
        expect(result.current.customization).toEqual({ interval: 2, days: ['Mon'], nthDayOfMonth: 1 });
    });

    it('should update the date range', () => {
        const { result } = renderHook(() => useDatePicker(), { wrapper: DatePickerProvider });

        act(() => result.current.setDateRange({ start: '2023-09-01', end: '2023-09-10' }));
        expect(result.current.dateRange).toEqual({ start: '2023-09-01', end: '2023-09-10' });
    });
});
