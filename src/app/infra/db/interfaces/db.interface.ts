export interface IDB {
  get(tableName: string): Promise<any[]>;
}