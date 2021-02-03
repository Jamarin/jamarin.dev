import { shallowMount } from "@vue/test-utils";
import TheHeader from "@/components/general/TheHeader.vue";

describe("TheHeader.vue", () => {
  it("renders Header when passed", () => {
    const wrapper = shallowMount(TheHeader);
    expect(wrapper.text()).toMatch("Header");
  });
});
