import { shallowMount } from '@vue/test-utils';
import Index from '../../pages';

describe('Checkout page', () => {
  function mount() {
    return shallowMount(Index);
  }
  test('Page Index page should mount properly', () => {
    const wrapper = mount();
    expect(wrapper.exists()).toBeTruthy();
  });
});
