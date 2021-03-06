import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TestCase } from './testCase.entity';
import { Upload } from './upload.entity';
import { CrashReport } from './crashReport.entity';

@Entity({ name: 'failures', orderBy: { order: 'ASC' } })
@Index(['id', 'order'], { unique: true })
export class Failure {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Upload, (upload) => upload.failures, { nullable: false })
  @JoinColumn({ name: 'upload_id' })
  upload!: Upload;

  // For the times that I want to access this ID without loading the relation.
  @Column({ name: 'upload_id' })
  uploadId!: string;

  @ManyToOne(() => TestCase, (testCase) => testCase.failures, {
    nullable: false,
  })
  @JoinColumn({ name: 'test_case_id' })
  testCase!: TestCase;

  // The position of this failure within the list of the parent Upload’s failures. Starts at 0.
  @Column()
  order!: number;

  @Column()
  message!: string;

  @OneToMany(() => CrashReport, (crashReport) => crashReport.failure)
  crashReports!: CrashReport[];
}
