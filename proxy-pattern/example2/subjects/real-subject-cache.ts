import { SubjectCache } from  './subject-cache.interface';

export class RealSubjectCache implements SubjectCache {
    async request(resource: string): Promise<string> {
        // Simulate fetching resource from external API
        console.log(`RealSubject: Fetching resource from ${resource}`);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return `Response from ${resource}`;
    }
}
