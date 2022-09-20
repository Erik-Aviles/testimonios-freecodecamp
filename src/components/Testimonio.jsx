import React from 'react';
import '../styles/Testimonio.css';

export class Testimonio extends React.Component {
  render () {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../asset/imagen/testimonio-${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.imagen}`}
        />
        <div className='content-text-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{this.props.name}</strong> en {this.props.country}
            </p>
          <p className='cargo-testimonio'>
            {this.props.cargo} en <strong>{this.props.empresa}</strong>
            </p>
          <p className='texto-testimonio'>
            "{this.props.testimonio}".
            </p>
        </div>
      </div>
    );
  }
}

