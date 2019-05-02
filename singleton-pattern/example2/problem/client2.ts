import { DatabaseConnection } from './database-connection';

export class Client2 {
  private databaseConnection: DatabaseConnection;
  constructor() {
    console.log('Client2...');
    console.log('DatabaseConnection created...');
    this.databaseConnection = new DatabaseConnection();
  }
  getUniqueIdentificatorConnection(): number {
    return this.databaseConnection.getUniqueIdentificator;
  }
}
