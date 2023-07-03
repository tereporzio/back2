const Router = require('koa-router');

const router = new Router();

router.get('juego.show', '/show/:id', async (ctx) => {
  try {
    const juegoId = ctx.params.id;
    const juego = await ctx.orm.Juego.findByPk(juegoId);
    const jugadores = await ctx.orm.Jugador.findAll({
      where: {
        idJuego: juegoId,
      },
    });
    const tablero = await ctx.orm.Tablero.findOne({
      where: {
        idJuego: juegoId,
      },
    });
    const casillas = await ctx.orm.Casilla.findAll({
      where: {
        idTablero: tablero.id,
      },
    });
    const propiedades = await ctx.orm.Propiedad.findAll({
      where: {
        idCasilla: casillaId,
      },
    });
    const libres = await ctx.orm.Libre.findAll({
      where: {
        idCasilla: casillaId,
      },
    });

    // Respuesta
    const respuesta = {
      juego,
      jugadores,
      tablero,
      casillas,
      propiedades,
      libres,
    };

    ctx.body = respuesta;
  } catch (error) {
    ctx.status = 404;
    ctx.body = {
      error: 'No existe el juego',
    };
  }
});
// Crear nuevo juego
router.post('juego.create', '/create', async (ctx) => {
  try {
    const { usuarios } = ctx.request.body; // Obtener los IDs de los usuarios

    const juego = await ctx.orm.Juego.create({
      ganador: null,
      numeroRondas: 10,
      turnoActual: 0,
    });

    const fichas = ['perro', 'conejo', 'auto', 'sombrero'];
    const jugadores = [];

    for (const usuarioId of usuarios) {
      const usuario = await ctx.orm.Usuario.findByPk(usuarioId);

      if (usuario && fichas.length > 0) { // Verificar si quedan fichas disponibles
        const ficha = fichas.pop();

        const jugador = await ctx.orm.Jugador.create({
          userId: usuarioId,
          idJuego: juego.id,
          ficha,
          colorPropiedades: null, // Puedes asignar el mismo color a las propiedades
          cantidadPropiedades: 0, // Puedes iniciar sin propiedades
          dinero: 100000, // Puedes iniciar con 0 dinero
        });

        jugadores.push(jugador);
      }
    }

    // Crear tablero
    const tablero = await ctx.orm.Tablero.create({
      idJuego: juego.id,
      nombre: 'Tablero de juego',
      // Agrega otros campos relevantes para el tablero si los tienes
    });

    // Crear casillas
    const casillas = [];
    for (let i = 0; i < 40; i++) {
      const casilla = await ctx.orm.Casilla.create({
        idTablero: tablero.id,
        posicion: `Posición ${i + 1}`,
        // Agrega otros campos relevantes para la casilla si los tienes
      });
      casillas.push(casilla);
    }

    // Crear propiedades
    const propiedades = [];
    for (const casilla of casillas) {
      const propiedad = await ctx.orm.Propiedad.create({
        idCasilla: casilla.id,
        color: 'Rojo',
        precio: 200,
        nombre: 'Propiedad',
        renta: 50,
      });
      propiedades.push(propiedad);
    }

    // Crear casillas libres
    const libres = [];
    for (const casilla of casillas) {
      const libre = await ctx.orm.Libre.create({
        idCasilla: casilla.id,
        tipo: 'Libre',
        instruccion: 'Avanza 3 casillas',
      });
      libres.push(libre);
    }

    // Respuesta con el juego y los jugadores creados
    ctx.body = {
      juego,
      jugadores,
      tablero,
      casillas,
      propiedades,
      libres,
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = {
      error: 'Ocurrió un error al crear el juego',
    };
  }
});

exports.router = router;
