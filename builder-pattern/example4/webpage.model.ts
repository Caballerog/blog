
export class WebPage {
    
    public title: string;
    public url: string;
    public parent: WebPage;
    public children: Array<WebPage>;
    
    public constructor(title: string, url: string, parent: WebPage, children: Array<WebPage>) {
        this.title = title;
        this.url = url;
        this.parent = parent;
        this.children = children;
    }
   
        
}