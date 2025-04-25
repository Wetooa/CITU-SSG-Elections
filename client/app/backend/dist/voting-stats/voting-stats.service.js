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
exports.VotingStatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let VotingStatsService = class VotingStatsService {
    statsModel;
    constructor(statsModel) {
        this.statsModel = statsModel;
    }
    async createStat(newStat) {
        const newStats = new this.statsModel(newStat);
        const result = await newStats.save();
        return result.id;
    }
    async getStats() {
        const result = await this.statsModel.find().populate("Candidate").exec();
        return result;
    }
    async updateVotes(candidateId) {
        const result = await this.statsModel
            .findOneAndUpdate({ candidate_id: candidateId }, { $inc: { vote_count: 1 } }, { new: true })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Stats for candidate ${candidateId} not found`);
        }
        return result;
    }
    async updateViews(candidateId) {
        const result = await this.statsModel
            .findOneAndUpdate({ candidate_id: candidateId }, { $inc: { views: 1 } }, { new: true })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Stats for candidate ${candidateId} not found`);
        }
        return result;
    }
    async updateFeatureCount(candidateId) {
        const result = await this.statsModel
            .findOneAndUpdate({ candidate_id: candidateId }, { $inc: { featured_count: 1 } }, { new: true })
            .exec();
        if (!result) {
            throw new common_1.NotFoundException(`Stats for candidate ${candidateId} not found`);
        }
        return result;
    }
};
exports.VotingStatsService = VotingStatsService;
exports.VotingStatsService = VotingStatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Stats")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VotingStatsService);
//# sourceMappingURL=voting-stats.service.js.map