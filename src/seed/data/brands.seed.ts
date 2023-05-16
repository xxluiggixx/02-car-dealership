import {v4 as uuid} from 'uuid'
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED:Brand[] = [
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getDate()
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getDate()
    },
    {
        id: uuid(),
        name: 'Yamaha',
        createdAt: new Date().getDate()
    },
]