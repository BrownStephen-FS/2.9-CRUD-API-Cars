import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "../App.css";

function Car() {
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [values, setValues] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    type: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

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
      await fetch(`${API_BASE}/cars/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setValues({
            make: data.make,
            model: data.model,
            year: data.year,
            color: data.color,
            type: data.type,
          });
        });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeCar = async () => {
    try {
      await fetch(`${API_BASE}/cars/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          navigate("/", { replace: true });
        });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateCar = async () => {
    try {
      await fetch(`${API_BASE}/cars/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    updateCar();
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
      <h1>{values && `${values.year} ${values.make} ${values.model}`}</h1>
      <Link className="homeLink" to="/">Home</Link>
      <section>
        <form onSubmit={(event) => submit(event)}>
          <label>
            Make:
            <input
            className="inputBox"
              type="text"
              name="make"
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
              value={values.type}
              onChange={change}
            />
          </label>
          <div id="buttonContainer">
            <input className="carButton" type="submit" value="Submit" />
            <button className="carButton" onClick={() => removeCar()}>Remove Car</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Car;
