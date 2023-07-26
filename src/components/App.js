import React, {useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([])

useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then((r)=>r.json())
  .then((data)=>setQuestions(data))
},[])

function handleAddQuestion(newQuestion){
  setQuestions([...questions, newQuestion])

}
function deleteQuestion (deletedQuestion){
  const questionsToDisplay = questions.filter((question)=> question.id !==deletedQuestion.id)
  setQuestions(questionsToDisplay)
}



  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} handleDelete={deleteQuestion}/>}
    </main>
  );
}

export default App;
