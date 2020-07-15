import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
// import store from '../../src/store'
import FiltersPanel from "@/components/FiltersPanel";

import vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(vuetify);

describe("FiltersPanel.vue", () => {
  const mountFunction = (options) => {
    return mount(FiltersPanel, {
      localVue,
      ...options,
    });
  };

  it("check if is vue instance", () => {
    const wrapper = mountFunction({
      mocks: {
        $store: {
          state: {
            filterPanel: true,
          },
        },
      },
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should by correct name", () => {
    const wrapper = mountFunction({
      mocks: {
        $store: {
          state: {
            filterPanel: true,
          },
        },
      },
    });

    expect(wrapper.name()).toEqual("FiltersPanel");
  });
});
