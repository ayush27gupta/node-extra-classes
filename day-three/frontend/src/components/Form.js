import React, { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost/api/employee/details", {
        params: {
          email: "ayush@gmail.com",
          name: "Ayush",
        },
      })
      .then((req, res) => {
        const data = req.data;
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </div>
  );
};

export default Form;
