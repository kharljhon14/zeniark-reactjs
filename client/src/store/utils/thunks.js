import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions = createAsyncThunk("questions/fetchQuestions", async () => {
   try {
      const response = await axios.get("/api/questions/allquestions");

      return response.data.results;
   } catch (err) {
      throw err;
   }
});
