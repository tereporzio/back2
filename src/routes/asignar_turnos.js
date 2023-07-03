const Router = require('koa-router');
const { where } = require('sequelize');

const router = new Router();

router.get('/:turno', async (ctx) => {
  try {
    const jugadors = await ctx.orm.Jugador.findOne(
      {
        where: {
          id: ctx.params.turno,
        },
      },
    );
    ctx.body = jugadors;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.post('/', async (ctx) => {
  try {
    const parametros = ctx.request.body;
    const jugadors = await ctx.orm.Jugador.findAll({ where: { idJuego: parametros.idJuego } });

    ctx.body = jugadors;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

module.exports = router;
