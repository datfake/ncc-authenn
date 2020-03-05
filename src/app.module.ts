import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
// import { notificationController } from './notification/notification.controller'; // we removed it bcs it already coming from notificationModule
import { notificationModule } from './notification/notification.module';
// import { notificationService } from './notification/notification.service';
import { AuthModule } from './auth/auth.module';

@Module({
   imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234', // removed password bcs no password was set 
      database: 'ncc_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    notificationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
