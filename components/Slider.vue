<template>
  <div class="row">
    <div class="ctr">
      <ul class="sub-nav">
        <li>
          <button @click.prevent="slideZero">YO</button>
        </li>
        <li>
          <button @click.prevent="slideOne">UI</button>
        </li>
        <li>
          <button @click.prevent="slideTwo">WP</button>
        </li>
        <li>
          <button @click.prevent="slideThree">JS</button>
        </li>
      </ul>
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
          xpos: '167',
          ypos: '182',
          initials: 'YO',
          title: 'I am',
          subtitle: 'ultra',
          tertitle: 'creative',
          button: 'See my work',
          url: 'https://dribbble.com/DanWakefield'
        },
        {
          id: '1',
          xpos: '234',
          ypos: '182',
          initials: 'UI',
          title: 'I build',
          subtitle: 'digital',
          tertitle: 'experiences',
          button: 'explore my craft',
          url: 'https://dribbble.com/DanWakefield'
        },
        {
          id: '2',
          xpos: '104',
          ypos: '182',
          initials: 'WP',
          title: 'bespoke',
          subtitle: 'wordpress',
          tertitle: 'development',
          button: 'recent projects',
          url: 'https://dribbble.com/DanWakefield'
        },
        {
          id: '3',
          xpos: '213',
          ypos: '182',
          initials: 'JS',
          title: 'front end',
          subtitle: 'jamstack',
          tertitle: 'development',
          button: 'see my code',
          url: 'https://codepen.io/flashvenom'
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
    slideZero () {
      this.$refs.carousel.slideTo(0)
    },
    slideOne () {
      this.$refs.carousel.slideTo(1)
    },
    slideTwo () {
      this.$refs.carousel.slideTo(2)
    },
    slideThree () {
      this.$refs.carousel.slideTo(3)
    },
    slidePrev () {
      this.$refs.carousel.slidePrev()
    },
    slideNext () {
      this.$refs.carousel.slideNext()
    },
    updateCarousel (payload) {
      this.myCarouselData = payload.currentSlide
    }
  }
}
</script>
<style>
.sub-nav {
  left: 0;
  position: absolute;
  bottom: 1em;
  text-align: center;
  width: 100%;
  z-index: 1000;
}
.sub-nav li {
  display: inline-block;
}
.sub-nav button {
  background: transparent;
  border: 1px solid var(--white);
  color: var(--white);
  font-weight: 600;
  font-size: 1em;
  margin: 0 5px;
  height: 40px;
  line-height: 40px;
  width: 40px;
  transition: all ease 0.4s;
  pointer-events:all !important;
}
.sub-nav button:hover {
  background: var(--white);
  color: var(--primary);
  font-weight: 600;
  cursor: poniter
}
.hooper {
  height: 100vh;
  overflow: hidden;
  opacity:0;
  transition: all 1s ease-out;
  opacity: 0.7;
}
.hooper-slide {
  height: 100vh;
}
body.--activated .hooper {
  opacity:1;
  min-height: 100vh;
}
.slider__wrap {
  min-height: 600px;
  height: 100vh;
}
.slide__col {
  opacity: 0.6;
}
.slide__svg {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
.hooper-slide:nth-child(1) .slide__svg {
  transform: translateX(-4.4em);
}
.hooper-slide:nth-child(2) .slide__svg {
  transform: translateX(-6.2em);
}
.hooper-slide:nth-child(3) .slide__svg {
  transform: translateX(-2.8em);
}
.hooper-slide:nth-child(4) .slide__svg {
  transform: translateX(-5em);
}
.slide__content {
  display: block;
  text-align: left;
}
.slide__title {
  font-size: 0.7em;
  margin: 0 0 0.5em 0;
  position: relative;
}
.slide__span {
  display: inline-block;
  position: relative;
}
.slide .slide__title .slide__bg {
  display: block;
  background: #fff;
  height: 100%;
  width: 0%;
  position: absolute;
  z-index: -1;
  transform:translateX(-100%);
  opacity: 0;
  top: 0;
  left: 0;
  transition: transform 0.6s  ease-out;
  transition-delay: 0;
}
.slide .slide__title:nth-child(2) .slide__bg {
  transition: transform 0.6s  ease-out;
  transition-delay: 0.1s;
}
.slide .slide__title:nth-child(3) .slide__bg {
  transition: transform 0.6s  ease-out;
  transition-delay: 0.2s;
}
body.--activated.home .is-active .slide__bg,
body.--activated.work .is-active .slide__bg,
body.--activated.dev .is-active .slide__bg,
body.--activated.tools .is-active .slide__bg,
body.--activated.blog .is-active .slide__bg {
    opacity: 1;
    transform:translateX(0);
    width: 100%;
}
.slide__text {
    color: var(--primary);
    font-size: 2.2em;
    font-weight: 600;
    padding: 0 0.35em;
    text-transform: uppercase;
    width: 0;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.7, 0, 0.84, 0);
}
body.home .is-active .slide__text,
body.work .is-active .slide__text,
body.dev .is-active .slide__text,
body.tools .is-active .slide__text,
body.blog .is-active .slide__text {
    width: auto;
    opacity: 1;
}
.slide__in {
  font-size: 10rem;
  font-weight: 800;
  text-align:right;
  letter-spacing: -0.5rem;
  fill: rgba(255,255,255,0);
  stroke: rgba(255,255,255,1);
  stroke-width: 2px;
  stroke-dashoffset:-1100;
  stroke-dasharray: 1100;
  stroke-linecap: butt;
  stroke-linejoin: round;
  transition: all 1s ease-out;
}
body.home .is-active .slide__in,
body.work .is-active .slide__in,
body.dev .is-active .slide__in,
body.tools .is-active .slide__in,
body.blog .is-active .slide__in {
  fill: rgba(255,255,255,0);
  stroke-dashoffset:0;
  stroke-dasharray: 1100;
}
.hooper h2 {
  margin: 1em 0 0.5em 0;
}
.btn{display: block;text-decoration: none;cursor: pointer; pointer-events: all; color: #fff; font-size: 1em; font-weight: 600; padding: 0; text-transform: uppercase;width: 100%; opacity: 0; transition: all ease 0.5s; transform: translateY(50%);}
body.home .is-active .btn,
body.work .is-active .btn,
body.dev .is-active .btn,
body.tools .is-active .btn,
body.blog .is-active .btn {opacity: 1; transform: translateY(0%); transition: all ease 0.5s; transition-delay: 0.5s;}
.btn span {
  display: inline-block;
  transform: translateY(-24px);
}
.btn svg {
  display: inline-block;
  height: auto;
  width: 40px;
  transform: translateX(0);
  transition: all ease 0.3s;
}
.btn:hover svg {
  transform: translateX(10px);
}
.slide__excerpt {
  color: #fff;
  font-size:1.1em;
  font-weight: 500;
}
.slide__inner {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0em;
  grid-template-areas:
    "colOne"
    "colTwo";
}
.slide__col {
  display: block;
  height: auto;
  width: 100%;
}
.slide__inner > .slide__col:nth-child(1) {
  grid-area: colOne;
}
.slide__inner > .slide__col:nth-child(2) {
  grid-area: colTwo;
  transform: translateY(-6em);
}
@media only screen and (min-width: 1024px) {
  .slide__inner {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "colOne colTwo";
    gap: 4em;
  }
  .slide__col {
    height: 100%;
  }
  .slide__inner > .slide__col:nth-child(2) {
    transform: translateY(0);
  }
  .slide__title {
    font-size: 0.9em;
  }
  .hooper-slide:nth-child(1) .slide__svg,
  .hooper-slide:nth-child(2) .slide__svg,
  .hooper-slide:nth-child(3) .slide__svg,
  .hooper-slide:nth-child(4) .slide__svg {
    transform: translateX(0);
  }
  .slide__svg {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: translateX(0) translatey(0) scale(1);
  }
  .slide__in {
    font-size: 10rem;
  }
}
@media only screen and (min-width: 1300px) {
  .slide__title:nth-child(2) {
    transform: translateX(-3em);
  }
  .slide__inner {
    gap: 6em;
  }
}
</style>
