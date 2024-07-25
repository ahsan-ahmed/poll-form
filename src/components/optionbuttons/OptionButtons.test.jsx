import { render, screen } from '@testing-library/react'
import OptionButtons from './OptionButtons';

test("Option buttons renders successfully", () => {
    render(<OptionButtons/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})