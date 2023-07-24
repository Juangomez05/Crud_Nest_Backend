import { TaskStatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  description: string;
}

export class UptadeTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.PENDING, TaskStatus.DONE])
  status?: TaskStatus;
}
