<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Usar ChatGTP con NestJS

1. Clonar el proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Ingresar la Api Key de OPEN AI en la variable OPENAI_API_KEY


# Probar el Chat
Escribirle a Chat GPT con el EndPoint ```http://localhost:3000/api/v1/chat-gpt``` con la siguiente carga JSON:
```
{
  "prompt": "list the first 15 prime numbers"
}
```

Eso generará una respuesta usando ChatGPT y la devolverá en el cuerpo de la respuesta:
```
{
  "response": "2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47"
}
```