/* 

https://github.com/dparoulek/java-koans/tree/master/src/main/java/com/upgradingdave/koans/builder */

import { GoogleSiteMapBuilder } from "./google-sitemap.builder";
import { SiteMapDirector } from "./sitemap-director";

//const builder = new HtmlSiteMapBuilder();
const builder = new GoogleSiteMapBuilder();

const siteMapMaker = new SiteMapDirector(builder);
console.log(siteMapMaker.siteMap);