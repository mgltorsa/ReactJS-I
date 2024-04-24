# Creando Aplicaciones Interactivas con ReactJS

## Resumen
En este codelab, aprenderás los conceptos fundamentales de ReactJS, incluyendo componentes, ciclo de vida de componentes y el uso de hooks para la gestión del estado. Al final, habrás construido una pequeña aplicación web interactiva utilizando estos conocimientos.

## Objetivos
- Comprender los conceptos de componentes en ReactJS.
- Explorar el ciclo de vida de los componentes.
- Utilizar hooks para la gestión de estado en una aplicación React.

## Requisitos previos
- Conocimientos básicos de HTML, CSS y JavaScript.
- Un editor de código instalado en tu máquina.

## Configuración inicial

1. Abre tu terminal y crea un nuevo proyecto de React usando el siguiente comando:
```npm create vite@latest my-react-app -- --template react```


2. Navega a la carpeta de tu proyecto e inicia el servidor de desarrollo con:

```
cd my-react-app
npm run dev
```

3. Abre tu navegador en `http://localhost:$PORT` para ver tu aplicación en desarrollo. ```buscar por $PORT in la consola ```

## Paso 1: Componentes en React
En React, los componentes son bloques de construcción fundamentales. Vamos a comenzar creando nuestro primer componente funcional.

**Tarea:**
1. Crea un nuevo archivo llamado `MiComponente.js` dentro de la carpeta `src`.
2. Define un componente funcional básico que devuelva un elemento JSX, por ejemplo, un `<div>` con un mensaje dentro.
3. Importa y utiliza este componente en tu archivo `App.js`.

<details>
<summary>Solución</summary>

```javascript
// MiComponente.js
import React from 'react';

const MiComponente = () => {
 return <div>Hola, soy un componente React.</div>;
};

export default MiComponente;

// App.js
import React from 'react';
import MiComponente from './MiComponente';

function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación React</h1>
      <MiComponente />
    </div>
  );
}

export default App;
```
</details>

## Paso 2: Ciclo de Vida de Componentes
Los componentes en React pasan por diferentes fases durante su vida útil. Aprenderemos a utilizar algunos de los métodos del ciclo de vida.

Tarea:

Agrega un componente de clase llamado CicloDeVidaComponente que implemente los métodos componentDidMount, componentDidUpdate y componentWillUnmount. Dentro de cada método, imprime un mensaje en la consola para demostrar cuándo se ejecuta cada uno. Observa la consola mientras interactúas con tu aplicación para ver el ciclo de vida en acción.
<details>
<summary>Solución</summary>

```javascript
// CicloDeVidaComponente.js
import React, { Component } from 'react';

class CicloDeVidaComponente extends Component {
  componentDidMount() {
    console.log('El componente se ha montado.');
  }

  componentDidUpdate() {
    console.log('El componente se ha actualizado.');
  }

  componentWillUnmount() {
    console.log('El componente se va a desmontar.');
  }

  render() {
    return <div>Componente con ciclo de vida.</div>;
  }
}

export default CicloDeVidaComponente;

// App.js
import React from 'react';
import CicloDeVidaComponente from './CicloDeVidaComponente';

function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación React</h1>
      <CicloDeVidaComponente />
    </div>
  );
}

export default App;

```
</details>


## Paso 3: Uso de Hooks para la Gestión de Estado
Los hooks en React son una forma moderna de trabajar con el estado y los efectos en los componentes funcionales.

Tarea:

Crea un nuevo componente funcional llamado Contador que utilice el hook useState para gestionar un contador.
Implementa botones que incrementen y decrementen el valor del contador al hacer clic.
Muestra el valor actual del contador en tu componente.

<details>
<summary>Solución</summary>

```javascript
// Contador.js
import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
};

export default Contador;

// App.js
import React from 'react';
import Contador from './Contador';

function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación React</h1>
      <Contador />
    </div>
  );
}

export default App;

```
</details>

## Paso 4: Utilizando Props para Pasar Datos entre Componentes
En ReactJS, las props son una forma de pasar datos de un componente padre a un componente hijo. Aprenderemos cómo utilizar props para hacer que nuestros componentes sean más dinámicos y reutilizables al pasarles información necesaria.

### Diferencia entre Props Destructurados y no Destructurados
Cuando se pasan props a un componente en React, se pueden utilizar de dos maneras: destructuradas y no destructuradas. Veamos la diferencia entre ambas:



#### Props no Destructuradas
En el caso de no destructurar las props, necesitamos referenciar las propiedades directamente a través del objeto props. Esto puede ser útil si queremos mantener la claridad sobre qué props se están utilizando en el componente.

**Ejemplo:**
```javascript
// Encabezado.js
import React from 'react';

const Encabezado = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default Encabezado;
```

#### Props Destructuradas
Al utilizar props destructuradas, extraemos directamente las propiedades que necesitamos del objeto props. Esto nos permite utilizar esas propiedades directamente en el componente sin necesidad de referenciar `props.propiedad`.

**Ejemplo:**
```javascript
// Encabezado.js
import React from 'react';

const Encabezado = ({ titulo, descripcion }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </div>
  );
};

export default Encabezado;
```

**Tarea:**
1. Modifica el componente `Encabezado` para que acepte props como `titulo` y `descripcion`.
2. Pasa estos props al utilizar el componente `Encabezado` en tu componente principal `App`.
3. Experimenta cambiando los valores de los props para ver cómo afectan la visualización del componente.

<details>
  <summary>Solución</summary>
  
```javascript
// Encabezado.js
import React from 'react';

const Encabezado = ({ titulo, descripcion }) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    );
};

export default Encabezado;

// App.js
import React from 'react';
import Encabezado from './Encabezado';
import Cuerpo from './Cuerpo';

function App() {
    return (
        <div className="App">
            <Encabezado titulo="Mi Aplicación React" descripcion="Una aplicación increíble construida con ReactJS." />
            <Cuerpo />
        </div>
    );
}

export default App;
```
</details>

## Paso 5: Construir Interfaces Compuestas con Componentes
En ReactJS, una de las ventajas clave es la capacidad de construir interfaces compuestas, donde los componentes más grandes se construyen a partir de componentes más pequeños y reutilizables. Aprenderemos cómo construir y utilizar interfaces compuestas en nuestra aplicación.

**Tarea:**
1. Crea un nuevo componente llamado `Encabezado` que muestre un encabezado con un título y una descripción.
2. Crea otro componente llamado `Cuerpo` que muestre el cuerpo principal de la aplicación con contenido relevante.
3. Utiliza estos componentes `Encabezado` y `Cuerpo` en tu componente principal `App` para construir una interfaz compuesta.


<details>
<summary>Solución</summary>

```javascript
// Encabezado.js
import React from 'react';

const Encabezado = ({ titulo, descripcion }) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    );
};

export default Encabezado;

// Cuerpo.js
import React from 'react';

const Cuerpo = () => {
  return (
    <div>
      <p>Contenido principal de la aplicación.</p>
    </div>
  );
};

export default Cuerpo;


// App.js
import React from 'react';
import Encabezado from './Encabezado';
import Cuerpo from './Cuerpo';

function App() {
  return (
    <div className="App">
      <Encabezado titulo="Mi Aplicación React" descripcion="Una aplicación increíble construida con ReactJS." />
      <Cuerpo />
    </div>
  );
}

export default App;

```
</details>

## Conclusión
¡Felicidades! Has completado este codelab donde aprendiste los conceptos fundamentales de ReactJS. Ahora estás listo para construir aplicaciones web más complejas utilizando componentes, el ciclo de vida de componentes y hooks para la gestión del estado.


## Evidencia a entregar
Utilize los conceptos de componentes, propiedades y hooks para implementar una landing page (o una version parecida).

El landing page, debe contener los siguientes elementos:

- Encabezado: Titulo de la página y links de inicio y contacto
- Mensaje de bienvenida
- Botón de ver productos

¡Recuerda que los componentes en React son creados como pequeños bloques de código que nos ayudan a implementar nuestras interfaces de usuario!

**nota**
En esta evidencia el estudiante debe seguir el enfoque de componentes de React, que en pocas palabras nos guia en la construccion de interfaces de usuario complejas a través de pequeños bloques llamados "Componentes". 

A continuación verá un ejemplo de como se ve este enfoque graficamente.
![Components](https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Freact%2Fweb-components.png&w=1920&q=75)

También, encontrara ejemplos de landing pages

![Land page](LandPage.png)
![Land page 2](https://themesbrand.com/zooki-react/assets/images/demo/index-2.jpg)