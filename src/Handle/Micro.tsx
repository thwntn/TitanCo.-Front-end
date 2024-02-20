export class Micro {
  public formatSize(size: number) {
    return (size / 1024 / 1024).toFixed(2);
  }

  public now() {
    return new Date().toLocaleString();
  }

  public formatDate(date: string) {
    return new Date(date).toDateString();
  }
}
