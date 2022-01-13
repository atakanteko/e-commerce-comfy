import { shallowMount } from '@vue/test-utils';
import Navbar from '../../components/Navbar';
import { links } from '../../utils/constants';

let wrapper = null;
beforeEach(() => {
  wrapper = shallowMount(Navbar, {
    stubs: {
      NuxtLink: true,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

test('Check that the specific image exists', () => {
  const img = wrapper.findAll('#navbar-logo');
  expect(img.length).toBe(1);
});

test('render list item', async () => {
  wrapper = shallowMount(Navbar, {
    stubs: {
      NuxtLink: true,
    },
  });
  await wrapper.setData({ routes: links });
  const routesLength = links.length;
  const linksLength = wrapper.findAll('#navbar-link').length;
  expect(linksLength).toBe(routesLength);
});
