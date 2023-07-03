const Router = require('koa-router');

const router = new Router();

// todos los registros de un jugador en la bdd
router.get('jugadors.show', '/', async (ctx) => {
  try {
    const jugadors = await ctx.orm.Jugador.findAll(
      {
        include: [
          { model: ctx.orm.Jugador },
        ],
      },
    );
    ctx.body = jugadors;
    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.throw(error);
  }
});

router.get('jugadors.list', '/', async (ctx) => {
  try {
    const jugadors = await ctx.orm.Jugador.findAll();
    ctx.body = jugadores;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('jugadors.show', '/:id', async (ctx) => {
  try {
    const jugadors = await ctx.orm.Jugador.findOne({ where: { id: ctx.params.id } });
    ctx.body = jugador;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

module.exports = router;
