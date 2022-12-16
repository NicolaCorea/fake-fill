export abstract class FakeFill {

  public static start(): void {
    console.clear();
  }

  public static quit(): void {
    console.clear();
    process.exit(0);
  }

}