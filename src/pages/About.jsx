import React, { useState } from "react";
import { faq } from "../faq";
import { faqAns } from "../faqAns";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function About() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="mx-auto max-w-4xl ">
      {faq.map((data, i) => (
        <div key={data.id} className="">
          <div
            onClick={() => toggle(i)}
            className="cursor-pointer flex items-center justify-between space-x-2 border-2 border-sky-400 rounded-t-lg p-3 mb-2"
          >
            <button>
              <h1 className="text-xl font-light">{data.q}</h1>
            </button>

            <span>
              {selected === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {/* the answer */}
          <div
            className={`${
              selected === i ? "flex" : "hidden"
            } border-2 border-t-0 border-sky-400 rounded-b-lg p-3 mb-2 -mt-2`}
          >
            <span>{data.ans}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
