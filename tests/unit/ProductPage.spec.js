import { shallowMount } from '@vue/test-utils';
import Index from '../../pages/products';

describe('Checkout page', () => {
  function mount() {
    return shallowMount(Index);
  }
  test('Product page should mount properly', () => {
    const wrapper = mount();
    expect(wrapper.exists()).toBeTruthy();
  });
});
