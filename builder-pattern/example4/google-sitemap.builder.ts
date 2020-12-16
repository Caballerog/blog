import { SiteMapBuilder } from "./sitemap.builder";

export class GoogleSiteMapBuilder extends SiteMapBuilder {

 
    public buildHeader(): void {
        this.header = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
                + "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
    }

    public buildFooter(): void {
        this.footer = "\n</urlset>\n</xml>\n";
    }

}