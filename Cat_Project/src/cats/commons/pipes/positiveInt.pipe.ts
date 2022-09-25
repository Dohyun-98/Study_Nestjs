import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('value must be positive', 400);
    }
    return value;
  }
}
