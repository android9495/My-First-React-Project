import { configureStore } from '@reduxjs/toolkit'
import usersSlice from "./slices/usersSlice";


export const store = configureStore({
    reducer: {

    },
})

// export type RootState = ReturnType<typeof store.getState>;