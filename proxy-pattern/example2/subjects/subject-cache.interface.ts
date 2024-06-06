// Common Interface
export interface SubjectCache {
    request(resource: string): Promise<string>;
}