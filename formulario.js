// SELECCIONO LOS ELEMENTOS Y LOS GUARDO EN VARIABLES

const FORM = document.getElementById('formulario')
const NOMBRE = document.getElementById('first-name')
const APELLIDO = document.getElementById('last-name')
const MAIL = document.getElementById('email')
const PASSWORD = document.getElementById('password')
const PASSWORD2 = document.getElementById('password2')
const MAIL_FORMAT = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const ERRORES = ['error']

// ESCUCHO EL SUBMIT DEL FORM, CHECKEO INPUTS
// SI HAY ALGUN ERROR (CONTENIDO EN ARRAY ERRORES), PREVENGO ENVIAR 
// LAS FUNCIONES DE ERROR AGREGAN ELEMENTOS AL ARRAY ERRORES
// LAS FUNCIONES DE OK LIMPIAN EL ARRAY ERRORES

FORM.addEventListener('submit', (e) => {
  checkInputs()
  if (ERRORES.length > 0) {
    e.preventDefault();
  }
})

// VALIDO INPUTS VACIOS, FORMATO MAIL, PASSWORD COINCIDEN,ETC..
// SI ESTAN MAL, FUNCION: SET ERROR
// SI ESTAN BIEN, FUNCION: SET OK

function checkInputs() {
  while (ERRORES.length > 0) {
    ERRORES.shift()
  }

  if (NOMBRE.value.trim() === '') {
    setError(NOMBRE, 'First Name cannot be empty')
    } else {
    setOk(NOMBRE)
  }

  if (APELLIDO.value.trim() === '') {
    setError(APELLIDO, 'Last Name cannot be empty')
  } else {
    setOk(APELLIDO)
  }

  if (MAIL.value.trim() === '') {
    setError(MAIL, 'Email Address cannot be empty')
  } else if (mailInvalido(MAIL.value)){
    setError(MAIL, 'Invalid Email Address')
  } else {
    setOk(MAIL)
  }

  if (PASSWORD.value.trim() === '') {
    setError(PASSWORD, 'Password cannot be empty')
  } else {
    setOk(PASSWORD)
  }
  if (PASSWORD2.value.trim() === '') {
    setError(PASSWORD2, 'Password cannot be empty')
  } else if (PASSWORD2.value !== PASSWORD.value) {
    setError(PASSWORD2, 'Passwords does not match')
  } else {
    setOk(PASSWORD2)
  }


// FUNCION PARA SETEAR EL ERROR
// SELECCIONA AL FIELD Y LE AGREGA CLASE ERROR
// LA CLASE ERROR MUESTRA BORDE ROJO + ICONO ALERTA
// AGREGA UN MENSAJE EN EL SPAN ALERT (ERROR-LABEL)

function setError(input, message) {
  const FIELD = input.parentElement
  const ALERT = FIELD.querySelector('.error-label')
  ALERT.innerText = message
  FIELD.className = 'form__field error'
  ERRORES.push('error')
}

// FUNCION PARA SETEAR EL OK
// SELECCIONA AL FIELD Y LE AGREGA CLASE OK
// LA CLASE OK MUESTRA BORDE VERDE (+ ICONO OK SI HUBIERA)
// ELIMINA (AGREGA EMPTY) UN MENSAJE EN EL SPAN ALERT (ERROR-LABEL)

function setOk(input) {
  const FIELD = input.parentElement
  const ALERT = FIELD.querySelector('.error-label')
  FIELD.className = 'form__field ok'
  ALERT.innerText = ""
  }
}

// FUNCION PARA VALIDAR MAIL VALIDO
// VERIFICA SI TIENE FORMATO PERMITIDO Y DEVUELVE TRUE SI NO MATCHEA

function mailInvalido(mail) {
  if (mail.match(MAIL_FORMAT)) {
    return false
  } else {
    return true
  }
}