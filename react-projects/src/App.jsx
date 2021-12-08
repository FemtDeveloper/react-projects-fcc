import { useState, useEffect } from "react";
import "./App.css";
import ProjectReview from "./components/reviews/ProjectReview";
import Loading from "./components/tours/Loading";
import Tours from "./components/tours/Tours";

function App() {
  return (
    <div>
      <ProjectReview />
    </div>
  );
}

export default App;
