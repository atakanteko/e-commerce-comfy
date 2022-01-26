import { createLocalVue, mount } from '@vue/test-utils';
import Services from '../../components/Home/Services';
import { services } from '../../utils/services';

function mountComponent() {
  const localVue = createLocalVue();
  return mount(Services, {
    localVue,
    mocks: {

    },
    stubs: {
      'outline-globe-alt-icon': true,
    },
  });
}

describe('Services Component Test', () => {
  test('Should render component successfully', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBeTruthy();
  });
  test('Should match the rendered service size with the constant json data', () => {
    const wrapper = mountComponent();
    const lengthOfServices = services.length;
    expect(wrapper.findAll('.service').length).toBe(lengthOfServices);
  });
});
