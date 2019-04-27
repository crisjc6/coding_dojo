import { Validators, AbstractControl } from '@angular/forms';


/****************   MENSAJES    ************ */
export const mensajesValidacionLetras = {
    required: 'este campo es obligatorio',
    pattern: 'el campo solo puede tener letras',
    minlength: 'este campo no tiene la longitud minima de 3'
}

export const mensajesValidacionNumero = {
    required: 'este campo es obligatorio',
    pattern: 'el campo debe tener unicamente numeros',
}

export const mensajesValidacionDecimal = {
    required: 'este campo es obligatorio',
    pattern: 'el campo debe tener unicamente numeros y  un punto',
}

export const mensajesValidacionRuc = {
    required: 'este campo es obligatorio',
    pattern: 'el campo debe tener el siguiente formato ej. 1700000000-001',
    //cedula: 'el ruc es invalido'
}

export const mensajesValidacionCorreo= {
    required: 'este campo es obligatorio',
    pattern: 'ingrese un correo valido ej. alguien@example.com'
}
/********************   VALIDACIONES    *********************************** */
export const validacionLetras = [
    Validators.required,
    Validators.pattern(/^[A-Za-z]+$/),
    Validators.minLength(4)
];

export const validacionNumero = [
    Validators.required,
    Validators.pattern(/[0-9]+/),
]

export const validacionDecimal = [
    Validators.required,
    Validators.pattern(/[0-9.]+/),
]

export const validacionRuc = [
    Validators.required,
    Validators.pattern(/^[0-9]{10}-[0-9]{3}$/),
    //{ validator: this.validacionRUC },
]


export const validacionCorreo = [
    Validators.required,
    Validators.pattern(/^([0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/),
]

/*******************    FUNCIONES VALIDACION    *************************** */


function validacionRUC(formulario: AbstractControl): { [parametro: string]: boolean } | null {

    const ultimoDigito = 9;
    const sonNombreDiferentes = formulario.get('ruc').value !== formulario.get('nombreConfirmacion').value;
    if (sonNombreDiferentes) {

        return { 'cedula': true }
    } else {

        return { 'cedula': false }
    }

}

export function setearMensajes(valor: AbstractControl, mensajesValidacion):string[]{
    let mensajesError=[];
    const esInvalidoCampo= (valor.dirty||valor.touched)&&!valor.valid;

    if(esInvalidoCampo){
      mensajesError = Object.keys(valor.errors).map((atributo) => {
        return`${mensajesValidacion[atributo]}`
      })
    }
    return mensajesError;
  }