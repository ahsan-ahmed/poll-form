import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

interface IOptionButtonsProps {
  pollData: any[];
  currentIndex: number;
  setCurrentIndex: (currentIndex: number) => void;
  currentSlideIndex: number;
  setPollData: (data: any) => void;
}

const OptionButtons = ({ pollData = [], currentIndex, setCurrentIndex, currentSlideIndex, setPollData }: IOptionButtonsProps) => {
  const selectedPoll: any = pollData[currentSlideIndex]
  return (
    <div className="text-white flex justify-center items-center">
      {currentIndex < 3 ? pollData[currentIndex].options.map((opt: any, idx: number) => {
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
  )
}

export default OptionButtons;