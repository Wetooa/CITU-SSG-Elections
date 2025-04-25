import { Model } from "mongoose";
import { Home } from "src/models/home.model";
export declare class HomeService {
    private readonly HomeModel;
    constructor(HomeModel: Model<Home>);
    setFeaturedCandidate(featuredCandidate: Home): Promise<string>;
    getHome(): Promise<Home[]>;
}
