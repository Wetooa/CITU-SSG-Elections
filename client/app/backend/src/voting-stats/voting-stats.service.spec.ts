import { Test, TestingModule } from '@nestjs/testing';
import { VotingStatsService } from './voting-stats.service';

describe('VotingStatsService', () => {
  let service: VotingStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VotingStatsService],
    }).compile();

    service = module.get<VotingStatsService>(VotingStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
