<template>
  <div class="pagination d-flex align-center justify-center my-6">
    <v-btn class="mr-2 button no-shadow no-min-widht no-border button-default" x-large>Primeiro</v-btn>

    <v-btn
      @click="prevtPage"
      class="mr-2 button no-shadow no-min-widht no-border button-default"
      x-large
    >Anterior</v-btn>

    <v-btn
      class="mr-2 pa-0 button no-shadow no-min-widht no-border button-size action page-active"
    >{{page}}</v-btn>

    <v-btn
      @click="nextPage"
      class="mr-2 button no-shadow no-min-widht no-border button-default"
      x-large
    >Próximo</v-btn>

    <v-btn class="mr-2 button no-shadow no-min-widht no-border button-default" x-large>Último</v-btn>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      disabled: false,
      length: 10,
      page: 1,
      totalVisible: 1
    };
  },
  methods: {
    nextPage() {
      this.page += 1;
    },
    prevtPage() {
      const CheckPage = this.page <= 1 ? 1 : (this.page -= 1);
      this.page = CheckPage;
    }
  }
};
</script>

<style lang="scss" >
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