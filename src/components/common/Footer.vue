<template>
  <v-footer app dark class="footer">
    <v-card flat tile class="flex bg-color">
      <v-card-title class="footer-padding-adjustment">
        <strong class="subheading">&copy; {{ currentYear }} - {{ author.name }}</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.link"
          class="mx-3"
          dark
          icon>
          <v-icon size="24px">{{ icon.name }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
import { SOCIAL_LINKS } from '../common/Constants.js'

export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear(),
      icons: [
        {
          name: SOCIAL_LINKS.github.icon,
          link: SOCIAL_LINKS.github.url
        },
        {
          name: SOCIAL_LINKS.twitter.icon,
          link: SOCIAL_LINKS.twitter.url
        },
        {
          name: SOCIAL_LINKS.linkedin.icon,
          link: SOCIAL_LINKS.linkedin.url
        }
      ]
    }
  },
  props: ['author']
}
</script>

<style scoped>
.footer-padding-adjustment {
  padding-top: 5px;
}

.bg-color {
  background-color: #303030;
}
</style>
