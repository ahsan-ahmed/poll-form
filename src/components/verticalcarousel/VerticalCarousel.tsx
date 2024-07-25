interface IVerticalCarouselProps {
    pollData: any[];
    currentIndex: number;
    setCurrentIndex: (currentIndex: number) => void;
}
const VerticalCarousel = ({ pollData = [], currentIndex, setCurrentIndex }: IVerticalCarouselProps) => {
    return (
        <div className="flex flex-col items-center">
            {<div className="overflow-hidden h-64 w-64">
                <div
                    className="transform transition-transform duration-500"
                    style={{ transform: `translateY(-${currentIndex * 16}rem)` }}
                >
                    {pollData.map((item, index) => (
                        <div
                            key={index}
                            className="h-64 flex items-center justify-center"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    );
};

export default VerticalCarousel;
