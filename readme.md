# Redux Toolkit Shopping Cart

Este repositorio está destinado al uso de Redux Toolkit mediante un carrito de compras utilizando React JS.

### Instalación de bibliotecas

Para comenzar, debemos asegurarnos de tener Redux Toolkit, React Redux, prop-types y Sass instalados en el proyecto. Para hacerlo, ejecutamos los siguientes comandos en la terminal:

`npm install @reduxjs/toolkit react-redux`

`npm install sass -D`

`npm install prop-types`

- `@reduxjs/toolkit` es una biblioteca oficial de Redux que proporciona una serie de utilidades para simplificar la configuración y el uso de Redux, como la creación de acciones y reducers de forma más concisa.

- `react-redux` es una biblioteca que facilita la integración de Redux con aplicaciones de React. Proporciona el componente Provider para envolver la aplicación de React y hacer que el store de Redux esté disponible en todos los componentes descendientes. También proporciona el hook useSelector para seleccionar datos del estado de Redux y el hook useDispatch para acceder al dispatcher y enviar acciones al store de Redux y actualizar el estado de la aplicación.

- `prop-types` es una biblioteca utilizada para realizar comprobaciones de tipo en las props de los componentes React. Ayuda a validar que los componentes reciban los datos correctos y muestra advertencias claras en la consola en caso de que haya errores.

## Instalación de dependecias

`cd nombre-proyecto`

`npm install`

Antes de ejecutar el proyecto, asegúrate de tener instalada la biblioteca `react-icons`.

- `react-icons` Brinda una colección de iconos para aplicaciones React.

Puedes instalarla ejecutando el siguiente comando:

`npm install react-icons`

## Comportamiento del estado

Para visualizar y depurar el comportamiento del estado de Redux, es recomendable utilizar la extensión `Redux DevTools` en el navegador.

# Backend testing

Realizaremos una prueba de backend utilizando la librería json-server y peticiones REST API con axios.

## Prueba de backend con json-server

La librería json-server nos permite simular un servidor backend utilizando un archivo JSON (db.json) como base de datos.

Se genera el archivo package.json ejecutando el comando:

`npm init -y`

Para instalar json-server, ejecuta el comando:

`npm install -g json-server`

Para iniciar el servidor json-server y utilizar el archivo db.json como base de datos, ejecuta el comando:

`json-server --watch db.json`

También podemos definir un script de inicio:

`"scripts": {
    "start": "json-server --watch db.json"
}`

Puedes ejecutar ese script utilizando el comando:

`npm start`

## Peticiones REST API con axios

Para realizar peticiones REST API desde nuestro frontend, utilizaremos la librería axios.

Para instalar axios ejecutamos el comando:

`npm install axios`

Una vez instalado, podemos utilizar axios para realizar peticiones GET, POST, PUT, DELETE, entre otras.

### Cómo colaborar

¡Tu colaboración es bienvenida! Si deseas contribuir a este repositorio, simplemente realiza un pull request con tus cambios propuestos. Agradezco cualquier contribución para mejorar este repositorio.

## Contacto

Si tienes alguna pregunta o sugerencia relacionada con mis apuntes, puedes contactarme a través de mi correo electrónico: [wujibifan.hh@gmail.com](mailto:wujibifan.hh@gmail.com)