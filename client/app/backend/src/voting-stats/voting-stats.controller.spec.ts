import { Test, TestingModule } from '@nestjs/testing';
import { VotingStatsController } from './voting-stats.controller';

describe('VotingStatsController', () => {
  let controller: VotingStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotingStatsController],
    }).compile();

    controller = module.get<VotingStatsController>(VotingStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
