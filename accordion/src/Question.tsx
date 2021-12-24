import React, { ReactElement, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IQuestion } from "./App";

const Question = ({ question }: { question: IQuestion }): ReactElement => {
  const [minimized, setMinimized] = useState<boolean>(true);
  return (
    <article className="question">
      <header>
        <h4>{question.title}</h4>
        <button className="btn" onClick={() => setMinimized(!minimized)}>
          {minimized ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!minimized && <p>{question.info}</p>}
    </article>
  );
};

export default Question;
