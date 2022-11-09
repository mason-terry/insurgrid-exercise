export class Logger {
  constructor() {}

  public info(logText: string): void {
    console.log(`${new Date()} INFO ${logText}`);
  }

  public debug(logText: string): void {
    console.log(`${new Date()} DEBUG ${logText}`);
  }

  public error(logText: string): void {
    console.log(`${new Date()} ERROR ${logText}`);
  }
}
