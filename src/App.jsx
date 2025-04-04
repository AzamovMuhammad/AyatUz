import React, { useState } from "react";
import EntrancePart from "./Pages/entrance";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      {!loadingComplete ? (
        <EntrancePart onComplete={() => setLoadingComplete(true)} />
      ) : (
        <h1>Keyingi Sahifa</h1>
      )}
    </div>
  );
}

export default App;
