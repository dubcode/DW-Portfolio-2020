<template>
  <button :class="{'active': menuClose, 'inactive': !menuClose}" @click="clickHandler" data-cursor-hover>
    <span><div></div></span>
    <span><div></div></span>
    <span><div></div></span>
  </button>
</template>
<style scoped>
/* Hamburger */
button {
  display: block;
  float: right;
  background: none;
  outline: 0;
  border: 0;
  height: 26px;
  width: 46px;
  margin: 0;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: 0.4s ease;
  cursor: pointer;
}
button span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: rgba(255,255,255,0.5);
  opacity: 1;
  left: 0;
  overflow: hidden;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: all ease 0.4s;
}
button span > div {
  background: rgba(255,255,255,0.7);
  display: block;
  transform: translateX(56px);
  height: 100%;
  width: 100%;
  transition: all ease 0.4s;
}
button span:nth-child(2) > div {
  transform: translateX(-56px);
}
button span:nth-child(3) > div {
  transform: translateX(100px);
}
button:hover span > div {
  background: rgba(255,255,255,1);
  transform: translateX(0);
}

button span:nth-child(1) {
  top: 0px;
}
button span:nth-child(2) {
  top: 13px;
}
button span:nth-child(3) {
  top: 26px;
}
.active button span:nth-child(1) {
  top: 13px;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.active button span:nth-child(2) {
  opacity: 0;
  left: -50px;
}
.active button span:nth-child(3) {
  top: 13px;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
<script>
export default {
  props: {
    menuClose: Boolean
  },
  data () {
    return {}
  },
  methods: {
    clickHandler (e) {
      this.$emit('toggle')
    }
  }
}
</script>
