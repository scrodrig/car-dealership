import { v4 as uuidv4 } from 'uuid';

export const BRANDS_SEED = [
  {
    uuid: uuidv4(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    uuid: uuidv4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    uuid: uuidv4(),
    name: 'Ford',
    createdAt: new Date().getTime(),
  },
];
