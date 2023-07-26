import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,handleDelete}) {




  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>(
        <QuestionItem key={question.id} question={question} onDeleteItem={handleDelete}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
