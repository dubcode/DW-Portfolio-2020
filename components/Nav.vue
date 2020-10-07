<template>
  <div id="nav">
    <ul>
      <li v-for="link in nav_links" :key="link.id">
        <nuxt-link :to="link.link">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
#nav {
  display: none;
}
#nav ul {
  list-style-type: none;
}
@media only screen and (min-width: 1024px) {
  #nav {
    display: block;
    float: right;
    opacity: 1;
    padding: 4px 1em 0 0;
    transition: all ease 1s;
  }
  body.navOpen #nav {
    opacity: 0;
  }
  #nav ul li {
    float: left;
  }
  #nav ul li a {
    color: var(--white);
    font-family: 'Anurati', sans-serif;
    font-size: 0.7em;
    padding: 0 1em;
    text-decoration: none;
    text-transform: uppercase;
    transition: all ease 0.4s;
  }
}
</style>
<script>
export default {
  data () {
    return {
      nav_links: [
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
  }
}
</script>
