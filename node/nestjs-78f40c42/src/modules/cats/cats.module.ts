import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsGateway } from './cats.gateway';

@Module({
  imports: [],
  providers: [CatsGateway, CatsService],
})
export class CatsModule {}
