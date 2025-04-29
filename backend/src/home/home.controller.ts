import { Body, Controller, Get, Patch, Post } from "@nestjs/common";
import { HomeService } from "./home.service";
import { Home } from "src/models/home.model";
@Controller("home")
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  //setting the candidate, to know how to inpt it, the format is in home.model and check
  // the interface on the bottom part of the fle
  @Post()
  async setFeatureCandidate(@Body() featuredCandidate: Home) {
    return await this.homeService.setFeaturedCandidate(featuredCandidate);
  }

  //Getting all necessary data for the home page
  //http://localhost:8000/home
  @Get()
  async getHome() {
    const result = await this.homeService.getHome();
    return result;
  }
  //Updating who will be featured
  //im assuming isa ra ka featured candidate ma butang sa akong gi buhat is
  //mag replace2 ang featured candidate lng, but we can change it in the future if ever
  @Patch()
  async updateFeaturedCandidate(@Body() featuredCandidate: Home) {
    return await this.homeService.updateFeaturedCandidate(featuredCandidate);
  }
}
