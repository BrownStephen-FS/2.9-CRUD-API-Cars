import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  
  const API_BASE =
    process.env.NODE_ENV === "development"
      ? `http://localhost:4000/api/v1`
      : process.env.REACT_APP_BASE_URL;

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getCar();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const getCar = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/cars`)
        .then((res) => res.json())
        .then((data) => {
          setCars({ data });
        });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory of Cars:</h1>
        <Link to="/newCar">Add</Link>
      </header>
      <ul>
        {cars?.map((car) => (
          <li key={car._id}>
            <Link to={`/car/${car._id}`}>{car.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
