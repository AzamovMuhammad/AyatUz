import React, { useState } from "react";
import EntrancePart from "./Pages/entrance";
import LanguageSelection from "./Pages/LanguageSelection";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      {!loadingComplete ? (
        <EntrancePart onComplete={() => setLoadingComplete(true)} />
      ) : (
        <LanguageSelection/>
      )}
    </div>
  );
}

export default App;
