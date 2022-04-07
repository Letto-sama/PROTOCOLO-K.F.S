import app from './app'
import './database'
import { PORT } from './config'

app.listen(PORT)
console.log('El protocolo K.F.S. se está ejecutando en el puerto', PORT)