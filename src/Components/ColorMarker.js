import React, { useState } from "react";

const ColorMarker = () => {
    const [color , setColor]=useState(false);
    const showcolor=(()=>{
        setColor(!color)
    })
  return (
    <div>
      <button onClick={showcolor} className="relative">click for heighlight</button>
      {color == true && (
        <div>
          <div className="grid grid-cols-4 grid-rows-4 ,absolute top-6 ">
            <div className="bg-purple-500">&nbsp;</div>
            <div className="bg-black">&nbsp;</div>
            <div className="bg-pink-400">&nbsp;</div>
            <div className="bg-yellow-200">&nbsp;</div>
            <div className="bg-green-500">&nbsp;</div>
            <div className="bg-red-600">&nbsp;</div>
            <div className="bg-blue-700">&nbsp;</div>
            <div className="bg-sky-500">&nbsp;</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorMarker;