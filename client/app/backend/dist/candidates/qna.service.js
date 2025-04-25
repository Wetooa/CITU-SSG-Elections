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
exports.QNAService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let QNAService = class QNAService {
    qnaModel;
    constructor(qnaModel) {
        this.qnaModel = qnaModel;
    }
    async create(qnaDto) {
        const newQNA = new this.qnaModel(qnaDto);
        const result = await newQNA.save();
        return result.id;
    }
    async findByCandidateId(candidateId) {
        const result = await this.qnaModel.findById(candidateId).exec();
        if (!result) {
            throw new common_1.NotFoundException(`QNA not found for candidate ${candidateId}`);
        }
        return result;
    }
    async findAll() {
        const result = await this.qnaModel.find().exec();
        return result;
    }
};
exports.QNAService = QNAService;
exports.QNAService = QNAService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("QNA")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QNAService);
//# sourceMappingURL=qna.service.js.map