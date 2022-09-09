import React from 'react'

export function Saludo({title, name = "Usuarioss"}) {


  return <h1>Saludo {title}</h1>;
}

export function Usuario({name, amount, points, address, greet}) {
  console.log(greet);
  const married = false;
  const user = {
    nombre: "Leonardo",
    apellido: "Garzon",
    direccion: "Cra 2#3-44",
  };

  return (
    //Nombre, apellido y ternaria
    <div>
      <hr />
      <h3>Usuario</h3>
      <p>Nombre: {user.nombre}</p>
      <p>Apellido: {user.apellido}</p>
      <p>Direccion: {user.direccion}</p>
      <p>Estado civil: {married ? "Casado" : "Soltero"}</p>
  <hr />
  <h3>Usuario 2</h3>
      <div>
      <p>Nombre: {name}</p>
      <p>Salario: ${amount}</p>
      <p>Puntos: {points[1]}</p>
  <ul>
  <li>Ciudad: {address.city}</li>
  <li>Calle: {address.street}</li>
  </ul>
      <p>Estado civil: {married ? "Casado" : "Soltero"}</p>

      </div>
    </div>
  );
}
