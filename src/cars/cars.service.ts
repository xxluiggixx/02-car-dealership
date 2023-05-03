import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id:1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id:2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id:3,
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id:number){
        
        const resp = this.cars.find(car => car.id === id)
        //One way
        /* if(!resp){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `Resource with id:${ id } not found`
            },HttpStatus.NOT_FOUND)
        } */
        if(!resp) throw new NotFoundException(`Resource with id:${ id } not found`);
        return resp;
    }
}
