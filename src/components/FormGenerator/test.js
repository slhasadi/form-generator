import React from "react";
import { useState } from "react";
// import { RJSFSchema } from "@rjsf/utils";
import { RJSFSchema, UiSchema, WidgetProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/bootstrap-4";
// import "./css/Test.css";
import { DatePicker } from "react-advance-jalaali-datepicker";
const Test = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const schema = {
    text1: [
      {
        id: "text1",
        type: "text",
        default: "",
        format: "text",
        placeHolder: "متن...",
        required: "required",
      },
    ],
    // text2: [
    //   {
    //     id: "text2",
    //     type: "text",
    //     default: "",
    //     format: "text",
    //     placeHolder: "متن...",
    //     required: "required",
    //   },
    // ],
    number1: [
      {
        id: "number1",
        type: "number",
        default: "",
        format: "number",
        placeHolder: "متن...",
        required: "required",
      },
    ],
    password1: [
      {
        id: "password1",
        type: "password",
        default: "",
        format: "password",
        placeHolder: "متن...",
        required: "required",
      },
    ],
    radio1: [
      {
        id: "radio1",
        type: "radio",
        default: "",
        format: "email",
        placeHolder: "متن...",
        required: "required",
        items: [
          { lable: "تست", id: "radioItem1" },
          { lable: "تست", id: "radioItem2" },
        ],
      },
    ],
    check1: [
      {
        id: "check1",
        type: "checkbox",
        default: "",
        format: "email",
        placeHolder: "متن...",
        required: "required",
        lable: "تست",
      },
    ],
    select1: [
      {
        type: "select",
        default: "",
        options: [{ value: "اول" }, { value: "دوم" }],
        placeHolder: "متن...",
        required: "required",
      },
    ],
    file1: [
      {
        id: "file1",
        type: "file",
        default: "",
        format: "email",
        placeHolder: "متن...",
        required: "",
      },
    ],
    date1: [
      {
        id: "date1",
        type: "date",
        default: "",
        format: "date",
        placeHolder: "متن...",
        required: "",
      },
    ],
    button1: [
      {
        type: "button",
        default: "submit",
        format: "",
        placeHolder: "",
      },
    ],
  };
  const textInput = Object.fromEntries(
    Object.entries(schema).filter(([key, value]) => value[0].type === "text")
  );
  const numberInput = Object.fromEntries(
    Object.entries(schema).filter(([key, value]) => value[0].type === "number")
  );
  const passwordInput = Object.fromEntries(
    Object.entries(schema).filter(
      ([key, value]) => value[0].type === "password"
    )
  );
  const radioInput = Object.fromEntries(
    Object.entries(schema).filter(([key, value]) => value[0].type === "radio")
  );
  const checkInput = Object.fromEntries(
    Object.entries(schema).filter(
      ([key, value]) => value[0].type === "checkbox"
    )
  );
  const selectInput = Object.fromEntries(
    Object.entries(schema).filter(([key, value]) => value[0].type === "select")
  );
  const filetInput = Object.fromEntries(
    Object.entries(schema).filter(([key, value]) => value[0].type === "file")
  );
  const dateInput = Object.fromEntries(
    Object.entries(schema).filter(([key, value]) => value[0].type === "date")
  );
  const buttonInput = Object.fromEntries(
    Object.entries(schema).filter(([key, value]) => value[0].type === "button")
  );
  const txtInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(textInput).map((item1, index1) => {
          return (
            <div key={index1}>
              <label for="exampleInputPassword1">متن</label>
              <input
                className="form-control"
                id={item1[0].id}
                type={item1[0].type}
                validator={validator}
                required={item1[0].required}
                // value={item1.default}
                placeholder={item1[0].placeHolder ? item1[0].placeHolder : ""}
                onChange={(e) => {
                  setData((data) => ({
                    ...data,
                    text: e.target.value,
                  }));
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };
  const nmberInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(numberInput).map((item1, index1) => {
          return (
            <div key={index1}>
              <label for="exampleInputPassword1">عدد</label>
              <input
                className="form-control"
                id={item1[0].id}
                type={item1[0].type}
                validator={validator}
                required={item1[0].required}
                // value={item1.default}
                placeholder={item1[0].placeHolder ? item1[0].placeHolder : ""}
                onChange={(e) => {
                  setData((data) => ({
                    ...data,
                    number: e.target.value,
                  }));
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };
  const pswrdInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(passwordInput).map((item1, index1) => {
          return (
            <div key={index1}>
              <label for="exampleInputPassword1">پسورد</label>
              <input
                className="form-control"
                id={item1[0].id}
                type={item1[0].type}
                validator={validator}
                required={item1[0].required}
                // value={item1.default}
                placeholder={item1[0].placeHolder ? item1[0].placeHolder : ""}
                onChange={(e) => {
                  setData((data) => ({
                    ...data,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };
  const rdioInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(radioInput).map((itm, inx) => {
          return (
            <div className="form-check" key={inx}>
              <label for="exampleInputPassword1">رادیو</label>
              {itm[0].items.map((itme, inxe) => {
                return (
                  <div key={inxe}>
                    <label
                      className="form-check-label"
                      for="defaultCheck1"
                      style={{ minWidth: "50px" }}
                    >
                      {itme.lable}
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id={itm[0].id}
                      //   value={itm[0].lable}
                      required={itm[0].required}
                      onChange={(e) => {
                        setData((data) => ({
                          ...data,
                          radio: e.target.value,
                        }));
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };
  const chckInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(checkInput).map((itm, inx) => {
          return (
            <div key={inx}>
              <label for="exampleInputPassword1">چک باکس</label>
              <div className="form-check">
                <label
                  className="form-check-label"
                  for="defaultCheck1"
                  style={{ minWidth: "50px" }}
                >
                  {itm[0].lable}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={itm[0].id}
                  required={itm[0].required}
                  onChange={(e) => {
                    setData((data) => ({
                      ...data,
                      check: e.target.checked,
                    }));
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const slctInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(selectInput).map((itm, inx) => {
          return (
            <div key={inx}>
              <label for="exampleInputPassword1">زیر بازشو</label>
              <select
                id={itm[0].id}
                class="form-control"
                name="cars"
                required={itm[0].required}
                onChange={(e) => {
                  setData((data) => ({
                    ...data,
                    select: e.target.value,
                  }));
                }}
              >
                {itm[0].options.map((itm, ind) => {
                  return (
                    <option key={ind} value={itm.value}>
                      {itm.value}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
    );
  };
  const fleInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(filetInput).map((itm, inx) => {
          return (
            <div class="form-group" key={inx}>
              <label for="exampleFormControlFile1">فایل</label>
              <input
                type={itm[0].type}
                class="form-control-file"
                id={itm[0].id}
                onChange={(e) => {
                  setData((data) => ({
                    ...data,
                    file: e.target.value,
                  }));
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };
  const dteInput = () => {
    return (
      <div style={{ width: "100%" }}>
        {Object.values(dateInput).map((itm, inx) => {
          return (
            <div key={inx}>
              <label for="exampleFormControlFile1">تاریخ</label>
              <div className="form-control">
                <DatePicker
                  placeholder="انتخاب تاریخ"
                  format="jYYYY/jMM/jDD"
                  id="datePicker"
                  controlValue="true"
                  customClass="date-picker"
                  onChange={(e) => {
                    let date = e;
                    console.log(e);
                    setData((data) => ({ ...data, date }));
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const btnInput = () => {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary my-1"
          onClick={() => {
            // console.log(data);
            setShow(true);
          }}
        >
           ارسال
        </button>
      </>
    );
  };
  const modal = () => {
    return (
      <div
        className="container"
        style={{
          width: "400px",
          height: "300px",
          backgroundColor: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          boxShadow: "0px 0px 4px #bababa",
        }}
      >
        <div id="json" style={{ direction: "ltr" }}>
          {JSON.stringify(data, undefined, 2)}
        </div>
        <button
          type="button"
          style={{ position: "absolute", bottom: "10px", left: "10px" }}
          className="btn btn-primary my-1"
          onClick={() => {
            setShow(false);
          }}
        >
          بستن
        </button>
      </div>
    );
  };
  return (
    <div className="container" style={{ direction: "rtl", textAlign: "right" }}>
      <h1>فرم</h1>
      <form class="needs-validation" novalidate>
        <div class="form-row">
          {Object.keys(textInput).length > 0 && txtInput()}
          {Object.keys(numberInput).length > 0 && nmberInput()}
          {Object.keys(passwordInput).length > 0 && pswrdInput()}
          {Object.keys(radioInput).length > 0 && rdioInput()}
          {Object.keys(checkInput).length > 0 && chckInput()}
          {Object.keys(selectInput).length > 0 && slctInput()}
          {Object.keys(filetInput).length > 0 && fleInput()}
          {Object.keys(dateInput).length > 0 && dteInput()}
          {Object.keys(buttonInput).length > 0 && btnInput()}
          {show && modal(data)}

          {/* {Object.keys(schema).map((item, index) => {
            return item === "select" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(schema)[index].map((item2, index2) => {
                  return (
                    <div key={index2}>
                      <label for="exampleInputPassword1">select box</label>
                      <select
                        id={item2.id}
                        class="form-control"
                        name="cars"
                        required={item2.required}
                        onChange={(e) => {
                          setData((data) => ({
                            ...data,
                            select: e.target.value,
                          }));
                        }}
                      >
                        {item2.options.map((itm, ind) => {
                          return (
                            <option key={ind} value={itm.value}>
                              {itm.value}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  );
                })}
              </div>
            ) : item === "text" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(textInput)[index].map((item1, index1) => {
                  return (
                    <>
                      <label for="exampleInputPassword1">number</label>
                      <input
                        className="form-control"
                        id={item1.id}
                        key={index1}
                        type={item1.type}
                        validator={validator}
                        required={item1.required}
                        // value={item1.default}
                        placeholder={item1.placeHolder ? item1.placeHolder : ""}
                        onChange={(e) => {
                          setData((data) => ({
                            ...data,
                            number: e.target.value,
                          }));
                        }}
                      />
                    </>
                  );
                })}
              </div>
            ) : item === "number" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(schema)[index].map((item1, index1) => {
                  return (
                    <>
                      <label for="exampleInputPassword1">number</label>
                      <input
                        className="form-control"
                        id={item1.id}
                        key={index1}
                        type={item1.type}
                        validator={validator}
                        required={item1.required}
                        // value={item1.default}
                        placeholder={item1.placeHolder ? item1.placeHolder : ""}
                        onChange={(e) => {
                          setData((data) => ({
                            ...data,
                            number: e.target.value,
                          }));
                        }}
                      />
                    </>
                  );
                })}
              </div>
            ) : item === "password" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(schema)[index].map((item1, index1) => {
                  return (
                    <>
                      <label for="exampleInputPassword1">password</label>
                      <input
                        className="form-control"
                        id={item1.id}
                        key={index1}
                        type={item1.type}
                        validator={validator}
                        required={item1.required}
                        // value={item1.default}
                        placeholder={item1.placeHolder ? item1.placeHolder : ""}
                        onChange={(e) => {
                          setData((data) => ({
                            ...data,
                            password: e.target.value,
                          }));
                        }}
                      />
                    </>
                  );
                })}
              </div>
            ) : item === "radio" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(schema)[index].map((item1, index1) => {
                  return (
                    <div key={index1}>
                      <label for="exampleInputPassword1">radio</label>
                      {item1.items.map((itm, inx) => {
                        return (
                          <div className="form-check" key={inx}>
                            <label
                              className="form-check-label"
                              for="defaultCheck1"
                              style={{ minWidth: "50px" }}
                            >
                              {itm.lable}
                            </label>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id={itm.id}
                              value={itm.lable}
                              required={itm.required}
                              onChange={(e) => {
                                setData((data) => ({
                                  ...data,
                                  radio: e.target.value,
                                }));
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : item === "check" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(schema)[index].map((item1, index1) => {
                  return (
                    <div key={index1}>
                      <label for="exampleInputPassword1">check box</label>
                      <div className="form-check" key={index1}>
                        <label
                          className="form-check-label"
                          for="defaultCheck1"
                          style={{ minWidth: "50px" }}
                        >
                          {item1.lable}
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={item1.id}
                          required={item1.required}
                          onChange={(e) => {
                            setData((data) => ({
                              ...data,
                              check: e.target.checked,
                            }));
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : item === "file" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(schema)[index].map((item5, index5) => {
                  return (
                    <div class="form-group" key={index5}>
                      <label for="exampleFormControlFile1">file input</label>
                      <input
                        type={item5.type}
                        class="form-control-file"
                        id={item5.id}
                        onChange={(e) => {
                          setData((data) => ({
                            ...data,
                            file: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : item === "button" ? (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(schema)[index].map((item1, index1) => {
                  return (
                    <>
                      <button
                        type={item1.type}
                        className="btn btn-primary my-1"
                        onClick={() => {
                          console.log(data);
                        }}
                      >
                        Submit
                      </button>
                    </>
                  );
                })}
              </div>
            ) : item === "date" ? (
              <>
                <label for="exampleFormControlFile1">date</label>
                <div className="form-control">
                  <DatePicker
                    placeholder="انتخاب تاریخ"
                    format="jYYYY/jMM/jDD"
                    id="datePicker"
                    controlValue="true"
                    customClass="date-picker"
                    onChange={(e) => {
                      let date = e;
                      console.log(e);
                      setData((data) => ({ ...data, date }));
                    }}
                  />
                </div>
              </>
            ) : (
              <div key={index} style={{ width: "100%" }}>
                {Object.values(textInput)[0].map((item1, index1) => {
                  return (
                    <>
                      <label for="exampleInputPassword1">number</label>
                      <input
                        className="form-control"
                        id={item1.id}
                        key={index1}
                        type={item1.type}
                        validator={validator}
                        required={item1.required}
                        // value={item1.default}
                        placeholder={item1.placeHolder ? item1.placeHolder : ""}
                        onChange={(e) => {
                          setData((data) => ({
                            ...data,
                            number: e.target.value,
                          }));
                        }}
                      />
                    </>
                  );
                })}
              </div>
            );
          })} */}
        </div>
      </form>
    </div>
  );
};

export default Test;
