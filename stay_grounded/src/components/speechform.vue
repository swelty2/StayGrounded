<template>
  <div class="container">
    <div class="audio-control">
      <p id="audio-control" class="white-circle">
        <img src="../assets/microphone.png">
        <canvas class="visualizer"></canvas>
      </p>
      <p><span id="message"></span></p>
      <p>
        <input type="text" id="BOT" name="BOT" placeholder="BOT" value=""/>
      </p>
    </div>

  </div>
</template>

<script>
export default {
        name: "speechform",
        data() {
          return {
            botName: 'Barista'
        }
      },
      methods: {
        startSpeech() {
          console.log('Clicking the button');
        }
      }
    }
</script>

<style scoped>

</style>
