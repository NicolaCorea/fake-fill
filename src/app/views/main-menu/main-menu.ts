import { Config } from "../../settings/config/config";
import prompts = require("prompts");
import { MenuChoice } from "../../shared/types/menu-choice";
import { NavController } from "../controller/nav-controller";
import { ViewInterface } from "app/shared/interfaces/view-interface";

/**
 * 
 */
export class MainMenu implements ViewInterface {

  public readonly viewName: string = "main-menu";

  private choices: MenuChoice[] = [];

  public constructor() {
    this.buildChoices()
  }

  public async get(): Promise<void> {

    const { value } = await prompts([
      {
        type: 'select',
        name: 'value',
        message: "Main menu",
        choices: this.choices,
        initial: 0,
        increment: 0,
      }
    ]);
    return NavController.navigate({ to: value });
  }

  private buildChoices(): void {
    const canRun: boolean = typeof Config.model == "string" && typeof Config.dbName == "string";
    const databaseLabel: string = `Database: ${Config.dbName || ' -- '}`;
    const modelLabel: string = `Model: ${Config.model || ' -- '}`;
    this.choices = [
      { title: databaseLabel, description: 'Connect to a DB', value: 'DB' },
      { title: modelLabel, description: "Select a model or create new one", value: "model" },
      { title: 'RUN', value: "run", disabled: !canRun },
      { title: 'end', description: 'Back', value: 'end' },
    ];
  }
}