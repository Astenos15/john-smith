import React, { useState } from "react";
import { data } from "./data";
import FullDesc from "./components/FullDesc";

const App = () => {
  const [listings, setListings] = useState(data);
  return (
    <main>
      <FullDesc listings={listings} />
    </main>
  );
};

export default App;
