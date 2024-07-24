import { useState } from 'react';
import VerticalCarousel from './components/VerticalCarousel';
import SlideCarousel from './components/SlideCarousel';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const items = [
  {
    id: 0,
    title: "How was you week overall?",
    value: null,
    options: [{ icon: "https://img.icons8.com/ios-glyphs/30/FAB005/thumb-up--v1.png", label: "Thumbs Up" }, { icon: "https://img.icons8.com/emoji/48/thinking-face.png", label: "Thinking Face" }, { icon: "https://img.icons8.com/ios-glyphs/30/FAB005/thumbs-down.png", label: "Thumbs Down" }]
  },
  {
    id: 1,
    title: "How was you week-end overall?",
    value: null,
    options: [{ icon: "https://img.icons8.com/ios-glyphs/30/FAB005/thumb-up--v1.png", label: "Thumbs Up" }, { icon: "https://img.icons8.com/emoji/48/thinking-face.png", label: "Thinking Face" }, { icon: "https://img.icons8.com/ios-glyphs/30/FAB005/thumbs-down.png", label: "Thumbs Down" }]
  },
  {
    id: 2,
    title: "How was you week-day overall?",
    value: null,
    options: [{ icon: "https://img.icons8.com/ios-glyphs/30/FAB005/thumb-up--v1.png", label: "Thumbs Up" }, { icon: "https://img.icons8.com/emoji/48/thinking-face.png", label: "Thinking Face" }, { icon: "https://img.icons8.com/ios-glyphs/30/FAB005/thumbs-down.png", label: "Thumbs Down" }]
  },
];
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [pollData, setPollData] = useState(items);
  const selectedPoll: any = pollData[currentSlideIndex]

  return (
    <div className="App">
      <div className="grid grid-cols-2 h-screen relative">

        {/* Stepper */}
        <div className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
          {pollData.map((_, idx) =>
            <button
              className={`w-3 h-3 rounded-full ${currentIndex !== idx ? 'bg-white border' : 'bg-transparent border-2 border-white'} my-0.5`}
              onClick={() => setCurrentIndex(idx)}
            />)}
          <button
            className={`w-3 h-3 rounded-full ${currentIndex !== pollData?.length ? 'bg-white border' : 'bg-transparent border-2 border-white'} my-0.5`}
            onClick={() => setCurrentIndex(pollData?.length)}
          />
        </div>

        {/* Vertical Carousel */}
        <div style={{ backgroundColor: "#5D3FD3" }} className="text-white flex justify-center items-center text-5xl">
          {currentIndex < 3
            ? <VerticalCarousel items={pollData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
            : <SlideCarousel items={pollData} currentSlideIndex={currentSlideIndex} setCurrentSlideIndex={setCurrentSlideIndex} />}
        </div>

        {/* Options View */}
        <div className="text-white flex justify-center items-center">
          {currentIndex < 3 ? pollData[currentIndex].options.map((opt, idx) => {
            const bgImojiColor = pollData[currentIndex].value === idx ? '#5D3FD3' : ''
            return (
              <Tooltip title={opt.label} open={pollData[currentIndex].value === idx}>
                <IconButton sx={{ margin: "0px 4px", backgroundColor: bgImojiColor, ":hover": { backgroundColor: bgImojiColor } }}
                  onClick={() => {
                    let newPollData: any = [...pollData];
                    newPollData[currentIndex].value = idx;
                    setPollData(newPollData);
                  }}>
                  <img src={opt.icon} alt={opt.label} height={40} width={40} />
                </IconButton>
              </Tooltip>
            )
          }) : <img src={selectedPoll.options[selectedPoll?.value].icon} alt={""} height={40} width={40} />}
        </div>

      </div>
    </div>
  );
}

export default App;
