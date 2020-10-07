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
                    <div class="row fill flex">
                        <ul class="blocks">
                        <li v-for="block in blocks" :key="block.id">
                            <div class="fill flex">
                                <img :src="block.img" />
                            </div>
                        </li>
                    </ul>
                    <!--<div class="slide__svg fill">
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
                            <text style="fill: url(#red); filter: url(#glow);" fill="#fff" :id="`initials__path-${slide.path_a}`" class="slide__in" :transform="`matrix(1 0 0 1 ${slide.xpos} ${slide.ypos})`">{{slide.initials}}</text>
                        </g>
                    </svg>
                    </div>-->
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
                        <span class="row slide__excerpt">
                            {{slide.excerpt}}
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
<style scoped>
.blocks {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  width: 100%;
}
.blocks img {
  height: auto;
  max-width: 70px;
}
</style>
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
          xpos: '238',
          ypos: '182',
          initials: '{ }',
          title: 'my',
          subtitle: 'everyday',
          tertitle: 'tools',
          excerpt: 'Some of the tools and languages I use to create my design and build my development projects.'
        }
      ],
      blocks: [
        {
          id: '1',
          title: 'Vue.js',
          img: 'vue.svg'
        },
        {
          id: '2',
          title: 'Nuxt.js',
          img: 'nuxt.svg'
        },
        {
          id: '3',
          title: 'Three.js',
          img: 'three.svg'
        },
        {
          id: '4',
          title: 'WordPress',
          img: 'wordpress.svg'
        },
        {
          id: '5',
          title: 'Illustrator',
          img: 'ai.svg'
        },
        {
          id: '6',
          title: 'Photoshop',
          img: 'ps.svg'
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
