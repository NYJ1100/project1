//원래 코드

// import { useState } from "react";
// import React from "react";

// const Viewer = ({ count }) => {
//     console.log("Viewer");
//     return (
//         <div>
//             <div>현재 카운트: </div>
//             <h1>{count}</h1>
//         </div>
//     );
// };
// export default React.memo(Viewer);


import { useState, useContext, useMemo } from "react";
import React from "react";
import { projectContext } from "../App";

const Viewer = () => {
    const { count } = useContext(projectContext);
    console.log("Viewer");
    return (
        <div>
            <div>현재 카운트: </div>
            <h1>{count}</h1>
        </div>
    );
};
export default React.memo(Viewer);