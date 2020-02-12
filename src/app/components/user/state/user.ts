import { AppStateKeys, StateConfig } from 'src/app/core/store/models';
import { User } from '../models/user.interface';
import { keeper } from 'src/app/core/modules/keeper';

export type UserActions = '@INIT' | 'UPPERCASE' | 'LOWERCASE' | '@DESTROY';

const actions: Map<string, (state?:any, data?: any) => any> = new Map();

actions.set('@INIT', () => ({ name: 'andrey' }))
actions.set('UPPERCASE', state => ({ name: state && state.name.toUpperCase() }));
actions.set('LOWERCASE', state => ({ name: state && state.name.toLowerCase() }));

export const USER_STATE_CONFIG = {
  name: 'user',
  actions,
  modules: [keeper()]
}