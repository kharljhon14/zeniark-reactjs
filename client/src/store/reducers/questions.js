import { createSlice } from "@reduxjs/toolkit";
import Question from "../../components/question";
import { fetchQuestions } from "../utils/thunks";

export const questionsSlice = createSlice({
   name: "questions",
   initialState: {
      questions: [],
      tenQuestions: [],
      currentQuestion: {},
      questionIndex: 0,
      score: 0,
      start: false,
      ended: false,
      loading: true,
   },
   reducers: {
      getTenQuestions: (state, action) => {
         const questions = [];

         for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * state.questions.length);
            questions.push(state.questions[randomIndex]);
         }

         state.tenQuestions = questions;
      },

      startQuiz: (state, action) => {
         state.start = true;
         state.currentQuestion = state.tenQuestions[state.questionIndex];
      },

      nextQuestion: (state, action) => {
         if (state.questionIndex < 9) {
            state.questionIndex += 1;
            state.currentQuestion = state.tenQuestions[state.questionIndex];
            if (state.currentQuestion.correct_answer === action.payload) state.score += 1;
         } else {
            state.ended = true;
         }
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchQuestions.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchQuestions.fulfilled, (state, action) => {
         state.loading = false;
         state.questions = action.payload;
      });
      builder.addCase(fetchQuestions.rejected, (state) => {
         state.loading = false;
      });
   },
});

export const { getTenQuestions, startQuiz, nextQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;
