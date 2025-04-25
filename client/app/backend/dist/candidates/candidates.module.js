"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatesModule = void 0;
const common_1 = require("@nestjs/common");
const candidates_controller_1 = require("./candidates.controller");
const candidates_service_1 = require("./candidates.service");
const mongoose_1 = require("@nestjs/mongoose");
const candidates_model_1 = require("../models/candidates.model");
const qna_model_1 = require("../models/qna.model");
const courseQuestion_model_1 = require("../models/courseQuestion.model");
const qna_service_1 = require("./qna.service");
const courseQuestion_service_1 = require("./courseQuestion.service");
let CandidatesModule = class CandidatesModule {
};
exports.CandidatesModule = CandidatesModule;
exports.CandidatesModule = CandidatesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "Candidate", schema: candidates_model_1.CandidateSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "QNA", schema: qna_model_1.QNAModel }]),
            mongoose_1.MongooseModule.forFeature([
                { name: "CourseQuestion", schema: courseQuestion_model_1.courseQuestionSchema },
            ]),
        ],
        controllers: [candidates_controller_1.CandidatesController],
        providers: [candidates_service_1.CandidatesService, qna_service_1.QNAService, courseQuestion_service_1.CourseQuestionService],
    })
], CandidatesModule);
//# sourceMappingURL=candidates.module.js.map