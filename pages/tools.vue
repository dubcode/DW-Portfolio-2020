<template>
  <!-- wrapper start -->
  <div class="row">
    <div class="row">
      <div class="ctr">
        <div class="page">
          <Slider />
        </div>
      </div>
    </div>
  </div>
  <!-- wrapper end -->
</template>
<script>
import Slider from '~/components/ToolsSlider.vue'
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
    setTimeout(() => this.togglePageBodyClass('addClass', 'tools'), 100)
  },
  destroyed () {
    this.togglePageBodyClass('removeClass', 'tools')
  }
}
</script>
