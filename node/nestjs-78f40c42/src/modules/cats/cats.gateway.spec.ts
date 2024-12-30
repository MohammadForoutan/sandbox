import { Test, TestingModule } from '@nestjs/testing';
import { CatsGateway } from './cats.gateway';
import { CatsService } from './cats.service';

describe('CatsGateway', () => {
  let gateway: CatsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsGateway, CatsService],
    }).compile();

    gateway = module.get<CatsGateway>(CatsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
