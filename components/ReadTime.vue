<template>
  <div>
    <textarea @input="getReadTime()" v-model="text"></textarea>
    <h3 class="read-time">🎉 {{readTime}} 🎉</h3>
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
  border-radius: 4px;
  border-radius: 4px;
  border: 4px solid #969696;
  color: white;
  font-size: 1.3em;
  height: 400px;
  margin: 20px 0;
  padding: 10px 15px;
  resize: none;
  width: 100%;
  @media (max-width: 500px) {
    height: 360px;
  }
}
.read-time {
  text-align: center;
}
</style>


