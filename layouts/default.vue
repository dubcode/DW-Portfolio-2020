<template>
  <!-- wrapper start -->
  <div id="app">
    <Header />
    <Scene />
    <div id="main">
      <div class="row fill-vhmain__inner">
        <nuxt />
      </div>
    </div>
  </div>
  <!-- wrapper end -->
</template>
<script>
import Header from '~/components/Header.vue'
import Scene from '~/components/Scene.vue'
export default {
  components: {
    Header,
    Scene
  },
  methods: {
    toggleBodyClass (addRemoveClass, className) {
      const el = document.body
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  },
  mounted () {
    this.toggleBodyClass('addClass', '--activated')
  },
  destroyed () {
    this.toggleBodyClass('removeClass', '--activated')
  }
}
</script>
<style>
html,
body {
  background: #000;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
}
body {
  transition: background-color ease 0.4s;
}

#app {
  display: block;
  float: left;
  width: 100%;
  opacity: 0;
  transition: opacity 1.5s;
}
body.--activated #app{
  opacity: 1;
}
#main {
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  mix-blend-mode: luminosity;
  opacity: 0.9;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: opacity 1s;
}
.main__inner {
  position: relative;
}
body.navOpen #main {
  opacity: 0;
}
body.work #container {
  filter: hue-rotate(286deg) saturate(400%);
}
body.dev #container {
  filter: hue-rotate(140deg) saturate(200%);
}
body.tools #container {
  filter: hue-rotate(250deg) saturate(300%);
}
body.blog #container {
  filter: hue-rotate(280deg) saturate(300%);
}
p {
  line-height: 1.6em;
  margin: 0 0 1em 0;
}
.headspace {
  display: block;
  float: left;
  height: 74px;
  width: 100%;
}
.page__flex {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 148px);
  width: 100%;
}
.page-enter-active,
.page-leave-active {
  transition: opacity ease 0.4s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.pageslide {
  transform: translateY(-50px);
}

#app #header-state.active ~ #app #main {
  opacity: 0;
}
</style>
