import { User } from './types';

export default {
  SET_USER(state: { user: User }, { name, uid, photo }: User) {
    state.user = { name, uid, photo };
  },
};
