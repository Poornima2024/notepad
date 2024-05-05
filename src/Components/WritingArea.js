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




import React, { useState, useEffect } from "react";
import Header from "./Header";

const WritingArea = () => {
  const [col, setCol] = useState("black");
  console.log(col)
  const handleColorChange = (color) => {
    setCol(color);
    console.log(color)
  };
  // const selection = window.getSelection();
  // console.log(selection)
  

  var selectedText;
  useEffect(() => {
    const handleSelection = () => {
       selectedText = window.getSelection().toString();
      console.log(selectedText);
      check();
      // selectedText.style.backgroundColor = color;
      
    };


    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  const [headerValue, setHeaderValue] = useState("100%");
  const [inputValues, setInputValues] = useState(() => {
    const storedInputValues = JSON.parse(localStorage.getItem("inputValues"));
    return storedInputValues || Array.from({ length: window.innerHeight }, () => "");
  });

  const handleHeaderValueChange = (value) => {
    setHeaderValue(value);
  };
  var viewportHeight = window.innerHeight;

  const handleChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  useEffect(() => {
    // Store inputValues in local storage
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
  }, [inputValues]);

  
  useEffect(() => {
    if (inputValues.length !== viewportHeight) {
      setInputValues(Array.from({ length: viewportHeight }, (i) => inputValues[i] || ""));
    }
  }, [viewportHeight, inputValues]);

  const rows = [];
  for (let i = 0; i < viewportHeight; i++) {
    rows.push(
      <tr key={i} className="w-[100%] border-2 border-red-700">
        <td>
          <input
            className="w-[100%] h-[100%] pl-[1%] pr-[1%] focus:outline-none"
            value={inputValues[i]}
            onChange={(e) => handleChange(e, i)}
             style={{ fontSize: headerValue ,color: col }}
          />
        </td>
      </tr>
    );
  }

function check(){
  for (let i = 0; i < inputValues.length; i++) {
    if (inputValues[i].includes(selectedText)) {
      console.log("yes")
      console.log(i)
    }
    else{
         console.log("No")
       }
  }
}
  return (
    <div className="w-full font-[500] relative">
      <Header onValueChange={handleHeaderValueChange} colpass={handleColorChange} />
      <table className="w-[100%]">{rows}</table>
    </div>
  );
};

export default WritingArea;







