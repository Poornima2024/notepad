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



import React, { useState, useEffect } from "react";
import Header from "./Header";

const WritingArea = () => {
  const [headerValue, setHeaderValue] = useState("100%");
  const handleHeaderValueChange = (value) => {
    setHeaderValue(value);
  };
  var viewportHeight = window.innerHeight;

  // Array to hold input values
  const [inputValues, setInputValues] = useState(Array(viewportHeight).fill(""));

  // Load input values from localStorage when component mounts
  // Load input values from localStorage when component mounts
useEffect(() => {
  const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
  console.log("Stored input values:", storedInputValues);
  if (storedInputValues) {
    setInputValues(storedInputValues);
  }
}, []);
console.log(" input values:", inputValues);
// Update input values in localStorage when they change
useEffect(() => {
  localStorage.setItem("inputValues", JSON.stringify(inputValues));
  console.log("Updated input values:", inputValues);
}, [inputValues]);

const handleChange = (event, index) => {
  const newInputValues = [...inputValues];
  newInputValues[index] = event.target.value;
  console.log("New input values:", newInputValues); // Log the updated values
  setInputValues(newInputValues);
};


  const rows = inputValues.map((value, index) => (
    <tr key={index} className="w-[100%] border-2 border-red-700">
      <td>
        <input
          className="w-[100%] h-[100%] pl-[1%] pr-[1%] focus:outline-none"
          defaultValue={value} 
          onChange={(e) => handleChange(e, index)}
          style={{ fontSize: headerValue }}
        />
      </td>
    </tr>
  ));

  return (
    <div className="w-full font-[500] relative">
      <Header onValueChange={handleHeaderValueChange} />
      <table className="w-[100%]">{rows}</table>
    </div>
  );
};

export default WritingArea;
