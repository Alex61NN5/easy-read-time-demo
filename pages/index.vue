<template>
  <div>
    <GithubCorner />
    <div class="container">
      <h1 class="title">Easy Read Time ⏰</h1>
      <h2 class="subtitle">Easily generate Medium like read times.</h2>
      <p class="intro-text">
        Made by
        <a
          target="_blank"
          class="twitter-link"
          href="https://twitter.com/alexginns"
        >Alex Ginns</a>
        <br />with
        <a
          target="_blank"
          class="npm-link"
          href="https://www.npmjs.com/package/easy-read-time"
        >easy-read-time</a>
      </p>
      <ReadTime />
    </div>
  </div>
</template>

<script>
import GithubCorner from "~/components/GithubCorner.vue";
import ReadTime from "~/components/ReadTime.vue";
export default {
  components: {
    GithubCorner,
    ReadTime
  }
};
</script>

<style lang="scss">
.container {
  margin: 30px auto 30px auto;
  max-width: 650px;
  padding: 0 20px;
  width: 100%;
  & br {
    display: none;
    @media (max-width: 450px) {
      display: block;
    }
  }
}

.title {
  font-size: 3em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2.2em;
  }
  @media (max-width: 400px) {
    font-size: 2em;
    width: 80%;
    margin: 0 auto;
  }
}

.subtitle {
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
}

.intro-text {
  text-align: center;
  margin-top: 10px;
}

.twitter-link {
  color: rgba(56, 161, 243, 1);
}

.npm-link {
  color: #fb3e44;
}
</style>
