import { v4 as uuidv4 } from 'uuid';

export const BRANDS_SEED = [
  {
    id: uuidv4(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Ford',
    createdAt: new Date().getTime(),
  },
];
