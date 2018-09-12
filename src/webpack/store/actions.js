import types from './types';

export const setActiveTab = ({tab, group}) => {
  return {
    type: types.SET_ACTIVE_TAB,
    group,
    tab
  };
};
