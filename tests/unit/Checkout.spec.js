import { shallowMount } from '@vue/test-utils';
import Index from '../../pages/checkout';

describe('Checkout page', () => {
  function mount() {
    return shallowMount(Index);
  }
  test('Checkout page should mount properly', () => {
    const wrapper = mount();
    expect(wrapper.exists()).toBeTruthy();
  });
});
