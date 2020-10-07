<template>
  <div class="row">
    <div class="ctr">
      <div class="row">
        <hooper
            ref="carousel"
            @slide="updateCarousel"
            :hover-pause="false"
            :wheel-control="false"
            :auto-play="true"
            :play-speed="10000"
            :transition="600"
            :mouseDrag="false"
        >
            <slide v-for="slide in slides" :key="slide.id">
            <div
                class="slide row fill"
            >
                <div
                class="fill slide__inner"
                >
                <div
                    class="row slide__col"
                >
                    <div class="slide__svg fill">
                    <svg
                        class="row"
                        x="0px"
                        y="0px"
                        viewBox="0 0 400 260"
                        style="enable-background:new 0 0 400 260;"
                        xml:space="preserve"
                    >
                        <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <linearGradient id="red" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" style="stop-color:#d21917;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#fb5119;stop-opacity:1" />
                            </linearGradient>
                        <mask id="uv-gradient">
                            <linearGradient id="red" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" style="stop-color:#d21917;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#fb5119;stop-opacity:1" />
                            </linearGradient>
                        </mask>
                        </defs>
                        <g>
                            <!-- set x position & unqiue mask classes-->
                            <text style="fill: url(#red); filter: url(#glow);" fill="#fff" :id="`initials__path-${slide.path_a}`" class="slide__in" :transform="`matrix(1 0 0 1 ${slide.xpos} ${slide.ypos})`">{{slide.initials}}</text>
                        </g>
                    </svg>
                    </div>
                </div>
                <div
                    class="row slide__col slide__content"
                >
                    <div class="flex-l fill">
                    <div class="row">
                        <h2 class="row">
                        <span class="slide__title row">
                            <span class="slide__span">
                            <span class="slide__bg"></span>
                            <span class="slide__text">{{slide.title}}</span>
                            </span>
                        </span>
                        <span class="slide__title row">
                            <span class="slide__span">
                            <span class="slide__bg"></span>
                            <span class="slide__text">{{slide.subtitle}}</span>
                            </span>
                        </span>
                        <span class="slide__title row">
                            <span class="slide__span">
                            <span class="slide__bg"></span>
                            <span class="slide__text">{{slide.tertitle}}</span>
                            </span>
                        </span>
                        </h2>
                        <span class="row">
                        <a :href="slide.url" class="btn" target="_blank">
                            <span>
                              {{slide.button}}
                            </span>
                            <svg x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path fill="#fff" d="M94.4,51.4l-12,12C82,63.8,81.5,64,81,64s-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8l8.6-8.6H7c-1.1,0-2-0.9-2-2s0.9-2,2-2h81.2  l-8.6-8.6c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l12,12c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2  c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0.1,0.3,0.1,0.5,0,0.8c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2  c0,0.1-0.1,0.1-0.1,0.2C94.6,51.2,94.5,51.3,94.4,51.4z"/></svg>
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Hooper,
  Slide
} from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  name: 'App',
  components: {
    Hooper,
    Slide
  },
  data () {
    return {
      carouselData: 0,
      slides: [
        {
          id: '0',
          xpos: '160',
          ypos: '182',
          initials: 'XO',
          title: 'digital',
          subtitle: 'elbow',
          tertitle: 'grease',
          button: 'See my design work',
          url: 'https://dribbble.com/DanWakefield'
        }
      ]
    }
  },
  watch: {
    carouselData () {
      this.$refs.carousel.slideTo(this.carouselData)
    }
  },
  methods: {
    updateCarousel (payload) {
      this.myCarouselData = payload.currentSlide
    }
  }
}
</script>
