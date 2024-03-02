export class Format {
  public static VndCurrency(quanlity: number) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(quanlity);
  }
}
