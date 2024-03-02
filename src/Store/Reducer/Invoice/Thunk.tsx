import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddPicture, CreateProduct, Product } from "./Model";
import { instance } from "../../Axios/Axios";
import { pathContants } from "./Path";

export const createProduct = createAsyncThunk(
  "invoice.createProduct",
  function (create: CreateProduct) {
    const response = instance.post<Product>(pathContants.product, create);
    return response;
  }
);

export const addPicture = createAsyncThunk(
  "invoice.addPicture",
  function (addPicture: AddPicture) {
    const response = instance.post(
      `${pathContants.product}/${pathContants.addPicure}/${addPicture.productId}`,
      addPicture.form
    );
    return response;
  }
);

export const listProduct = createAsyncThunk("invoice.listProduct", function () {
  const response = instance.get<Product[]>(pathContants.product);
  return response;
});
