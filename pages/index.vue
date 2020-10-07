<template>
  <!-- wrapper start -->
  <div class="row fs">
    <Slider />
  </div>
  <!-- wrapper end -->
</template>
<script>
import Slider from '~/components/Slider.vue'
export default {
  components: {
    Slider
  },
  methods: {
    togglePageBodyClass (addRemoveClass, className) {
      const el = document.body
      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    }
  },
  mounted () {
    setTimeout(() => this.togglePageBodyClass('addClass', 'home'), 500)
  },
  destroyed () {
    this.togglePageBodyClass('removeClass', 'home')
  }
}
</script>
