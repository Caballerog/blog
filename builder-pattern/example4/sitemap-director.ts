import { SiteMapBuilder } from "./sitemap.builder";
import { WEBPAGES } from "./data-webpages";

export class SiteMapDirector {
    public siteMap: string;

    constructor(siteMapBuilder: SiteMapBuilder) {

    siteMapBuilder.buildHeader();
    siteMapBuilder.buildFooter();

    for (const webpage of WEBPAGES){
        siteMapBuilder.buildPage(new URL(webpage.url));
    }

    this.siteMap = siteMapBuilder.getSiteMap();
    }
}