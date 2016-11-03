<template>
    <ul :style="styles">
      <li v-for='post of posts'>{{ post }}</li>
      <li><post-new :new-post='newPost' :on-create='createPost'></post-new</li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import postNew from './post_new';

const styles = {
  listStyle: 'none',
};

export default {
  // can pass a styles data object to your template
  // (note that we're destructuring the returned object)
  data: () => ({ styles }),
  computed: {
    hello: () => 'hello',
    ...mapGetters([
      'posts',
      'newPost',
    ]),
  },
  methods: {
    ...mapActions([
      'createPost',
    ]),
  },
  components: {
    postNew,
  },
};
</script>
