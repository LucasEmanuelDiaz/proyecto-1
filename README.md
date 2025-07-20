# proyecto-1

ejecutar el proyecto:

```bash
yarn start
# o
yarn dev
```

genere el jwt secret key con este script:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

consegui esta info [aqui](https://dev.to/tkirwa/generate-a-random-jwt-secret-key-39j4)
