import * as dotenv from 'dotenv';
import App from './app';
import PostsController from './posts/posts.controller';
import validateEnv from './utils/validateEnv';

dotenv.config();
validateEnv();

const app = new App(
  [
    new PostsController(),
  ]
);

app.listen();