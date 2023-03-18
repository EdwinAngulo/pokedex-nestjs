export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: +process.env.PORT || 3000,
  mongodb: process.env.MONGODB || 'mongodb://localhost:27017/pokemon',
  default_limit: +process.env.DEFAULT_LIMIT || 20,
  default_offset: +process.env.DEFAULT_OFFSET || 0,
});
