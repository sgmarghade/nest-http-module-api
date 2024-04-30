import { HttpException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class EmployeesService {
  //Check employee.module for HttpModule import
  constructor(private readonly httpService: HttpService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { data } = await firstValueFrom(
      this.httpService.post<CreateEmployeeDto>('', createEmployeeDto),
    );
    return data;
  }

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get<CreateEmployeeDto[]>('').pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.message, error.response.status);
        }),
      ),
    );
    return data;
  }

  async findOne(id: number) {
    const { data } = await firstValueFrom(
      this.httpService.get<CreateEmployeeDto>(`/${id}`).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw new HttpException(error.message, error.response.status);
        }),
      ),
    );
    return data;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const { data } = await firstValueFrom(
      this.httpService.patch(`${id}`, updateEmployeeDto),
    );
    return data;
  }

  async remove(id: number) {
    const { data } = await firstValueFrom(this.httpService.delete(`${id}`));
    return data;
  }
}
