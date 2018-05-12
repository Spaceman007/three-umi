
export default {
  namespace: 'global',

  state: {
    title: 'Welcome!'
  },

  reducers: {
    'title' (state, action) {
      return { ...state, title: action.title }
    }
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        dispatch({ type: 'title', title: location.pathname.split('/').filter(_ => _).join('-> ') })
      })
    }
  }
}
