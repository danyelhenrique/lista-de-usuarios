import Vue from "vue";

import { mount, config } from "@vue/test-utils";
import Pagination from "@/components/Pagination";

Vue.config.silent = true;
config.showDeprecationWarnings = false;

describe("Pagination.vue", () => {
  it("should be is vue instance", () => {
    const wrapper = mount(Pagination);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should be correct name", () => {
    const wrapper = mount(Pagination);

    expect(wrapper.name()).toEqual("Pagination");
  });

  it("should able to increase next page number", () => {
    const wrapper = mount(Pagination);

    const nextPageMock = jest.fn();

    wrapper.setMethods({ nextPage: nextPageMock });
    const button = wrapper.find("#nextPage");
    button.trigger("click");

    expect(nextPageMock).toBeCalled();
  });

  it("should not be able to decrease less than zero", () => {
    const wrapper = mount(Pagination);

    const prevPageMock = jest.fn();
    wrapper.setData({ page: 1 });

    wrapper.setMethods({ prevPage: prevPageMock });
    const button = wrapper.find("#prevPage");
    const totalPage = wrapper.find("#page-pagination");

    button.trigger("click");
    button.trigger("click");
    button.trigger("click");
    button.trigger("click");

    expect(prevPageMock).toBeCalled();
    expect(totalPage.text()).toContain("1");
  });
});
