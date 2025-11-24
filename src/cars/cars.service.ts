import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // { id: uuidv4(), brand: 'Toyota', model: 'Corolla' },
    // { id: uuidv4(), brand: 'Honda', model: 'Civic' },
    // { id: uuidv4(), brand: 'Renault', model: 'Captur' },
    // { id: uuidv4(), brand: 'Jeep', model: 'Cheerokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDTO) {
    const newCar = {
      id: uuidv4(),
      ...createCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDTO) {
    let carDB = this.findOneById(id);
    this.cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const carDB = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return carDB;
  }
}
