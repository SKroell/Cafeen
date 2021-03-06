
import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reducer'
import user from '../modules/user/store/reducer'
import entries from '../modules/news/store/reducer'
import pages from '../modules/main/store/reducer'

export default combineReducers({ auth, user, entries, pages })