import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CandidatesService } from "./candidates.service";
import { QNAService } from "./qna.service";
import { CourseQuestionService } from "./courseQuestion.service";
import { Candidate } from "src/models/candidates.model";
import { QNA } from "src/models/qna.model";
import { CourseQuestion } from "src/models/courseQuestion.model";

@Controller("candidates")
export class CandidatesController {
  constructor(
    private readonly candidatesService: CandidatesService,
    private readonly qnaService: QNAService,
    private readonly courseQuestionService: CourseQuestionService
  ) {}

  // QNA endpoints
  //localhost:8000/candidates/3246hu123/qna
  @Post(":candidateId/qna")
  async createQNA(
    @Param("candidateId") candidateId: string,
    @Body() qnaDto: QNA
  ) {
    return await this.qnaService.create({
      ...qnaDto,
    });
  }
  //localhost:8000/candidates/3246hu123/qna
  @Get(":candidateId/qna")
  async getQNA(@Param("candidateId") candidateId: string) {
    const qna = await this.qnaService.findByCandidateId(candidateId);
    if (!qna) {
      throw new NotFoundException(`QNA not found for candidate ${candidateId}`);
    }
    return qna;
  }
  //localhost:8000/candidates/qna
  @Get("qna")
  async getAllQNA() {
    return await this.qnaService.findAll();
  }

  // Course Question endpoints
  //localhost:8000/candidates/3246hu123/course-questions

  @Post(":candidateId/course-questions")
  async createCourseQuestions(
    @Param("candidateId") candidateId: string,
    @Body() courseQuestionDto: CourseQuestion
  ) {
    return await this.courseQuestionService.create({
      ...courseQuestionDto,
    });
  }
  //localhost:8000/candidates/3246hu123/course-questions

  @Get(":candidateId/course-questions")
  async getCourseQuestions(@Param("candidateId") candidateId: string) {
    const courseQuestions =
      await this.courseQuestionService.findByCandidateId(candidateId);
    if (!courseQuestions) {
      throw new NotFoundException(
        `Course questions not found for candidate ${candidateId}`
      );
    }
    return courseQuestions;
  }

  //localhost:8000/candidates/course-questions

  @Get("course-questions")
  async getAllCourseQuestions() {
    return await this.courseQuestionService.findAll();
  }

  //To create new instance of candidates, only useful when populating though
  //localhost:8000/candidates/

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
  //http://localhost:8000/candidates/President/132asd3123
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
