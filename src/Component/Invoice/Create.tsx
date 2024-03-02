import { useEffect } from "react";
import InfoInvoice from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { listProduct } from "../../Store/Reducer/Invoice/Thunk";
import { Format } from "../../Handle/Format";
import Input from "../../UI/Input/Input";
import Icon from "../../UI/Icon/Icon";
import { Product } from "../../Store/Reducer/Invoice/Model";
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

  useEffect(function () {
    dispatch(listProduct());
  }, []);
  return (
    <div className="flex flex-col gap-16">
      <Name title="Tạo hóa đơn"></Name>
      <div className="flex gap-12">
        <div className="flex flex-col flex-[1] gap-12">
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
              items={[]}
              value="Phương thức thanh toán..."
            ></Select>
          </div>
          <ul className="flex flex-col flex-[1] gap-4 rounded-md">
            <Input placeholder="Tìm kiếm..."></Input>
            {invoice.products.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-8 border bg-white border-gray-100 rounded-xl overflow-hidden w-full"
              >
                <img
                  src={item.imageProducts[0].url}
                  className="w-[64px] h-[64px] object-cover"
                  alt=""
                />
                <span>{item.name}</span>
                <span>{Format.VndCurrency(item.price)}</span>
                <nav className="flex-[1] flex justify-end px-8">
                  <Icon
                    src={"https://www.svgrepo.com/show/489833/add-album.svg"}
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
          listProduct={invoice.createInvoice.listProduct}
        ></InfoInvoice>
      </div>
    </div>
  );
}

export default CreateInvoice;
