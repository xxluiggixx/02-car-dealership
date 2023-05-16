/* import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {} */

import { MinLength, IsString} from "class-validator";

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name: string;
}
