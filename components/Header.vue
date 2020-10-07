<template>
  <div id="header-state" class="row">
    <header class="header row">
      <div class="ctr">
        <div class="flex">
          <div class="row header__icons">
            <Icons />
          </div>
          <div class="row header__logo">
            <Logo />
          </div>
          <div class="row header__nav">
            <Hamburger />
            <Nav />
          </div>
        </div>
      </div>
    </header>
    <Menu />
  </div>
</template>
<style>
.header {
  display: block;
  padding: 1em 0;
  position: fixed;
  z-index: 20;
  opacity: 0.7;
  transition: all ease 0.4s;
  mix-blend-mode: luminosity;
}
.header__icons,
.header__nav {
  flex-grow: 1;
}
.header__logo {
  width: 40px;
  flex: none;
}

#header-state {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
}
@media only screen and (min-width: 1024px) {
  .header__logo {
    width: 50px;
  }
}
</style>
<script>
import Icons from '~/components/Icons.vue'
import Logo from '~/components/Logo.vue'
import Hamburger from '~/components/HamburgerTwo.vue'
import Menu from '~/components/Menu.vue'
import Nav from '~/components/Nav.vue'
export default {
  components: {
    Icons,
    Logo,
    Hamburger,
    Menu,
    Nav
  },
  data () {
    return {
      nav_links: [
        {
          id: '1',
          link: 'work',
          title: 'Design'
        },
        {
          id: '2',
          link: 'development',
          title: 'Development'
        },
        {
          id: '3',
          link: 'tools',
          title: 'Toolbox'
        },
        {
          id: '4',
          link: 'test',
          title: 'Blog'
        }
      ]
    }
  }
}
</script>
