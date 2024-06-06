import { RealSubject, Subject } from "../subjects/";

export class RemoteProxy implements Subject {
    private realSubject: RealSubject | null = null;
    private readonly remoteServerUrl: string = 'https://jsonplaceholder.typicode.com/posts/1';


    async operation(): Promise<void> {
        if (this.realSubject === null) {
            await this.connectToRemote();
        }
        if (this.realSubject) {
            this.realSubject.operation();
        }
    }


    private async connectToRemote(): Promise<void> {
        console.log('RemoteProxy: Connecting to remote server...');
        // Simulate HTTP request to connect to remote server

        const response = await fetch(this.remoteServerUrl);
        if (!response.ok) {
            return console.error('RemoteProxy: Failed to connect to remote server.');
        }

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('RemoteProxy: Connected to remote server.');
        this.realSubject = new RealSubject(); 
    }
}