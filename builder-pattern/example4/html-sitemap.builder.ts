import { SiteMapBuilder } from "./sitemap.builder";

export class HtmlSiteMapBuilder extends SiteMapBuilder {



    public buildHeader(): void {
        this.header = "<ul class=\"sitemap\">\n";
    }

    public buildFooter(): void {
        this.footer = "</ul>\n";
    }

}