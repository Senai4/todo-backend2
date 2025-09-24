// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto, TaskStatus } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
  ) {}

  // GET /tasks
  async findAll(): Promise<TaskEntity[]> {
    return this.tasksRepository.find();
  }

  // GET /tasks/:id
  async findOne(id: number): Promise<TaskEntity> {
    const found = await this.tasksRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return found;
  }

  // POST /tasks
  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const newTask = this.tasksRepository.create({
      ...createTaskDto,
      status: TaskStatus.OPEN, // O status inicial é 'OPEN'
    });
    return this.tasksRepository.save(newTask);
  }

  // PUT /tasks/:id
  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    const task = await this.findOne(id);
    Object.assign(task, updateTaskDto);
    return this.tasksRepository.save(task);
  }

  // DELETE /tasks/:id
  async remove(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
  }
}