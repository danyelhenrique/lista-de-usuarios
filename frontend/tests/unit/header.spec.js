import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import Header from "@/components/Header";
import filter from "@/assets/filter.svg";
import logo from "@/assets/analytic.png";

import Vuetify from "vuetify";

const localVue = createLocalVue();
const vuetify = new Vuetify();
localVue.use(vuetify);
localVue.use(Vuex);

describe("Header.vue", () => {
  let mutations;
  const mountFunction = (options) => {
    mutations = {
      TOOGLE_PANEL: jest.fn(),
    };
    const filterPanel = {
      state: {
        isOpen: false,
      },
      mutations,
      actions: {},
    };

    const nstore = new Vuex.Store({
      modules: {
        filterPanel,
      },
    });

    return mount(Header, {
      localVue,
      store: nstore,
      vuetify,
      ...options,
    });
  };
  it("check if is vue instance", async () => {
    const wrapper = mountFunction();
    await wrapper.setData({ logoSrc: logo, filter });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should by correct name", async () => {
    const wrapper = mountFunction();

    await wrapper.setData({ logoSrc: logo, filter });
    expect(wrapper.name()).toEqual("Header");
  });

  it("should by toogle filtesPanel", async () => {
    const wrapper = mountFunction();

    wrapper.find(".filter").trigger("click");

    await wrapper.setData({ logoSrc: logo, filter });

    expect(mutations.TOOGLE_PANEL.mock.calls).toHaveLength(1);
  });
});
