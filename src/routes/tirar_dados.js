const Router = require('koa-router');

const router = new Router();

const { Jugador, Casilla } = require('../models');

router.post('tirar_dados', '/:idJugador', async (ctx) => {
  console.log('Tirars dados');
  try {
    console.log('Tirar dados');
    // Generar dos números aleatorios entre 1 y 6 para cada dado
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    // Calcular la suma de los dos números generados
    const suma = dado1 + dado2;

    // Obtener el jugador desde la base de datos
    // const  idJugador = ctx.params.idJugador;
    const idJugador = parseInt(ctx.params.idJugador);
    const jugador = await Jugador.findOne({
      where: {
        id: idJugador,
      },
    });

    if ((jugador.posicion + suma) < 39) {
      jugador.posicion += suma;
      await jugador.save();
      console.log(jugador.posicion);
      ctx.body = { message: `El jugador ${ctx.params.idJugador} lanza ${suma} y avanza a la casilla ${jugador.posicion}`, posicion: jugador.posicion, suma : suma };
    } else {
      jugador.posicion = (jugador.posicion + suma) - 39;
      await jugador.save();
    }

    // // Establecer el estado de la respuesta como 200 (OK)
    // ctx.status = 200;
  } catch (error) {
    // En caso de error, configurar el cuerpo de la respuesta con el error y el estado como 400 (Solicitud incorrecta)
    ctx.body = {
      error: 'Ocurrió un error al lanzar los dados',
    };
    ctx.status = 400;
  }
});

module.exports = router;
