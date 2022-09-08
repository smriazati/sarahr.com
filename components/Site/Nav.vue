<template>
  <header class="site-header">
    <button @click="toggleMenu()">
      <span v-if="isExpanded">Close</span>
      <span v-else>Menu</span>
    </button>
    <div :class="isExpanded ? 'show' : 'hide'" class="collapse-area">
      <h1><nuxt-link to="/">Sarah Riazati</nuxt-link></h1>
      <nav>
        <ul ref="menu">
          <li>
            <nuxt-link to="/web">UX &amp; web development</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/videoanimation">Video &amp; animation</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/documentary">Documentary projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/teaching">College teaching</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About + Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  mounted() {
    this.addEventListeners();
  },
  methods: {
    addEventListeners() {
      const menu = this.$refs.menu;
      const items = menu.querySelectorAll("li");
      items.forEach((item) => {
        item.addEventListener("click", this.toggleMenu);
      });
    },
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
<style lang="scss">
$header-spacer: 1rem;
$transition-menu-transform: 0.3s ease all;

header.site-header {
  button {
    position: fixed;
    z-index: 101;
    top: $header-spacer;
    left: $header-spacer;
  }
  .collapse-area {
    background: rgb(0, 0, 0);
    color: white;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    height: 100%;
    padding: $header-spacer;
    padding-top: 4rem;
    transition: $transition-menu-transform;
    &.show {
      transform: translateX(0vw);
    }
    &.hide {
      transform: translateX(-50vw);
    }
  }
}
header.site-header {
  h1,
  li {
    @include h2Style();
  }
  nav {
    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      > * {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>