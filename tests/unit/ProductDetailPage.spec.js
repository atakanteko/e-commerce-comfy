import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Index from '../../pages/products/_id';
import mockStore from '../mockStore';

jest.mock('axios', () => ({
  get: _url => new Promise(resolve => {
    const responseData =
      {
        data: {
          id: 'recZkNf2kwmdBcqd0',
          name: 'accent chair',
          price: 25999,
          image: 'https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160',
          colors: [
            '#ff0000',
            '#00ff00',
            '#0000ff',
          ],
          company: 'marcos',
          description: 'Cloud bread VHS hell of banjo bicycle rights jianbing ' +
            'umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr ' +
            'dreamcatcher waistcoat, authentic chillwave trust fund. Viral ' +
            'typewriter fingerstache pinterest pork belly narwhal. Schlitz ' +
            'venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki ' +
            'trust fund hashtag kinfolk microdosing gochujang live-edge',
          category: 'office',
          shipping: true,
        },
      };
    resolve(responseData);
    console.log(_url);
  }),
}));

describe('Checkout page', () => {
  function mount(options) {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    return shallowMount(Index, {
      stubs: {
        NuxtLink: true,
      },
      mocks: {
        $route: {
          ...options,
        },
      },
      localVue,
      store: new Vuex.Store({ modules: mockStore }),
    });
  }
  test('Product page should mount properly', () => {
    const parameters = {
      params: {
        id: 'ecZkNf2kwmdBcqd0',
      },
    };
    const wrapper = mount(parameters);
    expect(wrapper.exists()).toBeTruthy();
  });
});
