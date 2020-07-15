import vuetify from "vuetify";

import { mount, createLocalVue } from "@vue/test-utils";

import ListUsers from "@/components/ListUser";

const localVue = createLocalVue();
localVue.use(vuetify);

describe("ListUsers.vue", () => {
  const mountFunction = (options) => {
    return mount(ListUsers, {
      localVue,
      ...options,
    });
  };

  it("should be is vue instance", () => {
    const wrapper = mountFunction();

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should be correct name", () => {
    const wrapper = mountFunction();

    expect(wrapper.name()).toEqual("ListUsers");
  });

  it("should be able to list correct length users", async () => {
    const mockUsers = [
      {
        name: "Eclair",
        email: "test@gmail.com",
        created_at: "30/05/2020",
        rules: "01",
        updated_at: "30/05/2020",
        status: true,
        actions: "...",
      },
      {
        name: "Cupcake",
        email: "test@gmail.com",
        created_at: "30/05/2020",
        rules: "01",
        updated_at: "30/05/2020",
        status: true,
        actions: "...",
      },
    ];

    const propsData = {
      users: mockUsers,
    };
    const wrapper = mountFunction();
    await wrapper.setData(propsData);
    const listUser = wrapper.findAll(".list-user");

    expect(listUser.length).toEqual(mockUsers.length);
  });
});
