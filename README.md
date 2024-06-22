<div align="center">
<h1>
    To Do App
</h1>

<p>
To Do App es un software para la gestion de tus tareas diarias, puedes crear, editar el estado, y eliminar tus tareas!
</p>

![React Badge](https://img.shields.io/badge/React-3a88f5?logo=react&logoColor=fff&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-2d79c7?logo=TypeScript&logoColor=fff&style=flat)
![Tailwind Badge](https://img.shields.io/badge/Tailwind-3ebff8?logo=Tailwindcss&logoColor=fff&style=flat)

</div>

## 🛠️ Stack

- [**React**](https://es.react.dev//) - Biblioteca para interfaces de usuario web y nativas.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript con sintaxis de tipado.
- [**Tailwind CSS**](https://tailwindcss.com/) - Framework ágil de CSS.

## 🚀 Getting Started

1. Haz [Fork](https://github.com/Deijux/ToDoApp/fork) o clona este repositorio.

   ```bash
   git clone https://github.com/Deijux/ToDoApp.git
   ```

2. Instala las dependencias:

   - Usa [npm](https://www.npmjs.com/) para instalar y manejar las dependencias.

   ```bash
   # instala las depencias mediante npm
   npm install
   ```

3. Corre el servidor de desarrollo:

   - Este paso es opcional, ya que este código integra un script que inicia el servidor de desarrollo cuando abren el proyecto en Visual Studio Code.

   ```bash
   # Inicia el servidor de desarrollo con npm
   npm run dev
   ```

4. Abre [**http://localhost:3000**](http://localhost:3000/) en tu navegador para ver los resultados 🚀

5. (Opcional) Si quieres usar el sevidor local solo tienes que seguir los siguientes pasos:
   1. Inicie el servidor local con el siguiente comando:
      ```bash
      npm run database
      ```
   2. Diríjase a la ruta src/app/service/ToDo-service.ts/ y en la línea 4 reemplaza "apiWeb" por "localhost"

- La principal ventaja de la base de datos local es la persistencia de datos, cualquier modificación en las tareas se guardará de forma local en el equipo.
