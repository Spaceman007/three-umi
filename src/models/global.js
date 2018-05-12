
export default {
  namespace: 'global',

  state: {
    title: 'Welcome!'
  },

  reducers: {
    'title' (state, action) {
      const obj = {}
      if (action.title) obj.title = action.title
      else obj.title = 'Welcome!'
      return { ...state, ...obj }
    }
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        dispatch({ type: 'title', title: location.pathname.split('/').filter(_ => _).join(' -> ') })
      })
    }
  }
}
