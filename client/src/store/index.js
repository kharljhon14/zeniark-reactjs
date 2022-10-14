import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./reducers/questions";

export const store = configureStore({
   reducer: { questions: questionsSlice },
});
