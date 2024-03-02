import { createSlice } from "@reduxjs/toolkit";
import { CreateProduct, InvoiceState, Product } from "./Model";
import { listProduct } from "./Thunk";

const initialState: InvoiceState = {
  products: [],
  createInvoice: {
    customerId: "",
    listProduct: [],
  },
  create: {} as CreateProduct,
};

export const invoiceSlice = createSlice({
  name: typeof initialState,
  initialState: initialState,
  reducers: {
    addProduct: function (state, actions: { payload: Product }) {
      state.createInvoice.listProduct.push(actions.payload);
    },
    createUpdate: (
      state,
      actions: { payload: { key: string; value: string | number } }
    ) => {
      state.create = {
        ...state.create,
        [actions.payload.key]: actions.payload.value,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(listProduct.fulfilled, function (state, actions) {
      state.products = actions.payload.data;
    });
  },
});
