import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CandidatesService } from "./candidates.service";
import { Candidate } from "src/models/candidates.model";

@Controller("candidates")
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}
  //To create new instance of candidates, only useful when populating though
  @Post()
  async create(@Body() createCandidateDto: Candidate) {
    return await this.candidatesService.create(createCandidateDto);
  }

  //GET all Candidates
  //http://localhost:8000/candidates
  @Get()
  async findAll() {
    const result = await this.candidatesService.getAllCandidates();
    return result;
  }

  //Get the candidates through their balot number or name. There is a search through position pero naa na ninyo kung gamiton ninyo
  @Get("info/:query")
  async search(@Param("query") query: string) {
    if (!isNaN(Number(query))) {
      //http://localhost:8000/candidates/info/32
      const candidate = await this.candidatesService.searchByBalotNum(+query);
      return candidate;
    } else {
      //http://localhost:8000/candidates/info/Duterte
      const candidate = await this.candidatesService.searchByName(query);
      return candidate;
    }

    // const candidate = await this.candidatesService.searchByPosition(query);
  }

  //To update the position of the candidate, i just wanted to practice and if ever
  //we make mistakes on populating candidates, naay safeguard with this functions
  //http://localhost:8000/candidates/President/32
  @Patch(":position/:candidateId")
  async update(
    @Param("position") position: string,
    @Param("candidateId") candidateId: string
  ) {
    const result = await this.candidatesService.updateCandidate(
      position,
      candidateId
    );
    return result;
  }
}
