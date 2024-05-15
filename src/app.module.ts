/**Nota Importante: Aqui casi todo llega a conectar */

import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { HelloController } from './hello/hello.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [TaskModule, ProjectsModule, UsersModule, AuthModule, PaymentsModule],
  controllers: [HelloController, UsersController],
  providers: [UsersService]

})
export class AppModule {}
