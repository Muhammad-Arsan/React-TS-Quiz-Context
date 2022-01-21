import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { shuffleArray } from "../Utils";
import { Category, Numbers } from "../Data/Category";
import { setNumber } from "./data";
import { UserContext } from "../context/categoryContext";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & { answers: string[] };
export let data: any = {};
export let amount: any;
export const fetchQuestions = async (
  amount: any,
  category: any,
  difficulty: any
) => {
  data = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
  );

  console.log("New Data:", data);
  return data.results?.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

const Categories: React.FC = () => {
  const context = useContext(UserContext);
  console.log(context);
  const {
    amount,
    setAmount,
    category,
    setCategory,
    difficulty,
    setDifficulty,
  } = context;

  let navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchQuestions(amount, category, difficulty);
    navigate("/start");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="mb-3">
                <label className="form-label">Select Total Questions:</label>

                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setNumber(Number(e.target.value));
                  }}
                >
                  {Numbers.map((num: any) => (
                    <option key={num.value} value={num.value}>
                      {num.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="mb-3">
                <label className="form-label">Select Category:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {Category.map((cat: any) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="mb-3">
                <label className="form-label">Select Difficulty Level:</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Categories;
