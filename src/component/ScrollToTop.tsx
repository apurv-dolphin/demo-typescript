import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [topButton, setTopButtton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setTopButtton(true);
      } else {
        setTopButtton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {topButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            height: "50px",
            right: "50px",
            width: "50px",
            fontSize: "50px",
            justifyContent: "center",
          }}
          onClick={scrollUp}
        >
          <div className="seticon">
            <h1>^</h1>
          </div>
        </button>
      )}
    </div>
  );
}
