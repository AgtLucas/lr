/* Reducers:
 * 1. The action (info about what happened)
 * 2. Copy of current state
 */

const posts = (state = [], action) => {
  console.log(state, action)
  return state
}

export default posts
