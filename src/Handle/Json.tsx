export class Json {
  public static serialize(data: object) {
    return JSON.stringify(data);
  }

  public static deserialize<T>(json: string) {
    return JSON.parse(json) as T;
  }

  public static map<T>(data: unknown | object) {
    return data as unknown as T;
  }
}
