import { createSlice } from "@reduxjs/toolkit";
import { getRandomItemsInArray } from "../../helpers";
import { fetchQuestions } from "../utils/thunks";

export const questionsSlice = createSlice({
   name: "questions",
   initialState: {
      questions: [],
      tenQuestions: [],
      answers: [],
      currentQuestion: {},
      questionIndex: 0,
      score: 0,
      start: false,
      ended: false,
      loading: true,
   },
   reducers: {
      getTenQuestions: (state, action) => {
         getRandomItemsInArray(10, state.questions, state.tenQuestions);
      },

      startQuiz: (state, action) => {
         state.start = true;
         state.currentQuestion = state.tenQuestions[state.questionIndex];
      },

      nextQuestion: (state, action) => {
         state.currentQuestion = state.tenQuestions[state.questionIndex];
         state.answers.push(action.payload);

         if (state.currentQuestion.correct_answer === action.payload) state.score += 1;

         if (state.questionIndex < 9) state.questionIndex += 1;
         else {
            state.ended = true;
            state.currentQuestion = {};
         }
      },
      playAgain: (state, action) => {
         state.questionIndex = 0;
         state.score = 0;
         state.answers = [];
         state.tenQuestions = [];
         getRandomItemsInArray(10, state.questions, state.tenQuestions);
         state.currentQuestion = state.tenQuestions[state.questionIndex];
         state.ended = false;
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

export const { getTenQuestions, startQuiz, nextQuestion, playAgain } = questionsSlice.actions;

export default questionsSlice.reducer;
