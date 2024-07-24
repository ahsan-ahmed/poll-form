interface IVerticalCarouselProps {
    items: any[];
    currentIndex: number;
    setCurrentIndex: (currentIndex: number) => void;
}
const VerticalCarousel = ({ items = [], currentIndex, setCurrentIndex }: IVerticalCarouselProps) => {
    return (
        <div className="flex flex-col items-center">
            <div className="overflow-hidden h-64 w-64">
                <div
                    className="transform transition-transform duration-500"
                    style={{ transform: `translateY(-${currentIndex * 16}rem)` }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="h-64 flex items-center justify-center"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
                {items.map((_, idx) =>
                    <button
                        className={`w-3 h-3 rounded-full ${currentIndex !== idx ? 'bg-white border' : 'bg-transparent border-2 border-white'} my-0.5`}
                        onClick={() => setCurrentIndex(idx)}
                    />)}
                <button
                    className={`w-3 h-3 rounded-full ${currentIndex !== items?.length ? 'bg-white border' : 'bg-transparent border-2 border-white'} my-0.5`}
                    onClick={() => setCurrentIndex(items?.length)}
                />
            </div>
        </div>
    );
};

export default VerticalCarousel;
