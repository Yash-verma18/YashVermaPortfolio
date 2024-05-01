"use client";
import React, { useState } from "react";

const WorkDetails = ({ workDetails }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="mt-2 mb-2 p-4 bg-zinc-100 dark:bg-zinc-800 shadow dark:shadow-md rounded-md">
      <ul className="list-disc list-inside">
        {(showAll ? workDetails : workDetails?.slice(0, 3))?.map(
          (option, key) => (
            <li
              key={key}
              className="text-gray-900 dark:text-gray-100 text-base font-semibold px-2 "
            >
              {option}
            </li>
          )
        )}
      </ul>
      {workDetails.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 px-5 py-2 bg-violet-600 text-white rounded-md"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default WorkDetails;
