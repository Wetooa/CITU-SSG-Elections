import { Body, Controller, Get, Post } from "@nestjs/common";
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
}
