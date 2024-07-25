<script setup>
const audio = ref(null);

function playSound(sound) {
  if (sound) {
    if (!audio.value) {
      audio.value = new Audio(sound);
    }
    audio.value.play();
  }
}

function pauseSound() {
  return audio.value && audio.value.pause();
}
</script>

<template>
  <button @click.prevent="playSound('/Let.mp3')">Play a sound</button>-
  <button @click.prevent="playSound('/funnysong.mp3')">Play funny a sound</button>
  -
  <button @click.prevent="pauseSound()">Pause sound</button>
  <img src="/favicon.ico" alt="">
</template>
