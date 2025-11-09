import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Renault', model: 'Captur' },
    { id: 4, brand: 'Jeep', model: 'Cheerokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }

  create(car: { brand: string; model: string }) {
    const newCar = {
      id: this.cars.length + 1,
      ...car,
    };
    this.cars.push(newCar);
    return newCar;
  }

  update(id: number, updateData: { brand?: string; model?: string }) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    const updatedCar = { ...this.cars[carIndex], ...updateData };
    this.cars[carIndex] = updatedCar;
    return updatedCar;
  }

  delete(id: number) {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    if (carIndex === -1)
      throw new NotFoundException(`Car with ID ${id} not found`);

    const deletedCar = this.cars.splice(carIndex, 1);
    return deletedCar[0];
  }
}
