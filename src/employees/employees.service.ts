import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class EmployeesService {
  //https://gorest.co.in/
  private _CONFIG = {
    baseURL: 'https://gorest.co.in/public/v2/users',
    headers: {
      Authorization:
        'Bearer 1e97dcf6379991c4c8fda19eafaaf12d298f40b8a750a069c965918c0050cf26',
    },
  };

  //Check employee.module for HttpModule import
  constructor(private readonly httpService: HttpService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { data } = await firstValueFrom(
      this.httpService.post<CreateEmployeeDto>(
        '',
        createEmployeeDto,
        this._CONFIG,
      ),
    );
    return data;
  }

  async findAll() {
    const { data } = await firstValueFrom(
      this.httpService.get<CreateEmployeeDto[]>('', this._CONFIG).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw error;
        }),
      ),
    );
    return data;
  }

  async findOne(id: number) {
    const { data } = await firstValueFrom(
      this.httpService.get<CreateEmployeeDto>(`/${id}`, this._CONFIG),
    );
    return data;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return updateEmployeeDto;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
