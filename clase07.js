const nacimiento = new Date(1990, 7, 12)
const hoy = new Date()
const tiempo = hoy - nacimiento
const tiempoSegundos = tiempo / 1000
const tiempoMinutos = tiempoSegundos / 60
const tiempoHoras = tiempoMinutos / 60
const proximoCumpleanos = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
const diasSemanas = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
diasSemanas[proximoCumpleanos.getDay()]
