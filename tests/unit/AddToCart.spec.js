import { mount } from '@vue/test-utils';

import AddToCart from '../../components/AddToCart';

const product = {
  id: 'recoW8ecgjtKx2Sj2',
  stock: 300,
  price: 20099,
  colors: [
    '#ff0000',
    '#ffb900',
    '#00ff00',
  ],
  category: 'bedroom',
  reviews: 17,
  stars: 4.8,
  name: 'leather chair',
  description: 'Clouogist. Schlitz venmoicrodosing gochujang live-edge',
  company: 'caressa',
};

describe('AddToCart', () => {
  function mountComponent(options) {
    return mount(AddToCart, {
      propsData: {
        ...options,
      },
      stubs: {
        'outline-check-icon': true,
        AmountButtons: true,
        NuxtLink: true,
      },
    });
  }
  test('should mount component successfully', () => {
    const params = {
      product,
    };
    const wrapper = mountComponent(params);
    expect(wrapper.exists()).toBeTruthy();
  });
  test('should work computed mainColor properly ', () => {
    const params = {
      product,
    };
    const wrapper = mountComponent(params);
    const currentColor = 2;
    wrapper.setData({
      currentColor,
    });
    expect(wrapper.vm.mainColor).toBe(currentColor);
  });
  test('should work setCurrentColor method properly ', () => {
    const params = {
      product,
    };
    const wrapper = mountComponent(params);
    const currentColor = 0;
    wrapper.setData({
      currentColor,
    });
    wrapper.vm.setCurrentColor(3);
    expect(wrapper.vm.$data.currentColor).toBe(3);
  });
});
