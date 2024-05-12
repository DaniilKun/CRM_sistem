import { configureStore } from '@reduxjs/toolkit'
import userReducer, { JWT_PERSISTENT_STATE } from './clices/usersSlice/usersSlice'
import { saveState } from './storage'

export const store = configureStore({
  reducer: {
    user:userReducer,
  },
})

store.subscribe(() =>{
  saveState({jwt : store.getState().user.jwt}, JWT_PERSISTENT_STATE)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch