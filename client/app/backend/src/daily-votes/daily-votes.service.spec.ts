import { Test, TestingModule } from '@nestjs/testing';
import { DailyVotesService } from './daily-votes.service';

describe('DailyVotesService', () => {
  let service: DailyVotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyVotesService],
    }).compile();

    service = module.get<DailyVotesService>(DailyVotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
