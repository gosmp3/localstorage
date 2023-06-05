import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  campo1Value!: string;
  campo2Value!: string;

  datos!: any[];

  constructor() {
    // Recupera los datos del LocalStorage al inicializar el componente
    const storedData = localStorage.getItem('datos');

    // Si hay datos almacenados, conviértelos de nuevo a un objeto o matriz JSON
    this.datos = storedData ? JSON.parse(storedData) : [];
  }

  submitForm() {
    // Obtén los valores de los campos
  const nuevoDato = {
    campo1: this.campo1Value,
    campo2: this.campo2Value
  };

  // Agrega el nuevo dato a la variable datos
  this.datos.push(nuevoDato);

  // Guarda los datos actualizados en el LocalStorage
  localStorage.setItem('datos', JSON.stringify(this.datos));

  // Limpia los campos del formulario
  this.campo1Value = '';
  this.campo2Value = '';
  }
}
