export abstract class SiteMapBuilder {

    protected header: string;
    protected footer: string;
    protected urls: Array<URL> = [];

    abstract buildHeader(): void;
    abstract buildFooter(): void;
    
    buildPage(url: URL): void {      
        if (this.urls.length === 0) {
            this.urls = [];
        }
        this.urls.push(url);
    }
    
    getSiteMap(): string {
        const body = this.urls.reduce((content, url) => 
                content +=  `\n\t<url>\n\t\t<loc> ${url.toString()} </loc>\n\t</url>`, 
                '');
        
        return this.header + body + this.footer;
 
    };
}