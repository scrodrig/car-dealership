import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // ? Pipes should go with the param in this case
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneById(id);
  }

  // ? Body can be used without a DTO, but it's not recommended
  @Post()
  createCar(@Body() carData: { brand: string; model: string }) {
    return this.carsService.create(carData);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: { brand?: string; model?: string },
  ) {
    return this.carsService.update(id, updateData);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.delete(id);
  }
}
