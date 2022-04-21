import * as AuthActionCreators from './auth';
import * as TagsActionCreators from './tags';

export default {
    ...AuthActionCreators,
    ...TagsActionCreators
}