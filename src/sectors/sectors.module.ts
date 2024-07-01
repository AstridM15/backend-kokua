import { Module } from '@nestjs/common';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';
import { Sector } from './entities/sector.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sector])],
  controllers: [SectorsController],
  providers: [SectorsService],
  exports: [TypeOrmModule],
})
export class SectorsModule {}
