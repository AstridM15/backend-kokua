// src/app.module.ts

// Importa los módulos necesarios

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UbigeosModule } from './ubigeos/ubigeos.module';
import { dirname } from 'path';
import { SectorsModule } from './sectors/sectors.module';
import { OrganizacionsModule } from './organizacions/organizacions.module';
import { VoluntariadosModule } from './voluntariados/voluntariados.module';

// Agrega la función async checkDatabaseConnection
async function checkDatabaseConnection(connection: Connection) {
  try {
    await connection.query('SELECT 1');
    console.log('Connected to MySQL database successfully.');
  } catch (error) {
    console.error('Failed to connect to MySQL database:', error);
  }
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Cambia esto por la dirección de tu base de datos
      port: 3306, // Cambia esto por el puerto de tu base de datos
      username: 'root', // Cambia esto por tu nombre de usuario de MySQL
      password: '', // Cambia esto por tu contraseña de MySQL
      database: 'tabla_kokua_1', // Cambia esto por el nombre de tu base de datos
    autoLoadEntities: true,
      synchronize: false, // Esto sincronizará automáticamente los modelos con la base de datos (solo para desarrollo)
    }),
    UsuariosModule,
    UbigeosModule,
    SectorsModule,
    OrganizacionsModule,
    VoluntariadosModule,


  ],
  controllers : [],
  providers: []
})

export class AppModule {
  // En el constructor de AppModule, inyecta la conexión y verifica la conexión
  constructor(private readonly connection: Connection) {
    checkDatabaseConnection(connection);
  }
}
