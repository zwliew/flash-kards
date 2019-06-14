import { User, State } from './types';

export default {
  SET_USER(state: State, user: User) {
    state.user = user;
  },
  RESET_USER(state: State) {
    state.user = null;
  },
};
