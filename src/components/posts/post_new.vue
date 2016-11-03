<template>
  <div>
    {{ thing }}
    <label for='new-post-form'>New post</label><br>
    <form id='new-post-form' @submit.prevent='createPost'>
      <input placeholder='enter a title' v-model='newPost.title'><br>
      <input placeholder='enter a body' v-model='newPost.body'><br>
      <input type='submit'>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({ thing: undefined }),
  props: {
    newPost: Object,
    onCreate: Function,
  },
  methods: {
    createPost() {
      const vm = this;
      vm.onCreate({ ...vm.newPost });
    },
  },
};

</script>
