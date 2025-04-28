import { HomeService } from "./home.service";
import { Home } from "src/models/home.model";
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    setFeatureCandidate(featuredCandidate: Home): Promise<string>;
    getHome(): Promise<Home[]>;
    updateFeaturedCandidate(featuredCandidate: Home): Promise<Home>;
}
