import { render, screen } from '@testing-library/react'
import SlideCarousel from './SlideCarousel';

test("Slide carousel renders successfully", () => {
    render(<SlideCarousel/>);

    const firstElement = screen.getByText(/How was you week overall?/i);
    expect(firstElement).toBeInTheDocument();

    const secondElement = screen.getByText(/How was you week-end overall?/i);
    expect(secondElement).toBeInTheDocument();

    const thirdElement = screen.getByText(/How was you week-day overall?/i);
    expect(thirdElement).toBeInTheDocument();
})