import React from "react";

const UseStateTraining = () => {
  let subjects = [
    "HTML",
    "CSS",
    "BootStrap",
    "JavSrcipt",
    "jQuery",
    "AJAX",
    "JSON",
    "React",
  ];

  let Details = { name: "Mahalakshmi", Training: "React Js" };

  let DetailsMultiple = [
    { name: "Mahalakshmi", Training: "React Js" },
    { name: "Mahalakshmi1", Training: "React Js1" },
    { name: "Mahalakshmi1", Training: "React Js1" },
    { name: "Mahalakshmi1", Training: "React Js1" },
    { name: "Mahalakshmi1", Training: "React Js1" },
    { name: "Mahalakshmi1", Training: "React Js1" },
    { name: "Mahalakshmi1", Training: "React Js1" },
  ];

  return (
    <div className="text-center mt-5 mb-5">
      <h1>
        Coursename = {Details.name} {Details.Training}
      </h1>

      <ul className="list-unstyled">
        {subjects.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

      <div className="text-center">
        {DetailsMultiple.map((Details, index) => (
          <div key={index}>
            <h1>Name = {Details.name}</h1>
            <p>Mode= {Details.Training}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseStateTraining;
