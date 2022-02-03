module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2dc71da591b14feb72b6854b430d065a'),
  },
});
