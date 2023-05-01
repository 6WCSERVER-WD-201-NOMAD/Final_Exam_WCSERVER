<template>
 <div class="home-container bg-home">
    <!-- <h1>HOME</h1> -->
    <div class="Message">
    <div class="shape">
      <div class="content">
        <div class="topCont">
          <h1 class="welcome">{{ title1 }}<br>{{ title2 }}</h1>
        </div>
        <div class="botCont">
          <p class="tag">The tourist guides were ready to serve with their utmost effort to ensure a great trip.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title1: 'GATEWAY TO',
      title2: 'ADVENTURE'
    }
  }
}
</script>

<style scoped>
.bg-home {
  height: 100vh;
  background-image: url("../assets/home_bg.png");
  background-position: center;
  background-size: cover;
  overflow: auto;
}

.Message {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 9%;
}

.shape {
  position: relative;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border-radius: 0px;
  color: #fff;
}

.topCont {
  background-color: rgba(0, 0, 0, 0.55);
  padding: 10px;
  width: 108%;
  margin: 0;
}

.welcome{
  padding-top: 19px;
  padding-left: 18%;
  font-size: 65px;
  line-height: 120%;
  color: white;
}

.botCont {
  background-color: transparent;
  padding-top: 20px;
  padding-left: 160px;
  text-align: left;
  margin: 0;
}
.tag{
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 4px;
}

</style>
