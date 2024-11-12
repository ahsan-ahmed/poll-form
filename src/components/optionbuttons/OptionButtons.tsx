import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { POLL_DATA_TYPE } from "../../types/poll";

interface IOptionButtonsProps {
  pollData: POLL_DATA_TYPE[];
  currentIndex: number;
  currentSlideIndex: number;
  onUpdatePollData: (idx: number) => void;
}

const OptionButtons = ({
  pollData = [],
  currentIndex,
  currentSlideIndex,
  onUpdatePollData,
}: IOptionButtonsProps) => {
  const selectedPoll: POLL_DATA_TYPE = pollData[currentSlideIndex];

  return (
    <div className="text-white flex justify-center items-center">
      {currentIndex < 3 ? (
        pollData[currentIndex].options.map((opt: any, idx: number) => {
          const bgImojiColor =
            pollData[currentIndex].value === idx ? "#5D3FD3" : "";
          return (
            <Tooltip
              title={opt.label}
              open={pollData[currentIndex].value === idx}
            >
              <IconButton
                sx={{
                  margin: "0px 4px",
                  backgroundColor: bgImojiColor,
                  ":hover": { backgroundColor: bgImojiColor },
                }}
                onClick={() => onUpdatePollData(idx)}
              >
                <img src={opt.icon} alt={opt.label} height={40} width={40} />
              </IconButton>
            </Tooltip>
          );
        })
      ) : (
        <Tooltip title={selectedPoll.options[selectedPoll?.value || 0].label}>
          <img
            src={selectedPoll.options[selectedPoll?.value || 0].icon}
            alt={""}
            height={40}
            width={40}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default OptionButtons;
