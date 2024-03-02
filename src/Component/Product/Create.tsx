import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import Name from "../../UI/Name/Name";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import Editor from "../../UI/Editor/Editor";
import Upload from "../../UI/Upload/Upload";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { invoiceSlice } from "../../Store/Reducer/Invoice/Invoice";
import { addPicture, createProduct } from "../../Store/Reducer/Invoice/Thunk";
import { AxiosResponse } from "axios";
import { Product } from "../../Store/Reducer/Invoice/Model";
import { Json } from "../../Handle/Json";

function CreateProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const invoice = useSelector((root: RootState) => root.invoiceState);
  const [image, setImage] = useState<File>();
  const blob = image && URL.createObjectURL(image);

  function update(key: string, value: string | number) {
    dispatch(
      invoiceSlice.actions.createUpdate({
        key,
        value,
      })
    );
  }

  function create() {
    dispatch(createProduct(invoice.create)).then(function (response) {
      const productId = Json.map<AxiosResponse<Product>>(response.payload).data
        .id;
      if (image) {
        const form = new FormData();
        form.append(image.name, image);
        dispatch(addPicture({ productId, form }));
      }
    });
  }

  return (
    <React.Fragment>
      <Name title="Tạo sản phẩm mới"></Name>
      <div className="flex gap-12">
        <div className="w-[356px] flex flex-col gap-6">
          <span className="font-bold text-3xl">Thông tin</span>
          <Text value="">Ghi chú cho sản phẩm</Text>
          <Button mode="default" icon="add">
            Thêm
          </Button>
        </div>
        <div className="w-full flex flex-col gap-8 p-6 custom-shadow">
          <Input
            placeholder="Tên sản phẩm"
            onChange={(event) => update("name", event.target.value)}
          ></Input>
          <Text
            // value=""
            placeholder="Mô tả sản phẩm"
            onChange={(event) => update("description", event.target.value)}
          ></Text>
          <Input
            placeholder="Giá"
            onChange={(event) => update("price", event.target.value)}
          ></Input>
          <Input
            placeholder="Giảm giá"
            onChange={(event) => update("sale", event.target.value)}
          ></Input>
          <div className="bg-[#F6F7F8] rounded-md min-h-[256px]">
            <Editor
              value={invoice.create.content}
              onChange={(value) => {
                update("content", value);
              }}
            ></Editor>
          </div>
          <Upload
            onChange={(event) =>
              event.target.files && setImage(event.target.files[0])
            }
            content="Tải hình ảnh..."
          ></Upload>
          {blob && <img src={blob} />}
          <div className="flex justify-end">
            <Button mode="default" icon="add" onClick={create}>
              Tạo mới
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateProduct;
