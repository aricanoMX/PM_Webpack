// para instalar webpack corremos el comando
// npm install webpack

// package json no va a guardar como tal los cambios entonces lo que hacemos es
// npm install webpack --save
// esto instala las dependencia de webpack

// pero eso no deja la version exaca que estamos utilizando
// para ello usamos

// npm install webpack --save --save-exact
// asi se va a guardar la versio exacta que estamos usando

// aunque esta no es una forma correcta por que esta dependencia no es tan correcto

// como instalamos una dependencia de desarrollo
// la instalamos con
// npm install webpack --save-dev --save-exact
// i significa install
// -D significa --save-dev
// -E significa --save-exact

// desde la version 3.4 webpack necesita un CLI
// CLI = comando line interface
// nppm install webpack-cli --save-dev --save-exact

// IMPORTANTE
// con npx podemos mandar a llamar las dependencias instaladas en la carpeta actual
// npx webpack
// 4.32.2

// como trnaspilarlo
// tenemos que pasarle al comando de webpack para ponerle un input

// despues tenemos que configurar el archivo que nos va a dar webpack "Como se va a llamar"
// npx webpack --entry ./index.js --output ./bundle.js

// el archivo que se genera al final es el archivo que vamos a enlazar en nuestro index.html
// si no seteamos el valor del modo este nos pondra en modo de produccion
// npx webpack --entry ./index.js --output ./bundle.js --mode development

// modo:
// development = es mas facil de leer y ver en que parte se equivoco, aparte de que es más facil de compilar
// production es mucho

// production = tenemos el output de una sola linea

// npx esta disponible desde la version 5.2 de

// _______________________________________
// Cómo hacemos que esa línea sea muy pequeñita, personalizable y escalable? Por medio de un archivo llamado por defecto
// webpack.config.js.
// npx webpack --entry ./index.js --output ./bundle.js --mode development

// importante
// node utiliza por dentro un sistema de modulos llamado commond js

// __dirname es una variable que se coloca depende el lugar o la direccion en donde nos encontramos
