import { Test, TestingModule } from '@nestjs/testing';
import { DailyVotesController } from './daily-votes.controller';

describe('DailyVotesController', () => {
  let controller: DailyVotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyVotesController],
    }).compile();

    controller = module.get<DailyVotesController>(DailyVotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
