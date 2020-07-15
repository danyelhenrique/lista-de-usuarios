<template>
  <v-row justify="center">
    <v-overlay
      :z-index="zIndex"
      :value="filterPaneilIsOpen"
      @click="toogleFilterPanel"
    >
      <div class="panel d-flex flex-column ">
        <div class="panel-title  d-flex  align-center pa-5">
          <img :src="filter" alt="filter" class="filter-icon" />
          <h3 class="ml-4">Filtros</h3>
          <v-btn
            class="button no-bg nav-button-size"
            @click="toogleFilterPanel"
          >
            <i class="material-icons">close</i>
          </v-btn>
        </div>
        <div class="container d-flex flex-column pa-5">
          <div class="description">
            <span
              >Utilize os filtros abaixo para refiar os resultados da tabela,
              clique no botão APLICAR para salvar as alterações.
            </span>
          </div>

          <v-expansion-panels light>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div
                  class="filter-item d-flex  d-flex align-center justify-space-between"
                >
                  <div class=" d-flex  d-flex align-center">
                    <i class="material-icons mr-4"> calendar_today </i>
                    <span>Todas as datas de inclusão </span>
                  </div>
                  <i class="material-icons"> arrow_drop_down </i>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content> </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                <div
                  class="filter-item d-flex  d-flex align-center justify-space-between"
                >
                  <div class=" d-flex  d-flex align-center">
                    <i class="material-icons mr-4"> calendar_today </i>
                    <span>Todas as datas de Alteração </span>
                  </div>
                  <i class="material-icons"> arrow_drop_down </i>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content> </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                <div
                  class="filter-item d-flex  d-flex align-center justify-space-between"
                >
                  <div class=" d-flex  d-flex align-center">
                    <i class="material-icons mr-4"> calendar_today </i>
                    <span>Ativos e Inativos </span>
                  </div>
                  <i class="material-icons"> arrow_drop_down </i>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content> </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-btn
            class="button no-bg no-shadow submit-filter my-15"
            outlined
            color="#d81b60"
          >
            Aplicar
          </v-btn>
        </div>
      </div>
    </v-overlay>
  </v-row>
</template>

<script>
import filter from "@/assets/filter.svg";

export default {
  name: "FiltersPanel",
  data: function() {
    return {
      zIndex: 0,
      filter,
    };
  },
  computed: {
    filterPaneilIsOpen() {
      return this.$store.state.filterPanel.isOpen;
    },
  },
  methods: {
    toogleFilterPanel() {
      this.$store.commit("TOOGLE_PANEL");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-expansion-panel,
.v-expansion-panel::before {
  box-shadow: none !important;
  background: none !important;
  border-radius: 0;
}
.v-expansion-panel-header {
  padding-bottom: 24px;
}
.v-expansion-panel {
  border-bottom: 2px solid #e0e0e0;
}

.submit-filter {
  height: 70px !important;
}
div.panel {
  width: 35vw;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0;
  background: #fff;

  .filter-item {
    i {
      color: #9e9e9e;
      font-size: 20px;
    }
    div {
      span {
        color: #d81b60;
        font-weight: 500;
        font-size: 15px;
        text-transform: uppercase;
      }
    }
  }

  .panel-title {
    height: 100px;
    width: 100%;

    h3 {
      color: #000;
      text-transform: uppercase;
      flex: 1;
    }

    button {
      box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: flex-end;

      i {
        color: #424242;
        font-size: 20px;
      }
    }
  }

  .container {
    background: #f5f5f5;
    height: 100%;

    .description {
      height: 100px;
      width: 100%;
      color: #757575;
      font-style: italic;
    }
  }

  img.filter-icon {
    height: 25px;
    width: 25px;
    transform: rotate(90deg);
  }
}
</style>
