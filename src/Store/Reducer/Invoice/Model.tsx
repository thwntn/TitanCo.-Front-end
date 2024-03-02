import { User } from "../Identity/Model";

export interface InvoiceState {
  products: Product[];
  create: CreateProduct;
  createInvoice: CreateInvoice;
}

export interface CreateInvoice {
  customerId: string;
  listProduct: Product[];
}

export interface Product {
  id: string;
  created: string;
  name: string;
  quanlity: number;
  description: string;
  price: number;
  sale: number;
  imageProducts: Image[];
  profile: User;
  content: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface CreateProduct {
  name: string;
  description: string;
  price: number;
  sale: number;
  content: string;
}

export interface AddPicture {
  productId: string;
  form: FormData;
}
