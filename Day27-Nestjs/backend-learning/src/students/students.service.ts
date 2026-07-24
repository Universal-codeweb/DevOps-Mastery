/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  create(createStudentDto: CreateStudentDto) {
    return {
      message: 'Student created successfully',
      data: createStudentDto,
    };
  }

  findAll() {
    return [
      {
        id: 1,
        name: 'Uno',
        department: 'CSE',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
