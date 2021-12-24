import React, { ReactElement, useState } from "react";
import Question from "./Question";
import data from "./data";

export interface IQuestion {
  id: number;
  title: string;
  info: string;
}

function App(): ReactElement {
  const [questions] = useState<IQuestion[]>(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} question={question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
