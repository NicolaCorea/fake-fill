import { NavController } from "../core/controller/nav-controller";

export abstract class FakeFill {

  public static start(): void {
    console.clear();
    NavController.init()
  }

  public static quit(): void {
    console.clear();
    process.exit(0);
  }

}