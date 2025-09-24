// src/tasks/tasks.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // POST /tasks
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  // GET /tasks
  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  // GET /tasks/:id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  // PATCH /tasks/:id
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  // DELETE /tasks/:id
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}