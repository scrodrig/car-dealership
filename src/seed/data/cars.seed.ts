import { v4 as uuidv4 } from 'uuid';

export const CARS_SEED = [
  {
    id: uuidv4(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuidv4(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuidv4(),
    brand: 'Ford',
    model: 'Mustang',
  },
];
