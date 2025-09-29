import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // fake delay 2s
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Preloader /> : <Home />}</>;
}

export default App;
