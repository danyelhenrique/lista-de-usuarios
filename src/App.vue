<template>
  <v-app>
    <Header />
    <v-content>
      <section class="section-content">
        <router-view></router-view>
      </section>
    </v-content>
  </v-app>
</template>


<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Header }
};
</script>

<style lang="scss" scoped>
section.section-content {
  margin-top: 50px;
  padding: 0px 30px;
}
</style>