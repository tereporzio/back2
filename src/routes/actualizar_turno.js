const Router = require('koa-router');

const router = new Router();

const { Juego } = require('../models');

router.post('/', async (ctx) => {
  try {
    const parametros = ctx.request.body;
    const juego = await ctx.orm.Juego.findOne({ where: { id: parametros.idJuego } });
    if (juego.turnoActual < 3) {
      console.log('entro');
      console.log(juego.turnoActual);

      juego.turnoActual = parseInt(juego.turnoActual) + 1;
      ctx.body = { message: `El turno actual es ${juego.turnoActual}`, turno: juego.turnoActual };
      // }
      // else if (juego.turnoActual === null){
      //   console.log("entro2");
      //   juego.turnoActual = 1;
      //   ctx.body = { message: `El turno actual es ${juego.turnoActual}` };
    } else {
      juego.turnoActual = 1;
      ctx.body = { message: `El turno actual es ${juego.turnoActual}`, turno: juego.turnoActual };
    }
    await juego.save();

    // ctx.body = partida;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

module.exports = router;
