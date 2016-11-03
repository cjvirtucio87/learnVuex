import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      { id: 1, author: 'cjvirtucio', title: 'Shadows', body: 'So this is a story' },
      { id: 2, author: 'cjvirtucio', title: 'Desk Lamp', body: 'etc etc' },
      { id: 3, author: 'cjvirtucio', title: 'Vue are you?', body: 'prince of bel-air?' },
    ],
    newPost: {
      author: '',
      title: '',
      body: '',
    },
  },
  getters,
  mutations,
  actions,
});
