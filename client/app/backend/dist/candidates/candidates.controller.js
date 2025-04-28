"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatesController = void 0;
const common_1 = require("@nestjs/common");
const candidates_service_1 = require("./candidates.service");
const qna_service_1 = require("./qna.service");
const courseQuestion_service_1 = require("./courseQuestion.service");
let CandidatesController = class CandidatesController {
    candidatesService;
    qnaService;
    courseQuestionService;
    constructor(candidatesService, qnaService, courseQuestionService) {
        this.candidatesService = candidatesService;
        this.qnaService = qnaService;
        this.courseQuestionService = courseQuestionService;
    }
    async createQNA(candidateId, qnaDto) {
        return await this.qnaService.create({
            ...qnaDto,
        });
    }
    async getQNA(candidateId) {
        const qna = await this.qnaService.findByCandidateId(candidateId);
        if (!qna) {
            throw new common_1.NotFoundException(`QNA not found for candidate ${candidateId}`);
        }
        return qna;
    }
    async getAllQNA() {
        return await this.qnaService.findAll();
    }
    async createCourseQuestions(candidateId, courseQuestionDto) {
        return await this.courseQuestionService.create({
            ...courseQuestionDto,
        });
    }
    async getCourseQuestions(candidateId) {
        const courseQuestions = await this.courseQuestionService.findByCandidateId(candidateId);
        if (!courseQuestions) {
            throw new common_1.NotFoundException(`Course questions not found for candidate ${candidateId}`);
        }
        return courseQuestions;
    }
    async getAllCourseQuestions() {
        return await this.courseQuestionService.findAll();
    }
    async create(createCandidateDto) {
        return await this.candidatesService.create(createCandidateDto);
    }
    async findAll() {
        const result = await this.candidatesService.getAllCandidates();
        return result;
    }
    async search(query) {
        if (!isNaN(Number(query))) {
            const candidate = await this.candidatesService.searchByBalotNum(+query);
            return candidate;
        }
        else {
            const candidate = await this.candidatesService.searchByName(query);
            return candidate;
        }
    }
    async update(position, candidateId) {
        const result = await this.candidatesService.updateCandidate(position, candidateId);
        return result;
    }
};
exports.CandidatesController = CandidatesController;
__decorate([
    (0, common_1.Post)(":candidateId/qna"),
    __param(0, (0, common_1.Param)("candidateId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "createQNA", null);
__decorate([
    (0, common_1.Get)(":candidateId/qna"),
    __param(0, (0, common_1.Param)("candidateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "getQNA", null);
__decorate([
    (0, common_1.Get)("qna"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "getAllQNA", null);
__decorate([
    (0, common_1.Post)(":candidateId/course-questions"),
    __param(0, (0, common_1.Param)("candidateId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "createCourseQuestions", null);
__decorate([
    (0, common_1.Get)(":candidateId/course-questions"),
    __param(0, (0, common_1.Param)("candidateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "getCourseQuestions", null);
__decorate([
    (0, common_1.Get)("course-questions"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "getAllCourseQuestions", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("info/:query"),
    __param(0, (0, common_1.Param)("query")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "search", null);
__decorate([
    (0, common_1.Patch)(":position/:candidateId"),
    __param(0, (0, common_1.Param)("position")),
    __param(1, (0, common_1.Param)("candidateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CandidatesController.prototype, "update", null);
exports.CandidatesController = CandidatesController = __decorate([
    (0, common_1.Controller)("candidates"),
    __metadata("design:paramtypes", [candidates_service_1.CandidatesService,
        qna_service_1.QNAService,
        courseQuestion_service_1.CourseQuestionService])
], CandidatesController);
//# sourceMappingURL=candidates.controller.js.map