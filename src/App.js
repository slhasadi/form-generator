import React from "react";
import { useState } from "react";
// import { RJSFSchema } from "@rjsf/utils";
import { RJSFSchema, UiSchema, WidgetProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/bootstrap-4";
import { DatePicker } from "react-advance-jalaali-datepicker";
const App = () => {
  const [data, setData] = useState({});
  const schema = {
    type: "string",
  };

  const uiSchema = {
    "ui:widget": () => {
      return (
        <DatePicker
          placeholder="انتخاب تاریخ"
          format="jYYYY/jMM/jDD"
          id="datePicker"
          controlValue="true"
        />
      );
    },
  };
  return (
    <div className="container" style={{ direction: "rtl", textAlign: "right" }}>
      <Form schema={schema} uiSchema={uiSchema} validator={validator} />
    </div>
  );
};

export default App;
