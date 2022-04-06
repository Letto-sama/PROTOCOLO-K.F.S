import app from './app'
import './database'
import { PORT } from './config'

app.listen(3000)
console.log('El protocolo K.F.S. se está ejecutando en el puerto', 3000)