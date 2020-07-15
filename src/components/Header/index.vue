<template>
  <v-app-bar
    app
    color="primary py-12 d-flex align-center"
    light
    absolute
    min-width="100%"
    flat
    class="header"
  >
    <div
      class="d-flex align-center justify-space-between container nav-container"
    >
      <div class="group d-flex align-center">
        <v-btn href="/" text>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="logoSrc"
            transition="scale-transition"
            width="65"
          />
        </v-btn>

        <div class="seperator hidde-header-nav-on-small" />

        <div class="nav-icons-user-securi-icon hidde-header-nav-on-small">
          <div class="person-shild">
            <i class="material-icons icon-secondary-color">security</i>
          </div>

          <div class="person-shild">
            <i class="material-icons">person</i>
          </div>
        </div>

        <SearchBar />
      </div>

      <div
        class="group pa-2 nav-icons-container align-center justify-center hidde-header-nav-on-small"
      >
        <v-btn class="filter nav-button-size" @click="showFilterPanel">
          <img :src="filter" alt="filter" class="filter-icon" />
        </v-btn>

        <v-btn class="add-user button action button nav-shadow" large>
          <i class="material-icons mr-1" style="font-size: 20px">person</i>
          <p>Incluir Usuario</p>
        </v-btn>

        <div class="seperator" />

        <v-btn class="button no-bg no-shadow nav-button-size">
          <i class="material-icons icon-secondary-color">home</i>
        </v-btn>

        <v-btn class="button no-bg no-shadow nav-button-size">
          <i class="material-icons icon-secondary-color">settings</i>
        </v-btn>

        <v-btn class="button no-bg no-shadow nav-button-size">
          <i class="material-icons icon-secondary-color">power_settings_new</i>
        </v-btn>
      </div>
      <div class="show-buguer-header-nav-on-small">
        <v-menu oapen-on-hover top offset-y>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                  >Menu</v-btn
                >
              </template>
              <span>Menu</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item>
              <div class="d-flex flex-column align-start">
                <v-list-item-title>
                  <v-btn class="button no-bg no-shadow ">
                    <i class="material-icons icon-secondary-color">home</i>
                    <small>Incluir Úsuario</small>
                  </v-btn>
                </v-list-item-title>
                <v-list-item-title>
                  <v-btn class="button no-bg no-shadow ">
                    <i class="material-icons icon-secondary-color">home</i>
                    <small>Home</small>
                  </v-btn>
                </v-list-item-title>
                <v-list-item-title>
                  <v-btn class="button no-bg no-shadow ">
                    <i class="material-icons icon-secondary-color">settings</i>

                    <small>Settrings</small>
                  </v-btn>
                </v-list-item-title>
                <v-list-item-title>
                  <v-btn class="button no-bg no-shadow ">
                    <i class="material-icons icon-secondary-color"
                      >power_settings_new</i
                    >
                    <small> SignOut </small>
                  </v-btn>
                </v-list-item-title>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import filter from "@/assets/filter.svg";
import logo from "@/assets/analytic.png";
import SearchBar from "@/components/SearchBar";

export default {
  name: "Header",
  components: { SearchBar },
  data: function() {
    return {
      logoSrc: logo,
      filter,
    };
  },
  methods: {
    showFilterPanel() {
      this.$store.commit("TOOGLE_PANEL");
    },
  },
};
</script>

<style>
header > div {
  width: 100%;
}
header .v-toolbar__content {
  padding: 0 !important;
}
.header {
  z-index: 0 !important;
}
.group {
  display: flex;
}
</style>

<style lang="scss" scoped>
.v-toolbar__content {
  width: 100%;
}
.v-list-item__title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background: #f5f5f5;
  margin: 5px 0;
  border-radius: 5px;
}
.icon-secondary-color {
  color: #757575;
}
.container {
  width: 100%;
}

.seperator {
  height: 30px;
  width: 2px;
  background: #e0e0e0;
}
.header {
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.1) !important;
}

.filter {
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1) !important;

  img.filter-icon {
    height: 15px;
    width: 15px;
    transform: rotate(90deg);
  }
}

.nav-container {
  margin-left: unset;
  margin-right: unset;
  max-width: 100% !important;
}
.logo {
  height: 24px;
  width: 30px;
}
.add-user {
  width: 176px !important;
  height: 50px !important;
  margin: 0 16px;
  color: #fff !important;
  min-width: unset !important;
  padding: 0 !important;
  i {
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
}
.submit-search {
  background: none;
}

.nav-icons-user-securi-icon {
  display: flex;
  background: #fff;
  border-radius: 5px;
  height: 50px;
  width: 100px;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1) !important;

  margin: 0px 26px;

  div {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      color: #424242b0;
      font-size: 20px;
      font-weight: 600;
    }

    & + div {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: linear-gradient(219.39deg, #f57e02 -8.56%, #ee3030 102.75%);
      i {
        color: #fff;
      }
    }
  }
}
</style>
