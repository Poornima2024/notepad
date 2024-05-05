import React, { useState } from "react";
import { PiHighlighter } from "react-icons/pi";
const ColorMarker = ({colpass}) => {

    const [color , setColor]=useState(false);
    const showcolor=(()=>{
        setColor(!color)
    })
    const [selectedColor, setSelectedColor] = useState(null);
   
   
    const Markercol=((col)=>{
      setSelectedColor(col);
      colpass(col);
     
    });

  return (
    <div>
      {/* <button onClick={showcolor} className="relative"></button> */}
      <PiHighlighter onClick={showcolor}  className="h-[0%] w-[200%]" style={{color: selectedColor }} />
      {color == true && (
        <div >
          <div className="grid grid-cols-4 grid-rows-4 absolute top-6 h-[254%] w-[10%] mt-[1%] ">
            <div className="bg-purple-500" onClick={()=>Markercol("purple")}>&nbsp;</div>
            <div className="bg-black" onClick={()=>Markercol("black")}>&nbsp;</div>
            <div className="bg-pink-400" onClick={()=>Markercol("pink")}>&nbsp;</div>
            <div className="bg-yellow-200" onClick={()=>Markercol("yellow")}>&nbsp;</div>
            <div className="bg-green-500" onClick={()=>Markercol("green")}>&nbsp;</div>
            <div className="bg-red-600" onClick={()=>Markercol("red")}>&nbsp;</div>
            <div className="bg-blue-700" onClick={()=>Markercol("blue")}>&nbsp;</div>
            <div className="bg-sky-500" onClick={()=>Markercol("skyblue")}>&nbsp;</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorMarker;


