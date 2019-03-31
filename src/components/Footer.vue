<template>
  <v-footer app dark class="footer">
    <v-card flat tile class="flex bg-color">
      <v-card-title class="footer-padding-adjustment">
        <strong class="subheading">&copy; {{ currentYear }}</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
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
import socialLinks from './common/SocialLinks'

export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear(),
      icons: [
        {
          name: 'fa fa-github',
          color: 'blue',
          link: socialLinks.github
        },
        {
          name: 'fa fa-twitter',
          color: 'blue',
          link: socialLinks.twitter
        },
        {
          name: 'fa fa-linkedin',
          color: 'blue',
          link: socialLinks.linkedin
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
