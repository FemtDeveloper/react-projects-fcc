import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/tours/Loading";
import Tours from "./components/tours/Tours";
// import List from "./components/List";
// import data from "./data";

function App() {
  // const [people, setPeople] = useState(data);
  // console.log(people);
  const url = "https://course-api.com/react-tours-project";
  const [isLoading, setIsLoading] = useState(true);
  const [tour, setTour] = useState([]);
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setIsLoading(false);
      setTour(tours);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  const removeTour = (id) => {
    const newTour = tour.filter((tur) => tur.id != id);
    setTour(newTour);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <main>
      {isLoading ? <Loading /> : <Tours tours={tour} removeTour={removeTour} />}
      {tour.length === 0 && <button onClick={fetchTours}>Refresh</button>}
    </main>
  );
}

export default App;
