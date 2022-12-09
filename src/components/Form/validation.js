const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/m

export default function validation(userData){
    var errors = {};
    if(!userData.username) errors.username = 'Debe ingresar un valor';
    if(!regexEmail.test(userData.username)) errors.username = 'Debe ingresar un email'
    if(userData.username.length > 35) errors.username = 'El campo no puede tener mas de 35 caracteres'
    if(!regexPassword.test(userData.password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos uno debe ser un numero'
    return errors
}