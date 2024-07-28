export const useResumedTimer = () => {
  const resumedLogic = (AutoResumedTimer: boolean, TimerStatus: boolean) => !AutoResumedTimer ? TimerStatus = false :
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TimerStatus = true
  return { resumedLogic }
}