<template>
  <v-app>
    <Header />
    <v-content>
      <section class="section-content my-13 px-8">
        <router-view></router-view>
      </section>
    </v-content>
    <Footer />
    <FiltersPanel />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FiltersPanel from "@/components/FiltersPanel";

export default {
  name: "App",
  components: { Header, Footer, FiltersPanel }
};
</script>
