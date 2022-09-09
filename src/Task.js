import React from "react";
import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <div className="card-border-top"></div>
      <div className="img"></div>
      <span>{ready ? "Tarea realizada" : "Tarea pendiente"}</span>
      <span>Person</span>
      <p className="job">Job Title</p>
      <button> Click me</button>
    </div>
  );
}
