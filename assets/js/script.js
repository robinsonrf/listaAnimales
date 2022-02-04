class Propietario{
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    };

    get getNombrePropietario(){
        return this._nombre;
    }

    get getDireccion(){
        return this._direccion;
    }

    get getTelefono(){
        return this._telefono;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el numero telefonico de contacto: ${this._telefono}`
    };
};

class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
    super (nombre, direccion, telefono);
    this._tipo = tipo;
    };

    get tipo(){
        return `El tipo de animal es un: <b>${this._tipo}</b>`
    };
};

//document.querySelector('#resultado ul');
class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    };

    get getNombreMascota(){
        return this._nombreMascota;
    }

    set setNombreMascota(nuevoNombre){
        this._nombreMascota = nuevoNombre;
    }

    get getEnfermedad(){
        return this._enfermedad
    }

    set setEnfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
    }

};

const capturando = () =>{
let propietario = document.getElementById('propietario').value;
let telefono = document.getElementById('telefono').value;
let direccion = document.getElementById('direccion').value;
let nombreMascota = document.getElementById('nombreMascota').value;
let tipoMascota = document.getElementById('tipo').value;
let enfermedadMascota = document.getElementById('enfermedad').value;
let mascota;
if(tipoMascota == "perro"){
    let perro = new Mascota ( propietario, direccion, telefono, tipo.value, nombreMascota, enfermedadMascota);
    mascota = perro;
}
else if (tipoMascota == "gato"){
    let gato = new Mascota ( propietario, direccion, telefono, tipo.value, nombreMascota, enfermedadMascota);
    mascota = gato;
}
else {
    let conejo = new Mascota ( propietario, direccion, telefono, tipo.value, nombreMascota, enfermedadMascota);
    mascota = conejo;
}
return mascota;

}

const agregar = document.querySelector('form');


const observando = (e) =>{
    e.preventDefault();
    const mascotaData = capturando();
    const nombreMascota = mascotaData.getNombreMascota;
    const enfermedadMascota = mascotaData.getEnfermedad;
    const resultado = document.querySelector('#resultado ul');
    const lista1 = document.createElement('li');
    const lista2 = document.createElement('li');
    if (mascotaData.getNombrePropietario !=="" && mascotaData.getTelefono !=="" && mascotaData.getDireccion !=="" && mascotaData.getEnfermedad !=="" && mascotaData.getNombreMascota !==""){
    resultado.innerHTML = "";
    resultado.innerHTML = "";
    lista1.innerHTML =  mascotaData.datosPropietario();
    lista2.innerHTML =  `${mascotaData.tipo}, mientras que el nombre de la mascota es: <b>${nombreMascota}</b>, y la enfermedad es: <b>${enfermedadMascota}</b>`;
    resultado.appendChild(lista1);
    resultado.appendChild(lista2);

    agregar.reset();
    }

    else{
        alert("Campos incompletos")
        resultado.innerHTML = "";
    }

    
};

agregar.addEventListener('submit', observando);



