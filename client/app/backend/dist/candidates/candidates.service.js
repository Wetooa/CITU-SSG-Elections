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
exports.CandidatesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CandidatesService = class CandidatesService {
    candidatesModel;
    constructor(candidatesModel) {
        this.candidatesModel = candidatesModel;
    }
    async create(candidate) {
        const newCandidate = new this.candidatesModel(candidate);
        const result = await newCandidate.save();
        return result.id;
    }
    async getAllCandidates() {
        const result = await this.candidatesModel.find().exec();
        return result;
    }
    async searchByBalotNum(balota_number) {
        const result = await this.candidatesModel.findOne({ balota_number }).exec();
        if (!result) {
            throw new common_1.NotFoundException("No Candidate with that Balot Number");
        }
        return result;
    }
    async searchByName(name) {
        const result = await this.candidatesModel
            .findOne({
            name: { $regex: name, $options: "i" },
        })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException("No Candidate with that Name");
        }
        return result;
    }
    async getCandidatesByPosition(position) {
        const result = await this.candidatesModel.findOne({ position }).exec();
        if (!result) {
            throw new common_1.NotFoundException("No Position exists");
        }
        return result;
    }
    async updateCandidate(position, candidateId) {
        const result = await this.candidatesModel
            .findByIdAndUpdate(candidateId, { $set: { position: position } }, {
            new: true,
            runValidators: true,
        })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Candidate ${candidateId} not found`);
        }
        return result;
    }
};
exports.CandidatesService = CandidatesService;
exports.CandidatesService = CandidatesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Candidate")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CandidatesService);
//# sourceMappingURL=candidates.service.js.map