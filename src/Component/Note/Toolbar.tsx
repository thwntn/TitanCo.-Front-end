import formats from "./ToolbarOption";

const renderOptions = (formatData: any) => {
  const { className, options } = formatData;
  return (
    <select className={className}>
      <option selected={true}></option>
      {options.map((value: any) => {
        return <option value={value}></option>;
      })}
    </select>
  );
};
const renderSingle = (formatData: any) => {
  const { className, value } = formatData;
  return <button className={className} value={value}></button>;
};
const ToolbarEditorComponent = () => (
  <div id="toolbar">
    {formats.map((classes) => {
      return (
        <span className="ql-formats">
          {classes.map((formatData: any) => {
            return formatData.options
              ? renderOptions(formatData)
              : renderSingle(formatData);
          })}
        </span>
      );
    })}
  </div>
);
export default ToolbarEditorComponent;
