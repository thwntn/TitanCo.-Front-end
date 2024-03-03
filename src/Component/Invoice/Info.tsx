import moment from "moment";
import Logo from "../../Assets/Icon/Linked/Calendar.png";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { InvoiceProductCreate } from "../../Store/Reducer/Invoice/Model";
import { Format } from "../../Handle/Format";
import Button from "../../UI/Button/Button";
import { useRef } from "react";

interface IProps {
  listProduct: InvoiceProductCreate[];
  onPrint?: () => void;
}

function InfoInvoice(props: IProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => {
            return (
              <Button
                onClick={function () {
                  if (props.onPrint) props.onPrint();
                  handlePrint();
                }}
                mode="default"
                icon="next"
              >
                In hóa đơn
              </Button>
            );
          }}
        </PrintContextConsumer>
      </ReactToPrint>
      <div>
        <div ref={ref} className="bg-white p-12 rounded-xl custom-shadow">
          <div className="flex flex-col gap-4 items-center">
            <img src={Logo} className="w-[48px]" />
            <span className="font-bold text-3xl">Titan Co.</span>
            <span>Hoá đơn thanh toán</span>
            <span>{moment.utc().format("DD/MM/YYYY")}</span>
          </div>
          <span className="py-4 font-bold text-2xl border-b w-full block">
            INV93283-934
          </span>
          <ul className="grid grid-cols-2 gap-x-12 py-6">
            <li className="py-4 flex flex-col gap-2">
              <span>Mô tả</span>
              <span className="font-bold">
                Thanh toán hóa đơn dịch vụ Cài đặt hệ thống
              </span>
            </li>
            <li className="py-4 flex flex-col gap-2">
              <span>Tên khách hàng</span>
              <span className="font-bold">Dương Văn Khánh</span>
            </li>
            <li className="py-4 flex flex-col gap-2">
              <span>Phương thức thanh toán</span>
              <span className="font-bold">Chuyển khoản</span>
            </li>
            <li className="py-4 flex flex-col gap-2">
              <span>Người xuất hóa đơn</span>
              <span className="font-bold">Nguyễn Trần Thiên Tân</span>
            </li>
          </ul>
          <div>
            <span>Danh sách sản phẩm</span>
            <ul className="flex flex-col gap-12 py-6">
              <li className="flex justify-between bg-[#F6F8FA] p-2">
                <span className="w-full">Mô tả</span>
                <span className="min-w-[86px]">Số lượng</span>
                <span className="min-w-[86px]">Giá tiền</span>
                <span className="min-w-[86px]">Thành tiền</span>
              </li>
              {props.listProduct.map((item, index) => (
                <li className="flex justify-between items-center" key={index}>
                  <span className="flex gap-6 items-center w-full p-[2px]">
                    <span>{item.product.name}</span>
                  </span>
                  <span className="min-w-[86px]">{item.quanlity}</span>
                  <span className="min-w-[86px]">
                    {Format.VndCurrency(item.price)}
                  </span>
                  <span className="min-w-[86px]">
                    {Format.VndCurrency(item.price)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-end border-t py-6">
              <div className="grid grid-cols-2 gap-8 items-end px-4 text-right">
                <span>Hoá đơn:</span>
                <span>120.000 vnđ</span>
                <span>Giảm giá:</span>
                <span>20%</span>
                <span>Tổng cộng:</span>
                <span>
                  <b>99.000 vnđ</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoInvoice;
