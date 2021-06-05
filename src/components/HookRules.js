// 1. Always write it inside the components or function
// 2. Components name must be PascalCase (first letter should be uppercase)
// 3. We can directly import or we can directly write it using React.hookName
// 4. Don't  call Hooks inside loops, canditions, or nested functions

import React, { useState } from "react";

const HookRules = () => {
  const [myName, setMyName] = useState("Raihan");
  return (
    <div>
      <h1>{myName}</h1>
    </div>
  );
};

export default HookRules;
