import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  getAllCars() {
    return [
      { id: 1, make: 'Toyota', model: 'Corolla' },
      { id: 2, make: 'Honda', model: 'Civic' },
      { id: 3, make: 'Renault', model: 'Captur' },
    ];
  }
}
