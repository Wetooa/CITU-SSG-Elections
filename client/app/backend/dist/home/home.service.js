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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let HomeService = class HomeService {
    HomeModel;
    constructor(HomeModel) {
        this.HomeModel = HomeModel;
    }
    async setFeaturedCandidate(featuredCandidate) {
        const newFeaturedCandidate = new this.HomeModel(featuredCandidate);
        const result = await newFeaturedCandidate.save();
        return result.id;
    }
    async getHome() {
        const result = await this.HomeModel.find()
            .populate("featured_candidate")
            .exec();
        return result;
    }
    async updateFeaturedCandidate(featured_candidate) {
        const result = await this.HomeModel.findOneAndReplace({}, featured_candidate, { new: true });
        return result;
    }
};
exports.HomeService = HomeService;
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Home")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HomeService);
//# sourceMappingURL=home.service.js.map