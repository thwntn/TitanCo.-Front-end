import { useEffect } from "react";
import InfoInvoice from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { listPayment, listProduct } from "../../Store/Reducer/Invoice/Thunk";
import { Format } from "../../Handle/Format";
import Input from "../../UI/Input/Input";
import Icon from "../../UI/Icon/Icon";
import { Payment, Product } from "../../Store/Reducer/Invoice/Model";
import { invoiceSlice } from "../../Store/Reducer/Invoice/Invoice";
import Select from "../../UI/Select/Select";
import Name from "../../UI/Name/Name";
import Text from "../../UI/Text/Text";

function CreateInvoice() {
  const dispatch = useDispatch<AppDispatch>();
  const invoice = useSelector((root: RootState) => root.invoiceState);

  function addProduct(product: Product) {
    dispatch(invoiceSlice.actions.addProduct(product));
  }

  function removeProduct(product: Product) {
    dispatch(invoiceSlice.actions.removeProduct(product));
  }

  function save() {
    console.log(invoice.createInvoice);
  }

  useEffect(function () {
    dispatch(listProduct());
    dispatch(listPayment());
  }, []);
  return (
    <div className="flex flex-col gap-16">
      <Name title="Tạo hóa đơn"></Name>
      <div className="flex gap-12">
        <div className="flex flex-col flex-[1] h-fit gap-12">
          <div className="grid grid-cols-2 gap-8 bg-white py-12 px-4 rounded-xl">
            <Text
              title="Mô tả"
              defaultValue={"Thanh toán hóa đơn dịch vụ Cài đặt hệ thống"}
              placeholder="Mô tả..."
            ></Text>
            <Select
              title="Khách hàng"
              items={[
                {
                  id: 1,
                  name: "Dương Văn Khánh",
                },
                {
                  id: 2,
                  name: "Nguyễn Trần Thiên Tân",
                },
              ]}
              value="Chọn khách hàng..."
            ></Select>
            <Select
              title="Thanh toán"
              onSelect={(item: Payment) =>
                dispatch(invoiceSlice.actions.selectPayment(item))
              }
              items={invoice.payments}
              value={
                invoice.createInvoice.payment?.name ??
                "Phương thức thanh toán..."
              }
            ></Select>
          </div>
          <Input placeholder="Tìm kiếm..."></Input>
          <ul className="flex flex-col flex-[1] gap-4 rounded-xl overflow-hidden h-fit bg-white custom-border">
            <li className="flex py-6 bg-[#F4F6F8]">
              <span className="flex-[1] px-6">Mô tả</span>
              <span className="w-[86px]">Giá</span>
              <span className="w-[86px]">Hành động</span>
            </li>
            {invoice.products.map((item, index) => (
              <li
                key={index}
                className="flex items-center border-b border-gray-100 overflow-hidden w-full"
              >
                <div className="flex flex-[1] items-center">
                  <div className="p-6">
                    <img
                      className="w-[56px] h-[56px] object-cover rounded-xl"
                      src={item.imageProducts[0]?.url}
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
                <span className="w-[86px]">
                  {Format.VndCurrency(item.price)}
                </span>
                <nav className="w-[86px] flex justify-end px-8">
                  <Icon
                    src={"https://www.svgrepo.com/show/502812/remove.svg"}
                    onClick={() => {
                      removeProduct(item);
                    }}
                  ></Icon>
                  <Icon
                    src={"https://www.svgrepo.com/show/502464/add.svg"}
                    onClick={() => {
                      addProduct(item);
                    }}
                  ></Icon>
                </nav>
              </li>
            ))}
          </ul>
        </div>
        <InfoInvoice
          onPrint={save}
          listProduct={invoice.createInvoice.listProduct}
        ></InfoInvoice>
      </div>
    </div>
  );
}

export default CreateInvoice;
