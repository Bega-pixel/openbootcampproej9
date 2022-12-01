class Persona {
    constructor(name,age) {
            this._age = age;
            this._name = name;
            let _phone;

    }
    
    set setphone(v){
        this._phone = v;
    }

    get regphone(){
        return this._phone
    }
    datosPersona() {
        console.log(this._age + this._name + this._phone);
    }
    
}

let cliente = new Persona("Steve", 36);
cliente._phone = true;
let _credito = cliente._phone
cliente.datosPersona();

let trabajador = new Persona("Joe", 39);
trabajador._phone = true;
let _salario = trabajador._phone
trabajador.datosPersona();


