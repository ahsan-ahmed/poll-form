import { POLL_DATA_TYPE } from "../../types/poll";

interface IStepperProps {
  pollData: POLL_DATA_TYPE[];
  currentIndex: number;
  setCurrentIndex: (currentIndex: number) => void;
  handleSnackbarClick: () => void;
}

const Stepper = ({
  pollData,
  currentIndex,
  setCurrentIndex,
  handleSnackbarClick,
}: IStepperProps) => {
  return (
    <div className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
      {pollData.map((_, idx) => (
        <button
          className={`w-3 h-3 rounded-full ${
            currentIndex !== idx
              ? "bg-white border"
              : "bg-transparent border-2 border-white"
          } my-0.5`}
          onClick={() => setCurrentIndex(idx)}
        />
      ))}
      <button
        className={`w-3 h-3 rounded-full ${
          currentIndex !== pollData?.length
            ? "bg-white border"
            : "bg-transparent border-2 border-white"
        } my-0.5`}
        onClick={() => {
          const answerList = pollData.map((p) => p.value);
          let filteredAnswer = answerList.filter((value) => value == null);
          !filteredAnswer.length
            ? setCurrentIndex(pollData?.length)
            : handleSnackbarClick();
        }}
      />
    </div>
  );
};

export default Stepper;
