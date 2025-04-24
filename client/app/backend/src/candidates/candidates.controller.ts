import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CandidatesService } from "./candidates.service";
import { Candidate } from "src/models/candidates.model";

@Controller("candidates")
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post()
  async create(@Body() createCandidateDto: Candidate) {
    return await this.candidatesService.create(createCandidateDto);
  }
  //GET all Candidates
  @Get()
  async findAll() {
    const result = await this.candidatesService.getAllCandidates();
    return result;
  }

  @Get("info/:query")
  async search(@Param("query") query: string) {
    if (!isNaN(Number(query))) {
      const candidate = await this.candidatesService.searchByBalotNum(+query);
      return candidate;
    } else {
      const candidate = await this.candidatesService.searchByName(query);
      return candidate;
    }
  }
}
