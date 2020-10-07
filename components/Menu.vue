<template>
  <div id="menu" class="flex fill">
    <ul class="row">
      <li v-for="link in menu_links" :key="link.id" @click="closeNav">
        <nuxt-link :to="link.link">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
#menu {
  background: transparent;
  opacity: 0;
  pointer-events:none;
  transition: all ease 0.4s;
  position: fixed;
  z-index: 10;
}
body.navOpen #menu {
  opacity: 1;
  pointer-events: all;
}
#menu li a {
  color: var(--white);
  font-family: 'Anurati', sans-serif;
  font-size: 2em;
  padding: 0 1em;
  line-height: 2em;
  text-decoration: none;
  text-transform: uppercase;
  transition: all ease 0.4s;
  mix-blend-mode: luminosity;
  opacity: 0.7;
}
</style>
<script>
export default {
  data () {
    return {
      menu_links: [
        {
          id: '1',
          link: '/',
          title: 'Home'
        },
        {
          id: '2',
          link: 'work',
          title: 'Design'
        },
        {
          id: '3',
          link: 'development',
          title: 'Development'
        },
        {
          id: '4',
          link: 'tools',
          title: 'Toolbox'
        },
        {
          id: '5',
          link: 'blog',
          title: 'Blog'
        }
      ]
    }
  },
  methods: {
    closeNav () {
      const el = document.body
      el.classList.remove('navOpen')
    }
  }
}
</script>
