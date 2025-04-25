"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyVotesModule = void 0;
const common_1 = require("@nestjs/common");
const daily_votes_controller_1 = require("./daily-votes.controller");
const daily_votes_service_1 = require("./daily-votes.service");
let DailyVotesModule = class DailyVotesModule {
};
exports.DailyVotesModule = DailyVotesModule;
exports.DailyVotesModule = DailyVotesModule = __decorate([
    (0, common_1.Module)({
        controllers: [daily_votes_controller_1.DailyVotesController],
        providers: [daily_votes_service_1.DailyVotesService]
    })
], DailyVotesModule);
//# sourceMappingURL=daily-votes.module.js.map