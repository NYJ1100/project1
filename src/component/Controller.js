/*const Controller = ({ handleSetCount }) => {
    const handleOnChange = (e) => {
        handleSetCount (e.target.value);
    };

    return (
        <div>
            <div>
            <button onClick={() => handleSetCount(-1)}>-1</button>
            <button onClick={() => handleSetCount(-10)}>-10</button>
            <button onClick={() => handleSetCount(-100)}>-100</button>
            <button onClick={() => handleSetCount(100)}>+100</button>
            <button onClick={() => handleSetCount(10)}>+10</button>
            <button onClick={() => handleSetCount(1)}>+1</button>

            </div>
            입력: <input value={count} type="number"onChange={handleOnChange}></input>
        </div>
        
    );
};
export default Controller;*/


//원래 코드

// import { useEffect, useRef } from "react";
// import React from "react";

// const Controller = ({ count, handleSetCount }) => {
//     console.log("Controller");
//     const btnCount = useRef(0);

//     const textRef = useRef();

//     const handleOnChange = (e) => {
//       handleSetCount (Number(e.target.value));

//     const handleOnClick = () => {
//         textRef.current.value = "";
//     }
//     };
//     useEffect( () => {
//         //console.log("버튼 클릭 횟수: ", btnCount.current);
//     });
  
//     return (
//       <div>
//         <div>
//           <button onClick={() => {handleSetCount(count-1); btnCount.current++;}}>-1</button>
//           <button onClick={() => {handleSetCount(count-10); btnCount.current++;}}>-10</button>
//           <button onClick={() => {handleSetCount(count-100); btnCount.current++;}}>-100</button>
//           <button onClick={() => {handleSetCount(0); btnCount.current++;}}>0</button>
//           <button onClick={() => {handleSetCount(count+1); btnCount.current++;}}>+1</button>
//           <button onClick={() => {handleSetCount(count+10); btnCount.current++;}}>+10</button>
//           <button onClick={() => {handleSetCount(count+100); btnCount.current++;}}>+100</button>
//         </div>
//         <div>
//          입력: <input ref={textRef} type="number" onChange={handleOnChange} />
//         <button onClick={handleOnChange}>clear</button>
//         </div>
//       </div>
//     );
//   };
  
//   export default React.memo(Controller);

import { useEffect, useRef, useContext } from "react";
import React from "react";
import { projectContext } from "../App";

const Controller = () => {
    const {handleSetCount, count } = useContext(projectContext);
    console.log("Controller");
    const btnCount = useRef(0);

    const textRef = useRef();

    const handleOnChange = (e) => {
      handleSetCount (Number(e.target.value));

    const handleOnClick = () => {
        textRef.current.value = "";
    }
    };
    useEffect( () => {
        //console.log("버튼 클릭 횟수: ", btnCount.current);
    });
  
    return (
      <div>
        <div>
          <button onClick={() => {handleSetCount(count-1); btnCount.current++;}}>-1</button>
          <button onClick={() => {handleSetCount(count-10); btnCount.current++;}}>-10</button>
          <button onClick={() => {handleSetCount(count-100); btnCount.current++;}}>-100</button>
          <button onClick={() => {handleSetCount(0); btnCount.current++;}}>0</button>
          <button onClick={() => {handleSetCount(count+1); btnCount.current++;}}>+1</button>
          <button onClick={() => {handleSetCount(count+10); btnCount.current++;}}>+10</button>
          <button onClick={() => {handleSetCount(count+100); btnCount.current++;}}>+100</button>
        </div>
        <div>
         입력: <input ref={textRef} type="number" onChange={handleOnChange} />
        <button onClick={handleOnChange}>clear</button>
        </div>
      </div>
    );
  };
  
  export default React.memo(Controller);