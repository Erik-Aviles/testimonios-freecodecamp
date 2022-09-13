import React from 'react';
import '../styles/Testimonio.css'

export function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../asset/imagen/testimonio-${props.imagen}.png`)}
        alt={props.imagen}
      />
      <div className='content-text-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.name}</strong> en {props.country}
          </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
          </p>
        <p className='texto-testimonio'>
          "{props.testimonio}".
          </p>
      </div>
    </div>
  );
}