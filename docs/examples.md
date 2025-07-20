## Ejemplos de uso

En este documento se muestra como se usa cada endpoint

### Auth

- ``POST /auth/register``

   ![alt text](assets/auth-register.png)

- ``POST /auth/login``

   ![alt text](assets/auth-login.png)

### Products

estas rutas estan protegidas por el auth middleware, el cual requiere enviar por el header "authorization" el token que retornan los endpoints `/auth/register` o `/auth/login`. el token debe iniciar con el texto "Bearer {token}"

ejemplo de respuesta sin enviar el header autorization

   ![alt text](assets/products-no-auth.png)

- ``GET /api/products``

   ![alt text](assets/products-get-all.png)

- `GET /api/products/:id`

   ![alt text](assets/products-get-by-id.png)

- `POST /api/products/create`

   ![alt text](assets/products-create.png)

- `PUT /api/products/:id`

   ![alt text](assets/products-update.png)

- `DELETE /api/products/:id`

   ![alt text](assets/products-delete.png)