import React from "react";
import { FaCopy } from "react-icons/fa";

function AnswerSection({ responseValue, textResponse }) {
  function copyText(text) {
    window.navigator.clipboard.writeText(text);
  }

  return (
    <>
      <hr className="hr-line" />
      <div className="answer-container">
        {responseValue.map((value, index) => {
          let transformedText = value.answer;
          return (
            <div className="answer-section" key={index}>
              <pre className="question">{value.question}</pre>
              <div
                className="answer"
                dangerouslySetInnerHTML={{ __html: transformedText }}
              ></div>
              <div onClick={() => copyText(textResponse)} className="copy-icon">
                <FaCopy />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AnswerSection;
