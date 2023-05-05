import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interfaces';
import {v4 as uuid} from 'uuid'
import { CreateCarDto, UpdateCarDto} from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id:uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id:uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id:string){
        
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

    create( createCarDto: CreateCarDto ){
        const car:Car ={
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car);
        return car;
    }

    update( id: string, UpdateCarDto: UpdateCarDto){

        let carDB = this.findOneById(id);
        this.cars = this.cars.map( car =>{
            if(car.id === id){
                carDB = {...carDB, ...UpdateCarDto, id}
                return carDB;
            }
            return car;
        })

        return carDB;
    }

    delete(id: string){
        let carDB = this.findOneById(id);
        this.cars = this.cars.filter( car => car.id !== id);
    }
}
