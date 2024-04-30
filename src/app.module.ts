import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
