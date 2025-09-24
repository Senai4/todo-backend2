// src/tasks/dto/update-task.dto.ts
import { IsOptional, IsString } from 'class-validator';
import { IsIn } from 'class-validator';

// Enums para o status da tarefa
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;
  
  @IsIn(Object.values(TaskStatus))
  @IsOptional()
  status?: TaskStatus;
}