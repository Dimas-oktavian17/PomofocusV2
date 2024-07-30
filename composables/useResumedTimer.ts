export const useResumedTimer = () => {
  const resumedLogic = (AutoResumedTimer: boolean, TimerStatus: boolean) => {
    TimerStatus = !AutoResumedTimer;
    return TimerStatus;
  }
  return { resumedLogic }
}