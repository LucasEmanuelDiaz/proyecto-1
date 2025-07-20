# proyecto-1

Proyecto final para el curso de desarrollo backend con nodejs y express

## Ejecutar el proyecto

Para ejecutar el proyecto puedes ejecutar cualquiera de estos 2 comandos:

```bash
yarn start
# o
yarn dev
```

## Variables de entorno:

### Variables generales
- **PORT:** puerto que escuchara nuestro backend
- **API_URL:** url base para los endpoints
- **API_AUTH_URL:** url base para los endpoints de autorizacion

### Variables de autenticación
- **JWT_EXPIRES_IN:** tiempo de validez del token
- **JWT_SECRET:** clave secreta para decodificar el token jwt
- **BCRYPT_SALT_ROUNDS:** ruido generado en cada contraseña para evitar hacks de fuerza bruta

# Firebase configuration
- **FIREBASE_API_KEY:** variable necesaria para conexion con firebase
- **FIREBASE_AUTH_DOMAIN:** variable necesaria para conexion con firebase
- **FIREBASE_PROJECT_ID:** variable necesaria para conexion con firebase
- **FIREBASE_STORAGE_BUCKET:** variable necesaria para conexion con firebase
- **FIREBASE_MESSAGING_SENDER_ID:** variable necesaria para conexion con firebase
- **FIREBASE_APP_ID:** variable necesaria para conexion con firebase
- **FIREBASE_MEASUREMENT_ID:** variable necesaria para conexion con firebase

## Ejemplos de uso

documentacion con ejemplos de uso: [examples.md](./docs/examples.md) 