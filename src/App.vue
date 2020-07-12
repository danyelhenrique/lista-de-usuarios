<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Latest Release</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <span class="group pa-2">
          <i class="material-icons">search</i>
          <i class="material-icons">home</i>
          <i class="material-icons">power_settings_new</i>
          <i class="material-icons">security</i>
          <i class="material-icons">person</i>
          <i class="material-icons">settings</i>

          <img :src="filter" alt="filter" class="filter-icon" />
          <v-icon>mdi-info</v-icon>
        </span>
      </div>
    </v-app-bar>

    <v-content> </v-content>
  </v-app>
</template>

<script>
import {
  mdiHome,
  mdiPower,
  mdiSecurity,
  mdiAccount,
  mdiSelectSearch,
} from "@mdi/js";
import filter from "@/assets/filter.svg";

export default {
  name: "aa",
  data: () => ({
    mdiHome,
    mdiPower,
    mdiSecurity,
    mdiAccount,
    mdiSelectSearch,
    filter,
  }),
};
</script>

<style lang="scss" scoped>
img.filter-icon {
  height: 24px;
  width: 24px;
}
</style>
