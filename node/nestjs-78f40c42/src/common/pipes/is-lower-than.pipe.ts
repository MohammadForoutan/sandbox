import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';

@Injectable()
export class IsAgeLowerThanPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const isAgePresent = value.age;
    const isInvalidAgeType = typeof value.age !== 'number';
    const isAgeTooHigh = value.age >= 10;
    const isBodyRequest = metadata.type === 'body';

    if (isAgePresent && (isInvalidAgeType || isAgeTooHigh) && isBodyRequest) {
      throw new BadRequestException('Age must be a number lower than 10');
    }

    return value;
  }
}
