
export default {
  namespace: 'ambient',

  state: {
    color: '#c0c0c0'
  },

  reducers: {
    color (state, action) {
      return { ...state, color: action.color}
    }
  }
}
