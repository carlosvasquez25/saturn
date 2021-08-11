import './config'
import app from './app' // Obtencion del script del app

// Obtener la variable de entorno con el puerto
const PORT: number = parseInt(process.env.PORT as string)

function main() {
  app.listen(PORT, () => {
    console.log(`SaturnServer on port: ${PORT}`)
  })
}

main()