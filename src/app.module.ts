import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CosmedicoModule } from './cosmedico/cosmedico.module';

@Module({
  imports: [DatabaseModule,CosmedicoModule],
})
export class AppModule {}
