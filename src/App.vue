<template>
  <v-app>
    <Header />
    <v-content>
      <section class="section-content my-13 px-8">
        <router-view></router-view>
      </section>
    </v-content>
    <Footer />
  </v-app>
</template>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: { Header, Footer }
};
</script>
