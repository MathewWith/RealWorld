import * as AuthActionCreators from './auth';
import * as TagsActionCreators from './articles';

export default {
    ...AuthActionCreators,
    ...TagsActionCreators
}