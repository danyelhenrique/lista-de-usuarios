<template>
  <div class="pagination d-flex align-center justify-center my-7">
    <v-btn
      class="mr-2 button no-shadow no-min-widht no-border button-default"
      x-large
      >Primeiro</v-btn
    >

    <v-btn
      @click="prevPage"
      class="mr-2 button no-shadow no-min-widht no-border button-default"
      id="prevPage"
      x-large
      >Anterior</v-btn
    >

    <v-btn
      class="mr-2 pa-0 button no-shadow no-min-widht no-border button-size action page-active"
      id="page-pagination"
      >{{ page }}</v-btn
    >

    <v-btn
      @click="nextPage"
      class="mr-2 button no-shadow no-min-widht no-border button-default"
      x-large
      id="nextPage"
      >Próximo</v-btn
    >

    <v-btn
      class="mr-2 button no-shadow no-min-widht no-border button-default"
      x-large
      >Último</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data: function() {
    return {
      page: 1,
      totalVisible: 1,
    };
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevPage() {
      const CheckPage = this.page <= 1 ? 1 : (this.page -= 1);
      this.page = CheckPage;
    },
  },
};
</script>

<style lang="scss">
div.pagination {
  button {
    font-size: 12px !important;
    background: rgba(255, 255, 255, 0.7) !important;
    color: #9e9e9e !important;
    text-transform: unset;
    font-weight: 400;
  }
  .page-active {
    color: #fff !important;
  }
}
</style>
