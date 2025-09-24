// typeorm.config.ts
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',      // <-- Mude
  password: 'password',  // <-- Mude
  database: 'todo-backend-db', // <-- Mude
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsRun: false,
});