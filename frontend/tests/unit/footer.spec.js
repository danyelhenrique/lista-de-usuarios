import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer";

describe("Footer.vue", () => {
  it("check if is vue instance", () => {
    const wrapper = mount(Footer);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("check if component name is correct", () => {
    const wrapper = mount(Footer);

    expect(wrapper.name()).toEqual("Footer");
  });
});
