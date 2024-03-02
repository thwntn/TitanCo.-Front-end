import moment from "moment";
import Name from "../../UI/Name/Name";
import Context from "../../UI/Context/Context";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { listProduct } from "../../Store/Reducer/Invoice/Thunk";
import { Format } from "../../Handle/Format";
import Input from "../../UI/Input/Input";

function ListProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const invoice = useSelector((root: RootState) => root.invoiceState);

  useEffect(function () {
    dispatch(listProduct());
  }, []);
  return (
    <React.Fragment>
      <Name title="Danh sách sản phẩm"></Name>
      <Input placeholder="Tìm kiếm..."></Input>
      <ul>
        <li className="flex gap-12 items-center py-4 text-nowrap bg-[#F4F6F8] px-4">
          <div className="flex gap-4 items-center flex-[1]">Thông tin</div>
          <span className="w-[120px]">Ngày tạo</span>
          <span className="w-[120px]">Giá</span>
          <span className="w-[120px]">Người tạo</span>
          <span className="w-[120px] text-center">Trạng thái</span>
          <span className="w-[120px]">Công cụ</span>
        </li>
        {invoice.products.map((item, index) => (
          <li className="flex gap-12 items-center py-4 text-nowrap" key={index}>
            <div className="flex gap-4 items-center flex-[1]">
              <img
                className="w-[64px] h-[64px] object-cover  rounded-md"
                src={item.imageProducts[0]?.url}
              />
              <div className="flex flex-col">
                <span className="font-bold">{item.name}</span>
                <span>{item.description}</span>
              </div>
            </div>
            <div className="w-[120px] flex flex-col">
              <span>{moment(item.created).utc().format("YYYY-MM-DD")}</span>
              <span>{moment(item.created).utc().format("dddd, HH:MM")}</span>
            </div>
            <span className="w-[120px]">{Format.VndCurrency(item.price)}</span>
            <span className="w-[120px]">
              <img
                className="w-[32px] h-[32px] object-cover rounded-full"
                src={item.profile.avatar}
                alt=""
              />
            </span>
            <span className="w-[120px] p-2 bg-[#D6F4F9] text-center text-[#006C9C] rounded-full">
              Kích hoạt
            </span>
            <div className="w-[120px]">
              <Context items={[]}></Context>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ListProduct;
