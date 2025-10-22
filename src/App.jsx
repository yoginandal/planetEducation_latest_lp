import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "@/components/Landing/Landing";
import Thankyou from "@/components/Landing/thankyou";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
}

export default App;
