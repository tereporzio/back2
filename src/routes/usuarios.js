const Router = require('koa-router');

const router = new Router();

// Busca por pk
router.get('usuarios.list', '/:id', async (ctx) => {
  try {
    const usuarios = await ctx.orm.Usuario.findByPk(ctx.params.id);
    ctx.body = usuarios;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('usuarios.list', '/', async (ctx) => {
  try {
    const usuarios = await ctx.orm.Usuario.findAll();
    ctx.body = usuarios;
    ctx.status = 200;
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

// End Point puedo buscar cualquier cosa
// router.get('usuarios.list', '/:id', async (ctx) => {
//   try {
//     const usuarios = await ctx.orm.Usuario.findOne({where:{id:ctx.params.id}});
//     ctx.body = usuarios;
//     ctx.status = 200;
//   } catch (error) {
//     ctx.body = error;
//     ctx.status = 400;
//   }
// });
module.exports = router;
