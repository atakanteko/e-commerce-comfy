import {
  actions as productActions,
  getters as productGetters,
  mutations as productMutations,
  state as productState,
} from '../store/products_context';

const mockProduct = {
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
};

const modules = {
  products_context: {
    namespaced: true,
    state: productState(),
    getters: productGetters,
    actions: productActions,
    mutations: productMutations,
  },
};
export default modules;
