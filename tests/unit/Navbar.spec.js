import { createLocalVue, mount } from '@vue/test-utils';
import Navbar from '../../components/Navbar';
import { links } from '../../utils/links';

function mountComponent() {
  const localVue = createLocalVue();
  return mount(Navbar, {
    localVue,
    mocks: {

    },
    stubs: {
      NuxtLink: true,
    },
  });
}

test('Check that the specific image exists', () => {
  const wrapper = mountComponent();
  const img = wrapper.findAll('#navbar-logo');
  expect(img.length).toBe(1);
});

test('render list item', async () => {
  const wrapper = mountComponent();
  await wrapper.setData({ routes: links });
  const routesLength = links.length;
  const linksLength = wrapper.findAll('#navbar-link').length;
  expect(linksLength).toBe(routesLength);
});
