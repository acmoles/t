<template>
  <ul>
    <li v-for="project in projects" v-bind:key="project.frontmatter.uid">
      <router-link :to="project.path">{{ project.title }}</router-link>
    </li>
  </ul>
</template>

<script>

import { loadableHero } from '@theme/mixins/loadableHero.js'

export default {

  mixins: [loadableHero],

  data () {
    return {
      title: 'Projects'
    }
  },

  computed: {
    projects () {
      return this.$site.pages
        .filter(x => x.path.startsWith('/projects/'))
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
    },
  },

  mounted() {
    this.doLoad()
  },

  methods: {
  }
}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

</style>
