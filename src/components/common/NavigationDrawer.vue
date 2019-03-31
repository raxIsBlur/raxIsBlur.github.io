<template>
  <v-navigation-drawer v-model="isOpen" app dark temporary floating>
    <v-list class="pa-1">
      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>John Leider</v-list-tile-title>
        </v-list-tile-content>

        <!-- <v-list-tile-action>
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action> -->
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider light></v-divider>
      <!--<v-list-tile v-for="item in items" :key="item.title" @click.stop="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      mini: false,
      isOpen: false
    }
  },
  props: ['drawer'],
  watch: {
    drawer: function (newVal, oldval) {
      this.isOpen = newVal
    },
    isOpen: function (newVal, oldVal) {
      this.$emit('update-drawer', this.isOpen)
    }
  }
}
</script>
