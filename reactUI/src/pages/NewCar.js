import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Dashboard() {
  const [cars, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    type: "",
  });

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? `http://localhost:4000/api/v1`
      : process.env.REACT_APP_BASE_URL;

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getCars();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const getCars = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/cars`)
        .then((res) => res.json())
        .then((data) => {
          setStudents(data);
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const createCar = async () => {
    try {
      await fetch(`${API_BASE}/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(() => getCars());
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    createCar();
  };

  const change = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <h1>Add a New Car</h1>
      <Link className="homeLink" to="/">Home</Link>

      <section>
        <form onSubmit={(event) => submit(event)}>
          <label>
            Make:
            <input
              className="inputBox"
              type="text"
              name="make"
              placeholder="Ford"
              value={values.make}
              onChange={change}
            />
          </label>
          <label>
            Model:
            <input
              className="inputBox"
              type="text"
              name="model"
              placeholder="F150"
              value={values.model}
              onChange={change}
            />
          </label>
          <label>
            Year:
            <input
              className="inputBox"
              type="text"
              name="year"
              placeholder="2022"
              value={values.year}
              onChange={change}
            />
          </label>
          <label>
            Color:
            <input
              className="inputBox"
              type="text"
              name="color"
              placeholder="Red"
              value={values.color}
              onChange={change}
            />
          </label>
          <label>
            Type:
            <input
              className="inputBox"
              type="text"
              name="type"
              placeholder="Truck"
              value={values.type}
              onChange={change}
            />
          </label>
          <input id="addSubmit" type="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
}

export default Dashboard;
