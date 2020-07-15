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
import api from "@/services/api";

export default {
  name: "App",
  components: { Header, Footer, FiltersPanel },
  mounted: async function() {
    const { data } = await api.get("/users");

    this.$store.commit("LOAD_USERS", { users: data });
  },
};
</script>
