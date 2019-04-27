import { Test, TestingModule } from '@nestjs/testing';
import { SalaController } from './sala.controller';

describe('Sala Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SalaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SalaController = module.get<SalaController>(SalaController);
    expect(controller).toBeDefined();
  });
});
