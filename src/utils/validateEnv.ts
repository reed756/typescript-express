import {
  cleanEnv, str,
} from 'envalid';
import { port } from '../../node_modules/envalid/dist/validators';

function validateEnv() {
  cleanEnv(process.env, {
    MONGO_PASSWORD: str(),
    MONGO_PATH: str(),
    MONGO_USER: str(),
    PORT: port(),
  });
}

export default validateEnv;