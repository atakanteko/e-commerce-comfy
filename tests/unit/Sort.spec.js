import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { actions } from '../../store/products_context';

import Sort from '../../components/Sort';

const product = [
  {
    name: 'A',
    price: 30,
  },
  {
    name: 'B',
    price: 20,
  },
  {
    name: 'C',
    price: 45,
  },
];

const productResult = [
  {
    name: 'B',
    price: 20,
  },
  {
    name: 'A',
    price: 30,
  },
  {
    name: 'C',
    price: 45,
  },
];

describe('Sort Component', () => {
  function mountComponent(options) {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    // const mockApplySortFunctionality = jest.fn();
    const mockSetViewType = jest.fn();
    const mockSetOptionValue = jest.fn();

    const getFilterProductsMock = jest.fn();
    getFilterProductsMock.mockReturnValue(product);
    const getGridViewStatusMock = jest.fn();
    getGridViewStatusMock.mockReturnValue(options.viewStatus);
    const getOptionValueMock = jest.fn();
    getOptionValueMock.mockReturnValue('price-lowest');
    const store = new Vuex.Store({
      modules: {
        products_context: {
          namespaced: true,
          getters: {
            getFilterProducts: getFilterProductsMock,
          },
          actions: {
            applySortFunctionality: actions.applySortFunctionality,
          },
        },
        filter_context: {
          namespaced: true,
          getters: {
            getGridViewStatus: getGridViewStatusMock,
            getOptionValue: getOptionValueMock,
          },
          actions: {
            setIsGridView: mockSetViewType,
            setOptionValue: mockSetOptionValue,
          },
        },
      },
    });
    return mount(Sort, {
      localVue,
      store,
      propsData: {
        ...options,
      },
      stubs: {
        'outline-view-grid-icon': true,
        'outline-view-list-icon': true,
      },
    });
  }
  test('should mount component successfully', () => {
    const params = {};
    const wrapper = mountComponent(params);
    expect(wrapper.exists()).toBeTruthy();
  });

  test('check grid view toggle method works properly', () => {
    const params = {
      viewStatus: true,
    };
    const wrapper = mountComponent(params);
    wrapper.vm.gridView();
    expect(wrapper.vm.getGridViewStatus).toBe(true);
  });
  test('check list view toggle method works properly', () => {
    const params = {
      viewStatus: false,
    };
    const wrapper = mountComponent(params);
    wrapper.vm.listView();
    expect(wrapper.vm.getGridViewStatus).toBe(false);
  });
});
