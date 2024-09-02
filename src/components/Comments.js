import React from "react";
import { PopComments } from "./PopComments";

export default function Comments() {
  return (
    <div>
      <hr className="border-1 border-gray-100 opacity-20 mt-2" />
      <h2 className="text-xl font-bold p-1 ">
        <div className="flex justify-between">

        <div>Comments</div>{" "}
        <div>
          <div className="w-full max-h-[50%] mr-2 ">
            {" "}
            <PopComments />{" "}
          </div>
        </div>
        </div>
      </h2>
      <hr className="border-1 border-gray-100 opacity-20" />
      {/* {">"} */}
    </div>
  );
}
