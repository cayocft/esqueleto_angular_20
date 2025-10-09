import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  //Definimos el formulario reactivo
  usuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email])
  });


  enviar() {
    if (this.usuarioForm.valid) {
      console.log('Datos enviados:', this.usuarioForm.value);
      alert('Formulario enviado con éxito');
    } else {
      alert('Por favor, completa todos los campos correctamente');
    }
  }

}


