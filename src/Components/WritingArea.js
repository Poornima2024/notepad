// import React from "react";
// import { useState, useEffect } from "react";

// import Header from "./Header";
// const WritingArea = () => {
//   const [headerValue, setHeaderValue] = useState("100%");
//   const handleHeaderValueChange = (value) => {
//     setHeaderValue(value);
//   };
//   var viewportHeight = window.innerHeight;
//   //console.log("Viewport Height:", viewportHeight);
//   //console.log(headerValue)

//  const [inputValue, setInputValue] = useState("");

//   // Load input value from localStorage when component mounts
//   useEffect(() => {
//     const storedInputValue = localStorage.getItem("inputValue");
//     if (storedInputValue) {
//       setInputValue(storedInputValue);
//     }
//   }, []);

//   // Update input value in localStorage when it changes
//   useEffect(() => {
//     localStorage.setItem("inputValue", inputValue);
//   }, [inputValue]);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   var rows = [];
//   for (var i = 0; i < viewportHeight; i++) {
//     rows.push(
//       <tr key={i} className="w-[100%]   border-2 border-red-700 ">
//         <input
//           className="w-[100%] h-[100%] pl-[1%] pr-[1%]  focus:outline-none"
//           value={inputValue}
//           onChange={handleChange}
//           style={{ fontSize: headerValue }}
//         ></input>
//       </tr>
//     );
//   }

 
//   return (
//     <div className="w-full font-[500] relative">
//       <Header onValueChange={handleHeaderValueChange}></Header>

//       <table className="w-[100%]">{rows}</table>
//     </div>
//   );
// };

// export default WritingArea;



// import React, { useState, useEffect } from "react";
// import Header from "./Header";

// const WritingArea = () => {
//   const [headerValue, setHeaderValue] = useState("100%");
//   const handleHeaderValueChange = (value) => {
//     setHeaderValue(value);
//   };
//   var viewportHeight = window.innerHeight;

//   // Array to hold input values
//   const [inputValues, setInputValues] = useState(Array(viewportHeight).fill(""));

//   // Load input values from localStorage when component mounts
//   useEffect(() => {
//     const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
//     if (storedInputValues) {
//       setInputValues(storedInputValues);
//     }
//   }, []);

//   // Update input values in localStorage when they change
//   useEffect(() => {
//     localStorage.setItem("inputValues", JSON.stringify(inputValues));
//   }, [inputValues]);

//   const handleChange = (event, index) => {
//     const newInputValues = [...inputValues];
//     newInputValues[index] = event.target.value;
//     setInputValues(newInputValues);
//   };

//   const rows = inputValues.map((value, index) => (
//     <tr key={index} className="w-[100%] border-2 border-red-700">
//       <td>
//         <input
//           className="w-[100%] h-[100%] pl-[1%] pr-[1%] focus:outline-none"
//           value={value}
//           onChange={(e) => handleChange(e, index)}
//           style={{ fontSize: headerValue }}
//         />
//       </td>
//     </tr>
//   ));

//   return (
//     <div className="w-full font-[500] relative">
//       <Header onValueChange={handleHeaderValueChange} />
//       <table className="w-[100%]">{rows}</table>
//     </div>
//   );
// };

// export default WritingArea;



// import React, { useState, useEffect } from "react";
// import Header from "./Header";

// const WritingArea = () => {
//   const [headerValue, setHeaderValue] = useState("100%");
//   const handleHeaderValueChange = (value) => {
//     setHeaderValue(value);
//   };
//   var viewportHeight = window.innerHeight;

//   // Array to hold input values
//   const [inputValues, setInputValues] = useState(Array(viewportHeight).fill(""));

//   // Load input values from localStorage when component mounts
//   // Load input values from localStorage when component mounts
// useEffect(() => {
//   const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
//   console.log("Stored input values:", storedInputValues);
//   if (storedInputValues) {
//     setInputValues(storedInputValues);
//   }
// }, []);
// console.log(" input values:", inputValues);
// // Update input values in localStorage when they change
// useEffect(() => {
//   localStorage.setItem("inputValues", JSON.stringify(inputValues));
//   console.log("Updated input values:", inputValues);
// }, [inputValues]);

// const handleChange = (event, index) => {
//   const newInputValues = [...inputValues];
//   newInputValues[index] = event.target.value;
//   console.log("New input values:", newInputValues); // Log the updated values
//   setInputValues(newInputValues);
// };


//   const rows = inputValues.map((value, index) => (
//     <tr key={index} className="w-[100%] border-2 border-red-700">
//       <td>
//         <input
//           className="w-[100%] h-[100%] pl-[1%] pr-[1%] focus:outline-none"
//           defaultValue={value} 
//           onChange={(e) => handleChange(e, index)}
//           style={{ fontSize: headerValue }}
//         />
//       </td>
//     </tr>
//   ));

//   return (
//     <div className="w-full font-[500] relative">
//       <Header onValueChange={handleHeaderValueChange} />
//       <table className="w-[100%]">{rows}</table>
//     </div>
//   );
// };

// export default WritingArea;


// import React, { useState, useEffect } from "react";
// import Header from "./Header";

// const WritingArea = () => {
//   const [headerValue, setHeaderValue] = useState("100%");
//   const [inputValues, setInputValues] = useState(() => {
//     const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
//     return storedInputValues || Array.from({ length: window.innerHeight }, () => "");
//   });

//   const handleHeaderValueChange = (value) => {
//     setHeaderValue(value);
//   };
//   var viewportHeight = window.innerHeight;

//   const handleChange = (event, index) => {
//     const newInputValues = [...inputValues];
//     newInputValues[index] = event.target.value;
//     setInputValues(newInputValues);
//   };

//   useEffect(() => {
//     // Store inputValues in local storage
//     localStorage.setItem("inputValues", JSON.stringify(inputValues));
//   }, [inputValues]);

//   // Ensure inputValues has rows equal to viewport height
//   // useEffect(() => {
//   //   if (inputValues.length !== viewportHeight) {
//   //     setInputValues(Array.from({ length: viewportHeight }, (_, i) => inputValues[i] || ""));
//   //   }
//   // }, [viewportHeight, inputValues]);

//   useEffect(() => {
//     if (inputValues.length !== viewportHeight) {
//       setInputValues(Array.from({ length: viewportHeight }, (i) => inputValues[i] || ""));
//     }
//   }, [viewportHeight, inputValues]);

//   const rows = [];
//   for (let i = 0; i < viewportHeight; i++) {
//     rows.push(
//       <tr key={i} className="w-[100%] border-2 border-red-700">
//         <td>
//           <input
//             className="w-[100%] h-[100%] pl-[1%] pr-[1%] focus:outline-none"
//             value={inputValues[i]}
//             onChange={(e) => handleChange(e, i)}
//             style={{ fontSize: headerValue }}
//           />
//         </td>
//       </tr>
//     );
//   }

//   return (
//     <div className="w-full font-[500] relative">
//       <Header onValueChange={handleHeaderValueChange} />
//       <table className="w-[100%]">{rows}</table>
//     </div>
//   );
// };

// export default WritingArea;




// import React, { useState, useEffect } from "react";
// import Header from "./Header";

// const WritingArea = () => {
//   const [col, setCol] = useState("black");
//   console.log(col)
//   const handleColorChange = (color) => {
//     setCol(color);
//     console.log(color)
//   };


//   // const selection = window.getSelection();
//   // console.log(selection)
  

//   var selectedText;
//   useEffect(() => {
//     const handleSelection = () => {
//        selectedText = window.getSelection().toString();
//       console.log(selectedText);
      
//       check();
//       // selectedText.style.backgroundColor = color;
      
//     };


//     document.addEventListener('mouseup', handleSelection);

//     return () => {
//       document.removeEventListener('mouseup', handleSelection);
//     };
//   }, []);

//   const [headerValue, setHeaderValue] = useState("100%");
//   const [inputValues, setInputValues] = useState(() => {
//     const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
//     return storedInputValues || Array.from({ length: window.innerHeight }, () => "");
//   });

//   const handleHeaderValueChange = (value) => {
//     setHeaderValue(value);
//   };
//   var viewportHeight = window.innerHeight;

//   const handleChange = (event, index) => {
//     const newInputValues = [...inputValues];
//     newInputValues[index] = event.target.value;
//     setInputValues(newInputValues);
//   };

//   useEffect(() => {
//     // Store inputValues in local storage
//     localStorage.setItem("inputValues", JSON.stringify(inputValues));
//   }, [inputValues]);

  
//   useEffect(() => {
//     if (inputValues.length !== viewportHeight) {
//       setInputValues(Array.from({ length: viewportHeight }, (i) => inputValues[i] || ""));
//     }
//   }, [viewportHeight, inputValues]);

//   const rows = [];
//   for (let i = 0; i < viewportHeight; i++) {
//     rows.push(
//       <tr key={i} className="w-[100%] border-2 border-red-700">
//         <td>
//           <input
//             className="w-[100%] h-[100%] pl-[1%] pr-[1%] focus:outline-none"
//             value={inputValues[i]}
//             onChange={(e) => handleChange(e, i)}
//              style={{ fontSize: headerValue ,color: col }}
//           />
//         </td>
//       </tr>
//     );
//   }

// function check(){
//   for (let i = 0; i < inputValues.length; i++) {
//     if (inputValues[i].includes(selectedText)) {
//       console.log("yes")
//       console.log(i)
//     }
//     else{
//          console.log("No")
//        }
//   }
// }
//   return (
//     <div className="w-full font-[500] relative">
//       <Header onValueChange={handleHeaderValueChange} colpass={handleColorChange} />
//       <table className="w-[100%]">{rows}</table>
//     </div>
//   );
// };

// export default WritingArea;







// import React, { useState, useEffect } from "react";
// import Header from "./Header";

// const WritingArea = () => {
//   const [col, setCol] = useState(""); // Default highlight color
//   const [selectedText, setSelectedText] = useState("");
  
//   const handleColorChange = (color) => {
//     setCol(color);
//   };

//   useEffect(() => {
//     const storedSelectedText = localStorage.getItem("selectedText");
//     if (storedSelectedText) {
//       setSelectedText(storedSelectedText);
//     }

//     const handleSelection = () => {
//       const selection = window.getSelection();
//       const text = selection.toString();
//       if (text !== "") {
//         setSelectedText(text);
//         localStorage.setItem("selectedText", text);
//       } else {
//         setSelectedText("");
//         localStorage.removeItem("selectedText");
//       }
//     };

//     document.addEventListener('mouseup', handleSelection);

//     return () => {
//       document.removeEventListener('mouseup', handleSelection);
//     };
//   }, []);

//   const [headerValue, setHeaderValue] = useState("100%");
//   const [inputValues, setInputValues] = useState(() => {
//     const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
//     return storedInputValues || Array.from({ length: window.innerHeight }, () => "");
//   });

//   const handleHeaderValueChange = (value) => {
//     setHeaderValue(value);
//   };

//   const handleChange = (event, index) => {
//     const newInputValues = [...inputValues];
//     newInputValues[index] = event.target.value;
//     setInputValues(newInputValues);
//   };

//   useEffect(() => {
//     // Store inputValues in local storage
//     localStorage.setItem("inputValues", JSON.stringify(inputValues));
//   }, [inputValues]);

//   useEffect(() => {
//     if (inputValues.length !== window.innerHeight) {
//       setInputValues(Array.from({ length: window.innerHeight }, (i) => inputValues[i] || ""));
//     }
//   }, [inputValues]);

//   const highlightStyle = {
//     backgroundColor: col,
//     display: "inline-block",
//     padding: "0 3px",
//   };

//   return (
//     <div className="w-full font-[500] relative">
//       <Header onValueChange={handleHeaderValueChange} colpass={handleColorChange} />
//       <table className="w-[100%]">
//         {inputValues.map((value, index) => (
//           <tr key={index} className="w-[100%] border-2 border-red-700">
//             <td>
//               <input
//                 className="w-[100%] h-[100%] pl-[1%] pr-[1%] focus:outline-none"
//                 value={value}
//                 onChange={(e) => handleChange(e, index)}
//                 style={{ fontSize: headerValue, ...(value.includes(selectedText) ? highlightStyle : {}) }}
//               />
//             </td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// };

// export default WritingArea;




import React, { useState, useEffect } from "react";

import Header from "./Header";

const WritingArea = () => {
  // State for selected highlight color for each line
  const [lineColors, setLineColors] = useState(() => {
    const storedLineColors = JSON.parse(localStorage.getItem("lineColors"));
    return storedLineColors || Array.from({ length: window.innerHeight }, () => ""); // Default color for each line
  });

  // State for selected text and its corresponding line index
  const [selectedTexts, setSelectedTexts] = useState(() => {
    const storedSelectedTexts = JSON.parse(localStorage.getItem("selectedTexts"));
    return storedSelectedTexts || Array.from({ length: window.innerHeight }, () => "");
  });

  // Handler for changing highlight color for the selected line
  const handleColorChange = (color) => {
    const newLineColors = [...lineColors];
    newLineColors[selectedLine] = color;
    setLineColors(newLineColors);
    localStorage.setItem("lineColors", JSON.stringify(newLineColors));
  };

  // State for selected line index
  const [selectedLine, setSelectedLine] = useState(() => {
    const storedLine = localStorage.getItem("selectedLine");
    return storedLine !== null ? parseInt(storedLine) : -1; // Default no line selected
  });

  useEffect(() => {
    const storedSelectedTexts = JSON.parse(localStorage.getItem("selectedTexts"));
    if (storedSelectedTexts) {
      setSelectedTexts(storedSelectedTexts);
    }

    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection.toString();
      const line = selection.anchorNode?.parentNode?.rowIndex; // Get the index of the selected line
      if (text !== "") {
        const newSelectedTexts = [...selectedTexts];
        newSelectedTexts[line] = text;
        setSelectedTexts(newSelectedTexts);
        setSelectedLine(line);
        localStorage.setItem("selectedTexts", JSON.stringify(newSelectedTexts));
        localStorage.setItem("selectedLine", line);
      }
    };

    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, [selectedTexts]);

  const [headerValue, setHeaderValue] = useState("100%");
  const [inputValues, setInputValues] = useState(() => {
    const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
    return storedInputValues || Array.from({ length: window.innerHeight }, () => "");
  });

  const handleHeaderValueChange = (value) => {
    setHeaderValue(value);
  };
 
  const handleChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
    localStorage.setItem("inputValues", JSON.stringify(newInputValues));// newly added
  };

  useEffect(() => {
    // Store inputValues in local storage
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
  }, [inputValues]);

  useEffect(() => {
    if (inputValues.length !== window.innerHeight) {
      setInputValues(Array.from({ length: window.innerHeight }, (i) => inputValues[i] || ""));
    }
  }, [inputValues]);

  

  return (
    <div id="writing-area" className="w-full lg:font-[500]  sph:font-[300]  relative">
 
      <Header onValueChange={handleHeaderValueChange} colpass={handleColorChange} />
      
      <table className="w-[100%]">
        {inputValues.map((value, index) => (
          <tr key={index} className="w-[100%] border-2 border-blue-950">
            <td>
              <input
                className="w-[100%] h-auto flex items-center mr-2 pb-2  pl-[1%] pr-[1%] focus:outline-none"
                value={value}
                onChange={(e) => handleChange(e, index)}
                style={{
                  fontSize: headerValue,
                  backgroundColor: lineColors[index], // Set background color based on line index
                 
                }}
              />
              {/* Highlight selected text in each line */}
              {index === selectedLine && selectedTexts[index] && 
                <span 
                  style={{ backgroundColor: lineColors[index], display:"none" }} 
                  className="selected-text-highlight">
                  {selectedTexts[index]}
                </span>
              }
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WritingArea;
