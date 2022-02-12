import { shallowMount } from '@vue/test-utils';
import Index from '../../pages/about';

describe('Checkout page', () => {
  function mount() {
    return shallowMount(Index);
  }
  test('About page should mount properly', () => {
    const wrapper = mount();
    expect(wrapper.exists()).toBeTruthy();
  });
});
