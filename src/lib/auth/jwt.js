const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function getJWTScope(token) {
  const secret = process.env.JWT_SECRET;
  const payload = jwt.verify(token, secret);
  return playload.scope;
}

async function isUser(ctx, next) {
  await next();
  const token = ctx.request.headers.authorization.split(' ')[1];
  const scope = getJWTScope(token);
  ctx.assert(scope.includes('user'), 403, 'No eres un usuario');
}

async function isAdmin(ctx, next) {
  await next();
  const token = ctx.request.headers.authorization.split(' ')[1];
  const scope = getJWTScope(token);
  ctx.assert(scope.includes('admin'), 403, 'No eres un administrador');
}

module.exports = {
  isUser, isAdmin,
};
