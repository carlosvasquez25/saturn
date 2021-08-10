import dotenv = require('dotenv')
import app from './app' // Obtencion del script del app
dotenv.config() // Configuracion del archivo env

// Obtener la variable de entorno con el puerto
const PORT: number = parseInt(process.env.PORT as string)

function main() {
  app.listen(PORT, () => {
    console.log(`SaturnServer on port: ${PORT}`)
  })
}

main()