import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private cars = [
    { id: 1, make: 'Toyota', model: 'Corolla' },
    { id: 2, make: 'Honda', model: 'Civic' },
    { id: 3, make: 'Renault', model: 'Captur' },
  ];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: number) {
    return this.cars.find((car) => car.id === +id);
  }
}
