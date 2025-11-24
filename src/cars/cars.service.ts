import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDTO } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuidv4(), brand: 'Toyota', model: 'Corolla' },
    { id: uuidv4(), brand: 'Honda', model: 'Civic' },
    { id: uuidv4(), brand: 'Renault', model: 'Captur' },
    { id: uuidv4(), brand: 'Jeep', model: 'Cheerokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }

  create(car: CreateCarDTO) {
    const newCar = {
      id: uuidv4(),
      ...car,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateData: { brand?: string; model?: string }) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    const updatedCar = { ...this.cars[carIndex], ...updateData };
    this.cars[carIndex] = updatedCar;
    return updatedCar;
  }

  delete(id: string) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    const deletedCar = this.cars.splice(carIndex, 1);
    return deletedCar[0];
  }
}
