import types from './types';

const INITIAL_STATE = {
  activeTab: {
    // group: 'tab',    
  }
};

function createReducer (initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_ACTIVE_TAB] (state, action) {
    const { tab, group } = action;

    return {
      ...state,
      activeTab: {
        ...state.activeTab,
        [group]: tab
      }
    };
  }
});

export default reducer;
