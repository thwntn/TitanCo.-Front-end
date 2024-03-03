import { createSlice } from "@reduxjs/toolkit";
import { CreateProduct, InvoiceState, Payment, Product } from "./Model";
import { listPayment, listProduct } from "./Thunk";

const initialState: InvoiceState = {
  products: [],
  createInvoice: {
    customerId: null,
    listProduct: [],
    payment: null,
  },
  create: {} as CreateProduct,
  payments: [],
};

export const invoiceSlice = createSlice({
  name: typeof initialState,
  initialState: initialState,
  reducers: {
    selectPayment: function (state, actions: { payload: Payment }) {
      state.createInvoice.payment = actions.payload;
    },

    addProduct: function (state, actions: { payload: Product }) {
      const invoiceProduct = state.createInvoice.listProduct.find(
        (item) => item.product.id == actions.payload.id
      );

      if (invoiceProduct) {
        invoiceProduct.quanlity++;
        invoiceProduct.price =
          invoiceProduct.quanlity * invoiceProduct.product.price;
      } else
        state.createInvoice.listProduct.push({
          price: actions.payload.price,
          quanlity: 1,
          product: actions.payload,
        });
    },

    removeProduct: (state, actions: { payload: Product }) => {
      const invoiceProduct = state.createInvoice.listProduct.find(
        (item) => item.product.id == actions.payload.id
      );

      if (invoiceProduct) {
        // @Remove When Quanlity Is 0
        if (invoiceProduct.quanlity - 1 == 0)
          state.createInvoice.listProduct =
            state.createInvoice.listProduct.filter(
              (item) => item != invoiceProduct
            );
        // @Down quanlity
        else invoiceProduct.quanlity--;
      }
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

    builder.addCase(listPayment.fulfilled, function (state, actions) {
      state.payments = actions.payload.data;
    });
  },
});
