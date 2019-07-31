<template>
  <div>
    <div class="scrollbar-container">
      <textarea @input="getReadTime()" v-model="text" class="scrollbar-hidden"></textarea>
    </div>
    <h3 class="read-time">🎉 {{ readTime }} 🎉</h3>
  </div>
</template>

<script>
  import getReadTime from "easy-read-time";
  import { STORY } from "~/static/story.js";
  export default {
    data() {
      return {
        text: STORY,
        readTime: "11 min read."
      };
    },
    methods: {
      getReadTime() {
        this.readTime = getReadTime(this.text, 250).formattedString;
      }
    }
  };
</script>

<style lang="scss" scoped>
  textarea {
    background: #282c35;
    color: white;
    font-size: 1.3em;
    padding-right: 30px;
    outline: none;
    resize: none;
    width: 100%;
    @media (max-width: 500px) {
      height: 360px;
    }
  }

  .scrollbar-container {
    background: #282c35;
    overflow: hidden;
    border: 4px solid #969696;
    border-radius: 4px;
    margin: 20px 0;
  }

  .scrollbar-hidden {
    height: 400px;
    border: none;
    margin: 0px -300px 0px 17px;
  }

  .read-time {
    text-align: center;
  }
</style>
