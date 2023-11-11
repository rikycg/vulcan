export abstract class DBBase {
  abstract get(tableName: string): Promise<any[]>;
}