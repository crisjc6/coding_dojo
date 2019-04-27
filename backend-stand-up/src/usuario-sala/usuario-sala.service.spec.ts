import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioSalaService } from './usuario-sala.service';

describe('UsuarioSalaService', () => {
  let service: UsuarioSalaService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioSalaService],
    }).compile();
    service = module.get<UsuarioSalaService>(UsuarioSalaService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
