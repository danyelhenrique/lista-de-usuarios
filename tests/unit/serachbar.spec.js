import { mount } from "@vue/test-utils";
import Searchbar from "@/components/Searchbar";

describe("Searchbar.vue", () => {
  it("check if is vue instance", () => {
    const wrapper = mount(Searchbar);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should by correct name", () => {
    const wrapper = mount(Searchbar);

    expect(wrapper.name()).toEqual("SearchBar");
  });
});
