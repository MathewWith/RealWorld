import * as AuthActionCreators from './auth';
import * as TagsActionCreators from './articles';
import * as UserActionCreators from './user';

export default {
    ...AuthActionCreators,
    ...TagsActionCreators,
    ...UserActionCreators
}