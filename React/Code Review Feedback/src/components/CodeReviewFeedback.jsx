import React, { useState } from "react";

const FeedbackSystem = () => {
  const [titles, setTites] = useState({
    Readability: { up: 0, down: 0 },
    Performance: { up: 0, down: 0 },
    Security: { up: 0, down: 0 },
    Documentation: { up: 0, down: 0 },
    Testing: { up: 0, down: 0 },
  });

  const vote = (key, vote) => {
    titles[key][vote]++;
    setTites({ ...titles });
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {Object.keys(titles).map((title, index) => (
          <div key={index} className="pa-10 w-300 card">
            <h2>{title}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
                name="up"
                onClick={(event) => vote(title, event.target.name)}
              >
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
                name="down"
                onClick={(event) => vote(title, event.target.name)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{titles[title].up}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{titles[title].down}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
