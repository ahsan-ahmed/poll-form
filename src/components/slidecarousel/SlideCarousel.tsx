import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface ISlideCarouselProps {
    pollData: any[];
    currentSlideIndex: number;
    setCurrentSlideIndex: (currentIndex: any) => void;
}
const SlideCarousel = ({ pollData = [], currentSlideIndex, setCurrentSlideIndex }: ISlideCarouselProps) => {
    const handleNext = () => {
        setCurrentSlideIndex((prevIndex: number) =>
            prevIndex === pollData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentSlideIndex((prevIndex: number) =>
            prevIndex === 0 ? pollData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex items-center">
            <IconButton onClick={handlePrev} className="bg-white shadow-md">
                <ChevronLeft sx={{ color: "#fff" }} />
            </IconButton>
            <div className="overflow-hidden h-64 w-64">
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                >
                    {pollData.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="min-w-64 h-64 flex items-center justify-center"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            <IconButton onClick={handleNext} className="bg-white shadow-md">
                <ChevronRight sx={{ color: "#fff" }} />
            </IconButton>
        </div>
    );
};

export default SlideCarousel;