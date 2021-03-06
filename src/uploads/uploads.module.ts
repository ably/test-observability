import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadsController } from './uploads.controller';
import { PostUploadsController } from './postUploads.controller';
import { UploadsService } from './uploads.service';
import { Upload } from './upload.entity';
import { Failure } from './failure.entity';
import { TestCase } from './testCase.entity';
import { ReportsService } from './reports.service';
import { CrashReport } from './crashReport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Upload, Failure, TestCase, CrashReport])],
  controllers: [UploadsController, PostUploadsController],
  providers: [UploadsService, ReportsService],
})
export class UploadsModule {}
