// import "./App.css";
// import { useRef, useEffect, useState } from "react";
// import Controller from "./component/Controller";
// import Viewer from "./component/Viewer";
// import Even from "./component/Even";

// function App() {
//   const [ count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const handleSetCount = (value) => {
//     setCount(value);
//   };

//   const handleChangeText = (e) => {
//     setText(e.target.value);
//   };

//   const didMountRef = useRef(false);

//   useEffect( () => {
//     if(!didMountRef.current) {
//       didMountRef.current = true;
//       return;
//     }else
//     console.log("count 업데이트!");
// });
    
//   useEffect( () => {
//     console.log("컴포넌트 마운트");
//   }, [] );

//   useEffect( () => {
//     const intervallID = setInterval( () => {
//       console.log("깜빡");
//     }, 1000);
//     return () => {
//       console.log("클린업")
//       clearInterval(intervallID);
//     };
//   });

//   return (
//   <div className="App">
//     <h1>Simple Counter</h1>
//     <section>
//       <input value={text} onChange={handleChangeText}/>
//     </section>

//     <section>
//       <Viewer count={count} />
//       {count % 2 === 0 && <Even />}
//     </section>

//     <section>
//       <Controller count={count} handleSetCount={handleSetCount} />
//     </section>
//   </div>
//   );
// }

// export default App;

// import "./App.css";
// import { useRef, useEffect, useState, useReducer } from "react";
// import Controller from "./component/Controller";
// import Viewer from "./component/Viewer";
// import Even from "./component/Even";

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET":
//       return action.data;
//     default:
//       return state;
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   const [text, setText] = useState("");

//   const handleSetCount = (value) => {
//     // setCount(value);
//     dispatch ({
//       type: "SET",
//       data: value
//     })
//   };

//   const handleChangeText = (e) => {
//     setText(e.target.value);
//   };

//   const didMountRef = useRef(false);

//   useEffect( () => {
//     if(!didMountRef.current) {
//       didMountRef.current = true;
//       return;
//     }else{}
//     //console.log("count 업데이트!");
// });
    
//   useEffect( () => {
//     //console.log("컴포넌트 마운트");
//   }, [] );

//   useEffect( () => {
//     const intervallID = setInterval( () => {
//       //console.log("깜빡");
//     }, 1000);
//     return () => {
//       //console.log("클린업")
//       clearInterval(intervallID);
//     };
//   });

//   return (
//   <div className="App">
//     <h1>Simple Counter</h1>
//     <section>
//       <input value={text} onChange={handleChangeText}/>
//     </section>

//     <section>
//       <Viewer count={count} />
//       {count % 2 === 0 && <Even />}
//     </section>

//     <section>
//       <Controller count={count} handleSetCount={handleSetCount} />
//     </section>
//   </div>
//   );
// }

// export default App;


// 원래 코드

// import "./App.css";
// import { useRef, useEffect, useState, useReducer, useCallback } from "react";
// import Controller from "./component/Controller";
// import Viewer from "./component/Viewer";
// import Even from "./component/Even";
// import React from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET":
//       return action.data;
//     default:
//       return state;
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   const [text, setText] = useState("");

//   const handleSetCount = useCallback((value) => {
//     // setCount(value);
//     dispatch ({
//       type: "SET",
//       data: value
//     });
//   },[]);

//   const handleChangeText = (e) => {
//     setText(e.target.value);
//   };

//   const didMountRef = useRef(false);

//   useEffect( () => {
//     if(!didMountRef.current) {
//       didMountRef.current = true;
//       return;
//     }else{}
//     //console.log("count 업데이트!");
// });
    
//   useEffect( () => {
//     //console.log("컴포넌트 마운트");
//   }, [] );

//   useEffect( () => {
//     const intervallID = setInterval( () => {
//       //console.log("깜빡");
//     }, 1000);
//     return () => {
//       //console.log("클린업")
//       clearInterval(intervallID);
//     };
//   });

//   return (
//   <div className="App">
//     <h1>Simple Counter</h1>
//     <section>
//       <input value={text} onChange={handleChangeText}/>
//     </section>

//     <section>
//       <Viewer count={count} />
//       {count % 2 === 0 && <Even />}
//     </section>

//     <section>
//       <Controller count={count} handleSetCount={handleSetCount} />
//     </section>
//   </div>
//   );
// }

// export default React.memo(App);

import "./App.css";
import { useRef, useEffect, useState, useReducer, useCallback } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";
import React from "react";

export const projectContext = React.createContext();

const TodoContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return action.data;
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  const [text, setText] = useState("");

  const handleSetCount = useCallback((value) => {
    // setCount(value);
    dispatch ({
      type: "SET",
      data: value
    });
  },[]);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const didMountRef = useRef(false);

  useEffect( () => {
    if(!didMountRef.current) {
      didMountRef.current = true;
      return;
    }else{}
    //console.log("count 업데이트!");
});
    
  useEffect( () => {
    //console.log("컴포넌트 마운트");
  }, [] );

  useEffect( () => {
    const intervallID = setInterval( () => {
      //console.log("깜빡");
    }, 1000);
    return () => {
      //console.log("클린업")
      clearInterval(intervallID);
    };
  });

  return (
  <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={text} onChange={handleChangeText}/>
    </section>

    <projectContext.Provider value={{handleSetCount, count}}>
    <section>
      <Viewer />
      {count % 2 === 0 && <Even />}
    </section>

    <section>
      <Controller />
    </section>
    </projectContext.Provider>
  </div>
  );
}

export default React.memo(App);
