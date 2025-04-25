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
exports.VotingStatsController = void 0;
const common_1 = require("@nestjs/common");
const voting_stats_service_1 = require("./voting-stats.service");
let VotingStatsController = class VotingStatsController {
    statsService;
    constructor(statsService) {
        this.statsService = statsService;
    }
    async createStat(stats) {
        return await this.statsService.createStat(stats);
    }
    async getStats() {
        const result = await this.statsService.getStats();
        return result;
    }
    async updateVotes(candidateId) {
        return await this.statsService.updateVotes(candidateId);
    }
    async updateViews(candidateId) {
        return await this.statsService.updateViews(candidateId);
    }
    async updateFeatureCount(candidateId) {
        return await this.statsService.updateFeatureCount(candidateId);
    }
};
exports.VotingStatsController = VotingStatsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VotingStatsController.prototype, "createStat", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VotingStatsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Patch)(":candidateId/votes"),
    __param(0, (0, common_1.Param)("candidateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotingStatsController.prototype, "updateVotes", null);
__decorate([
    (0, common_1.Patch)(":candidateId/views"),
    __param(0, (0, common_1.Param)("candidateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotingStatsController.prototype, "updateViews", null);
__decorate([
    (0, common_1.Patch)(":candidateId/featured"),
    __param(0, (0, common_1.Param)("candidateId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotingStatsController.prototype, "updateFeatureCount", null);
exports.VotingStatsController = VotingStatsController = __decorate([
    (0, common_1.Controller)("voting-stats"),
    __metadata("design:paramtypes", [voting_stats_service_1.VotingStatsService])
], VotingStatsController);
//# sourceMappingURL=voting-stats.controller.js.map