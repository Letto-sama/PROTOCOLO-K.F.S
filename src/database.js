import { connect } from 'mongoose'
import { MONGODB_URI } from './config'


(async () => {
    try {
        const db = await connect(MONGODB_URI)
        console.log("La base de datos esta conectada a", db.connection.name)
    } catch (error) {
        console.log("Ocurrió un error")
    }
})() 