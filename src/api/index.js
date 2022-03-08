import { usersApi } from './users'

const apiReducers = {
  [usersApi.reducerPath]: usersApi.reducer,
}

export const apiMiddleware = [usersApi.middleware]

export default apiReducers
