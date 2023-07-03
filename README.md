# grupo-Tigre-backend

# Para correr el backend
- yarn dev

# Paso a paso instalación

- Correr las dependencias:
    - yarn add koa
    - yarn add koa-logger
    - yarn add koa-body
    - yarn add koa-router
    - yarn add nodemon
    - yarn add pg
    - yarn add sequelize
    - yarn add sequelize-cli
    - yarn add dotenv
    - yarn add eslint

# Al crear la base de datos tiene que ser nombre_development, porque así esta definida en nuestro archivo config.js

## Banda A
correr yarn eslint.
yarn eslint . --fix
- [x] Gitflow
- [x] Uso eslint

- Desactivamos algunas reglas de eslint porque no nos hacían sentido y no las encontrábamos útiles

## Banda B
Método lanzar asignar turnos, y lanzar dados sin error.

## Banda C
- [X] Implementacion logica juego con errores 
- [X] Post
- [X] Get

Documentación Api:

Get
Método get se utilizo en el archivo usuarios.js y en el arhivo jugadors.js. Donde al momento de registrase los usuarios se guarda su información. Lo mismo con los jugadores, se guardan en una lista. Luego ambas se envían de forma de URL.
Post:

asignar turnos
Al comienzo del juego, recibe los indices de los jugadores, y los baraja asignando los turnos aleatoriamente y se actualiza el atributo turno de cada jugador.

actualizar turnos
Luego de cada turno, al terminar de jugar el jugador correspondiente, se actualiza el atributo turnoActual correspondiente a Juego.

tirar dados
Al comienzo de cada turno el jugador tira ambos dados, el resultado se guarda y se actualiza la posición de la fiha del jugador, la que avanza la cantidad de casillas que indica el dado, respetando los margenes. Se avanza o por el eje x o el eje y. Esta funcion luego se conectará con el frontend mostrandole a todos los jugadores las actualización de la posición


manejo casillas
Se verifica la casilla donde cayo el jugador, se controla segun que tipo de casilla es.
Si es propiedad, se verifica si esta tiene dueño, verificando el idjugador. Si no tiene se chequea que el jugador tenga suficiente dinero, si es así se compra.
Si es casilla libre, se realiza la acción correspondiente a la casilla. Carcel, Parking free, Salid, fortuna y arca comunal.






## Banda D

- [x] Implementacion Bases de Datos
- [x] Diagrama ER

### Credencial DB
Hacer un archivo .env con los siguientes parametros
- DB_USERNAME = 
- DB_PASSWORD = 
- DB_HOST = 'localhost'
- DB_NAME = 
- 

usuario: tigre (cuando se crea no poner _development)

### Diagrama
- El diagrama es un archivo llamado ```diagrama.png``` ubicado en la carpeta ```GRUPO-TIGRE-BACKEND```

- El diagrama esta compuesto por 7 entidades: Jugador, Usuario, Tablero, Propiedad, Casilla, Juego,Libre las que se pueden ver en la carpeta models. Ahi estan los modelos que respresentan a cada una, con sus respectivas asociaciones

# Otros
[X] Completar primera version de front-end ´ : En caso de que existan elementos pendientes de desarrollar de
la entrega anterior, estos deberan ser completados para esta entrega
Landing Page

[x] Base de datos en PostgreSQL: Se debe disenar un modelo apropiado para el contexto, ademas de documentar como levantar la base de datos para probar la aplicacion. Para interactuar con la base de datos, se debera utilizar Sequelize.

[X] API RESTful para interactuar con la base de datos: El front-end de la aplicacion debera conectarse a este servicio para consultar y almacenar los datos relevantes al modelo del punto anterior. Esta API debera ser implementada en Koa.

Trinidad Gil
Maria Teresa Porzio
