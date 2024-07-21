export const sounds = () => {
  const audio = ref()
  function playSound(sound: any) {
    if (sound) {
      if (!audio.value) {
        audio.value = new Audio(sound);
      }
      audio.value.play();
    }
  }
  return { playSound, audio }
}
