export interface ViewInterface {

  readonly viewName: string;

  get(): Promise<any>

}