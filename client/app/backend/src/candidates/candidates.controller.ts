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
  // GET all Candidates
  // @Get()
  // findAll() {
  //   return this.candidatesService.findAll();
  // }
  // @Get("info/:query")
  // search(@Param("query") query: string) {
  //   if (!isNaN(Number(query))) {
  //     return this.candidatesService.searchByBalotNum(+query);
  //   } else {
  //     return this.candidatesService.searchByName(query);
  //   }
  // }
}
