# Apunte de React 🏆

## Índice 📚

1. [Introducción a React](#introducción-a-react)
2. [Preparando el Entorno (Node, NPM, Vite)](#preparando-el-entorno-node-npm-vite)
3. [Creando una App React con Vite](#creando-una-app-react-con-vite)
4. [JSX y Componentes](#jsx-y-componentes)
   - [Sintaxis y Uso](#41-jsx-sintaxis-y-uso)
   - [Componentes Funcionales vs Clases](#42-componentes-funcionales-versus-clases)
   - [Props y Comunicación entre Componentes](#43-props-y-comunicación-entre-componentes)
5. [Estado y Ciclo de Vida con Hooks](#estado-y-ciclo-de-vida-con-hooks)
   - [useState: Estado local](#51-usestate-estado-local)
   - [Manejo de Eventos y Actualización del Estado](#52-manejo-de-eventos-y-actualización-del-estado)
   - [useEffect: Efectos Secundarios](#53-useeffect-efectos-secundarios)
6. [Otros Hooks Útiles](#otros-hooks-útiles)
   - [useContext y la Context API](#61-usecontext-y-la-context-api)
   - [useRef: Referencias y Manipulación del DOM](#62-useref-referencias-y-manipulación-del-dom)
   - [useReducer: Manejo de Estado Complejo](#63-usereducer-manejo-de-estado-complejo)
   - [useMemo y useCallback: Optimización](#64-usememo-y-usecallback-optimización)
7. [React Router: Navegación en SPA](#react-router-navegación-en-spa)
   - [Configuración de React Router](#71-configuración-de-react-router)
   - [Definición de Rutas y Links](#72-definición-de-rutas-y-links)
   - [Parámetros de URL y Navegación Programática](#73-parámetros-de-url-y-navegación-programática)
8. [Buenas Prácticas y Tips Finales](#buenas-prácticas-y-tips-finales)
   - [Organización del Código y Proyecto](#81-organización-del-código-y-proyecto)
   - [Herramientas de Depuración](#82-herramientas-de-depuración)
   - [Próximos Pasos en el Ecosistema React](#83-próximos-pasos-en-el-ecosistema-react)

---

## Introducción a React

React es una biblioteca JavaScript para crear interfaces de usuario interactivas mediante componentes reutilizables. Permite construir aplicaciones web de forma declarativa y eficiente.

**Ventajas principales:**
- Sintaxis JSX simple: Escribir HTML dentro de JS.
- Componentes reutilizables: Encapsulas lógica y UI.
- Virtual DOM optimizado: Actualizaciones rápidas y eficientes.
- Comunidad y ecosistema robusto.

> **Analogía:** Piensa en React como Legoland: construyes tu app con piezas (componentes) reutilizables.

---

## Preparando el Entorno (Node, NPM, Vite)

**Herramientas recomendadas:**
- Node.js (v18+ o v20 LTS)
- NPM (gestor de paquetes)
- Editor de código: VS Code
- Vite: Herramienta moderna para crear proyectos React

**¿Por qué Vite?**
- Arranque rápido
- Hot reload instantáneo
- Reemplazó a Create React App como estándar

---

## Creando una App React con Vite

**Pasos para crear una app React moderna con Vite:**

1. Crea el proyecto con Vite usando el template de React:
   ```bash
   npm create vite@latest my-react-app -- --template react
   ```
2. Instala las dependencias del proyecto:
   ```bash
   cd my-react-app
   npm install
   ```
3. Inicia el servidor de desarrollo para ver tu app en el navegador:
   ```bash
   npm run dev
   ```

**Estructura inicial:**
- `index.html`: Contiene el div raíz donde se monta la app.
- `src/main.jsx`: Archivo principal que renderiza el componente `<App />`.
- `src/App.jsx`: Componente principal de la aplicación.

---

## JSX y Componentes

### 4.1 JSX: Sintaxis y Uso

**JSX permite escribir HTML dentro de JavaScript.**  
El siguiente ejemplo crea un elemento JSX que muestra un título:

```jsx
const elemento = <h1>Hola Mundo</h1>;
```

**Características clave de JSX:**
- Cada componente debe retornar un solo elemento padre.
- Puedes usar expresiones JS dentro de `{ }`.
- Algunos atributos cambian de nombre, por ejemplo `className` en vez de `class`.

**Ejemplo de componente funcional que recibe props:**
```jsx
function Saludo(props) {
  // Muestra un saludo personalizado usando la prop 'nombre'
  return <h2>¡Hola, {props.nombre}! 😃</h2>;
}
```

---

### 4.2 Componentes Funcionales (versus Clases)

**Componente funcional:**  
Una función que retorna JSX. Es la forma moderna y recomendada.

```jsx
function Bienvenida() {
  // Retorna un mensaje de bienvenida
  return <div>Bienvenidos al curso de React 🚀</div>;
}
```

**Componente de clase (legado):**  
Antes se usaban clases, pero hoy casi todo se hace con funciones y hooks.

```jsx
class App extends React.Component {
  render() {
    // Retorna un div con texto
    return <div>Hola</div>;
  }
}
```
> Hoy se usan casi exclusivamente componentes funcionales + hooks.

---

### 4.3 Props y Comunicación entre Componentes

**Props:**  
Son los parámetros que recibe un componente. Son de solo lectura.

```jsx
function TarjetaProducto(props) {
  // Muestra el nombre y precio de un producto usando props
  return (
    <div className="tarjeta">
      <h3>{props.nombre}</h3>
      <p>Precio: ${props.precio}</p>
    </div>
  );
}
```

**Prop especial `children`:**  
Permite pasar contenido entre las etiquetas del componente.

```jsx
function Caja(props) {
  // Renderiza cualquier contenido pasado como children
  return <div>{props.children}</div>;
}
```

**Comunicación hijo → padre:**  
El hijo puede llamar una función recibida por props para avisar al padre.

```jsx
function Lista({ onElementoSeleccionado }) {
  // Llama a la función del padre cuando se hace click
  return <li onClick={onElementoSeleccionado}>Elemento</li>;
}
```

---

## Estado y Ciclo de Vida con Hooks

### 5.1 useState: Estado local

**useState permite crear y actualizar variables de estado en componentes funcionales.**

```jsx
import { useState } from 'react';

function Contador() {
  // 'contador' es el valor actual, 'setContador' lo actualiza
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho click {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}
```

---

### 5.2 Manejo de Eventos y Actualización del Estado

**Ejemplo de input controlado:**  
El valor del input está sincronizado con el estado del componente.

```jsx
function NombreUsuario() {
  const [nombre, setNombre] = useState("");

  // Actualiza el estado 'nombre' cada vez que el usuario escribe
  const manejarCambio = (e) => setNombre(e.target.value);

  return (
    <div>
      <input type="text" value={nombre} onChange={manejarCambio} />
      <p>Hola, {nombre}</p>
    </div>
  );
}
```

---

### 5.3 useEffect: Efectos Secundarios

**useEffect ejecuta código cuando el componente se monta o cambia el estado.**

```jsx
import { useEffect } from 'react';

// Este efecto se ejecuta cada vez que cambia 'contador'
useEffect(() => {
  console.log("El componente se renderizó o cambió el estado X");
}, [contador]);
```

**Cleanup:**  
Puedes limpiar recursos (como timers) cuando el componente se desmonta.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    setSegundos(s => s + 1);
  }, 1000);
  // Limpia el timer al desmontar el componente
  return () => clearInterval(timer);
}, []);
```

---

## Otros Hooks Útiles

### 6.1 useContext y la Context API

**Context permite compartir datos globales entre componentes sin pasar props manualmente.**

```jsx
import { createContext } from 'react';
// Crea un contexto para el usuario
const UsuarioContext = createContext(null);
```

**Provider:**  
Envuelve tu app para que los componentes puedan acceder al contexto.

```jsx
<UsuarioContext.Provider value={usuario}>
  <App />
</UsuarioContext.Provider>
```

**Consumir contexto:**  
Obtén el valor del contexto en cualquier componente.

```jsx
import { useContext } from 'react';
// Accede al usuario desde el contexto
const usuario = useContext(UsuarioContext);
```

---

### 6.2 useRef: Referencias y Manipulación del DOM

**useRef permite acceder directamente a elementos del DOM.**

```jsx
function Buscar() {
  const inputRef = useRef();

  // Enfoca el input al montar el componente
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

---

### 6.3 useReducer: Manejo de Estado Complejo

**useReducer es útil para manejar estados complejos con múltiples acciones.**

```jsx
const initialState = { count: 0 };

// Define cómo cambia el estado según la acción recibida
function reducer(state, action) {
  switch(action.type) {
    case 'mas':
      return { count: state.count + 1 };
    case 'menos':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Usa el reducer en el componente
const [state, dispatch] = useReducer(reducer, initialState);
```

---

### 6.4 useMemo y useCallback: Optimización

**useMemo memoriza el resultado de una función costosa para evitar cálculos innecesarios.**

```jsx
const resultado = useMemo(() => calcularAlgoGrande(datos), [datos]);
```

**useCallback memoriza una función para que no se vuelva a crear en cada render.**

```jsx
const handleClick = useCallback(() => { /* ... */ }, [props.x]);
```

---

## React Router: Navegación en SPA

### 7.1 Configuración de React Router

**Instala React Router para manejar rutas en tu app:**
```bash
npm install react-router-dom
```

**Envuelve tu app con BrowserRouter para habilitar la navegación:**
```jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

### 7.2 Definición de Rutas y Links

**Define las rutas y los enlaces de navegación en tu app:**

```jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  // Muestra un menú y renderiza el componente según la ruta
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
```

---

### 7.3 Parámetros de URL y Navegación Programática

**useParams permite leer parámetros de la URL.**

```jsx
import { useParams } from 'react-router-dom';

function PerfilUsuario() {
  // Obtiene el parámetro 'id' de la URL
  const { id } = useParams();
  return <h2>Perfil del usuario {id}</h2>;
}
```

**useNavigate permite cambiar de ruta desde código.**

```jsx
import { useNavigate } from 'react-router-dom';
// Obtiene la función para navegar
const navigate = useNavigate();
// Navega a '/dashboard'
navigate('/dashboard');
```

---

## Buenas Prácticas y Tips Finales

### 8.1 Organización del Código y Proyecto

- Organiza componentes en carpetas (`components/`, `pages/`, etc.)
- Un componente por archivo
- Nombres claros y descriptivos
- Usa CSS Modules o estilos por componente
- Usa `key` única en listas

---

### 8.2 Herramientas de Depuración

- **React Developer Tools**: Extensión para inspeccionar componentes
- **Console.log y breakpoints**
- **Linting**: ESLint para detectar errores

---

### 8.3 Próximos Pasos en el Ecosistema React

- **Next.js**: SSR y sitios estáticos
- **Redux / Zustand**: Gestión global de estado
- **React Query**: Fetching avanzado de datos
- **Testing**: Jest, React Testing Library, Cypress
- **TypeScript**: Tipado estático
- **Optimización**: Code splitting, memo, error boundaries
- **React Native**: Apps móviles multiplataforma

---
