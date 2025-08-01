import React, { useState } from "react";

function Slides({ slides }) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={index === 0}
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setIndex(0)}
        >
          Restart
        </button>
        <button
          disabled={index === 0}
          data-testid="button-prev"
          className="small"
          onClick={() => setIndex(index - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={index === slides.length - 1}
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
