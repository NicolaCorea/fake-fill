import { ViewInterface } from "app/shared/interfaces/view-interface";

/**
 * 
 */
export class Settings implements ViewInterface {

  /**
   * 
   */
  public readonly viewName: string = "Settings";

  public constructor() { }

  /**
   * 
   * @returns 
   */
  public async get(): Promise<void> {
    return;
  }

}