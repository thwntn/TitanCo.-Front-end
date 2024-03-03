import { User } from "../Identity/Model";

export interface InvoiceState {
  products: Product[];
  create: CreateProduct;
  createInvoice: CreateInvoice;
  payments: Payment[];
}

export interface CreateInvoice {
  customerId: string | null;
  listProduct: InvoiceProductCreate[];
  payment: Payment | null;
}

export interface InvoiceProductCreate {
  product: Product;
  quanlity: number;
  price: number;
}

export interface Product {
  id: string;
  created: string;
  name: string;
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

export interface Payment {
  id: string;
  name: string;
  image: string;
}
