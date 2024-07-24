import { useState } from 'react';
import VerticalCarousel from './components/VerticalCarousel';
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
  const [pollData, setPollData] = useState(items);

  return (
    <div className="App">
      <div className="grid grid-cols-2 h-screen relative">
        <div style={{ backgroundColor: "#5D3FD3" }} className="text-white flex justify-center items-center text-5xl">
          <VerticalCarousel items={pollData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
        <div className="text-white flex justify-center items-center">
          {pollData.length < 3 && pollData[currentIndex].options.map((opt, idx) => {
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
          }
          )}
        </div>
      </div>
    </div >
  );
}

export default App;
