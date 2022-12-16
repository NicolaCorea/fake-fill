import { MainMenu } from "../main-menu/main-menu";

export abstract class NavController {

  /**
   * User navigation history.
   * Tracks previous views visited by the user.
   * It is used to navigate back through views
   */
  private static navHistory: string[] = [];

  public static async init(): Promise<void> {
    const mainMenu = new MainMenu();
    return mainMenu.get()
  }

  /**
   * 
   * @param arg 
   */
  public static async navigate(arg?: { from?: string, to?: string }): Promise<void> {

    if (!this.navHistory.length) {

    }
  }
}