import { mount } from '@vue/test-utils';

import AmountButtons from '../../components/AmountButtons';

const stockParameters = {
  stock: 4,
  stock2: 1,
  stock3: 5,
  stock4: 2,
};
describe('AmountButtons', () => {
  function mountComponent(options) {
    return mount(AmountButtons, {
      propsData: {
        ...options,
      },
      stubs: {
        'outline-minus-icon': true,
        'outline-plus-icon': true,
      },
    });
  }
  test('should mount component successfully', () => {
    const params = {
      stock: 10,
    };
    const wrapper = mountComponent(params);
    expect(wrapper.exists()).toBeTruthy();
  });
  test('get current amount properly', () => {
    const params = {
      stock: 10,
    };
    const wrapper = mountComponent(params);
    const stockStatus = true;
    const amount = 2;
    wrapper.setData({
      amount,
      stockStatus,
    });
    expect(wrapper.vm.getCurrentAmount).toBe(amount);
  });

  test.each([[stockParameters.stock, 4], [stockParameters.stock2, 3]])(
    'increase amount method should return proper amount ',
    (firstArgs, expectedResult) => {
      const params = {
        stock: firstArgs,
      };
      const wrapper = mountComponent(params);
      const stockStatus = false;
      wrapper.setData({
        amount: 3,
        stockStatus,
      });
      wrapper.vm.increaseAmount();
      expect(wrapper.vm.$data.amount).toBe(expectedResult);
    },
  );
  test.each([[stockParameters.stock3, false], [stockParameters.stock4, true]])(
    'increase amount method should return proper stock status ',
    (firstArgs, expectedResult) => {
      const params = {
        stock: firstArgs,
      };
      const wrapper = mountComponent(params);
      const stockStatus = false;
      wrapper.setData({
        amount: 3,
        stockStatus,
      });
      wrapper.vm.increaseAmount();
      expect(wrapper.vm.$data.stockStatus).toBe(expectedResult);
    },
  );
  test('decrease method should work properly', () => {
    const params = {
      stock: 100,
    };
    const wrapper = mountComponent(params);
    const stockStatus = false;
    wrapper.setData({
      amount: 21,
      stockStatus,
    });
    wrapper.vm.decreaseAmount();
    expect(wrapper.vm.$data.amount).toBe(20);
  });
});
