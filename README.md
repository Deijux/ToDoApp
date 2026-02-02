# ToDoApp FrontEnd

Una aplicación moderna de gestión de tareas construida con **Next.js**, **React Context API** y **TypeScript**.\
Revisa el [Repositorio BackEnd](https://github.com/Deijux/ToDoAppBackend)

## 📋 Características

- ✅ Autenticación de usuarios (login y registro)
- ✅ Gestión de tareas (crear, leer, actualizar, eliminar)
- ✅ Búsqueda de tareas
- ✅ Interfaz responsiva con Tailwind CSS
- ✅ Validación de formularios

## 🛠️ Tecnologías

- **Framework**: Next.js 14+
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + PostCSS
- **Estado**: React Context API
- **Linting**: ESLint
- **Formateador**: Prettier

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Rutas y layouts de Next.js
│   ├── login/             # Página de inicio de sesión
│   ├── register/          # Página de registro
│   ├── tasks/             # Página de gestión de tareas
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── Card/
│   ├── LoginForm/
│   ├── RegisterForm/
│   ├── SearchBar/
│   ├── TaskList/
│   └── Welcome/
├── context/               # React Context (estado global)
│   ├── auth.context.tsx   # Contexto de autenticación
│   └── task.context.tsx   # Contexto de tareas
├── hooks/                 # Custom hooks
│   ├── useAuth.ts         # Hook para autenticación
│   └── useTasks.ts        # Hook para tareas
├── lib/                   # Funciones utilitarias
│   └── api.ts             # Cliente API
├── services/              # Servicios de lógica de negocio
│   ├── auth.service.ts    # Servicio de autenticación
│   └── tasks.service.ts   # Servicio de tareas
├── types/                 # Definiciones de tipos TypeScript
│   ├── task.ts
│   └── user.ts
├── utils/                 # Utilidades
│   └── error.handler.ts   # Manejador de errores
└── middleware.ts          # Middleware de Next.js
```

**Desarrollado con ❤️ usando Next.js y React**
