import _ from 'lodash';

export default {
  posts: ({ posts }) => posts,
  nextId: ({ posts }) => (_.chain(posts).maxBy('id').value().id + 1),
  // First argument is state; we destructured that and got newPost.
  // Second argument is getters; we destructured that and got nextId.
  newPost: ({ newPost }, { nextId }) => ({ id: nextId, ...newPost }),
};
