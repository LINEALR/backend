import { defineConfig } from '@prisma/config';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  schema: path.resolve(__dirname, 'src/infraestructure/prisma/postgresql/schema.postgresql.prisma'),
});