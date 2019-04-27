import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioSalaController } from './usuario-sala.controller';

describe('UsuarioSala Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsuarioSalaController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UsuarioSalaController = module.get<UsuarioSalaController>(UsuarioSalaController);
    expect(controller).toBeDefined();
  });
});
