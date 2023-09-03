import React, {useState} from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { useAsyncError, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { type } from "@testing-library/user-event/dist/type";

const schema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  address: yup.string().required("Address is required"),
  contact_no: yup.string().required("contact no. is required"),
  email: yup.string().required("Email id is required"),
  gender: yup.string().required("Gender is required"),
  date_of_birth: yup.string().required("Date of Birth is required"),
  password: yup.string().required("passowrd is required"),
});

function SignUp() {
  const data = [
    { placeholder: "First Name", type: "text", identiy: "first_name" },
    { placeholder: "Last Name", type: "text", identiy: "last_name" },
    { placeholder: "Contact no.", type: "number", identiy: "contact_no" },
    { placeholder: "E-mail", type: "email", identiy: "email" },
    { placeholder: "Password", type: "password", identiy: "password" },
    { placeholder: "Address", type: "text", identiy: "address" },
    {
      label: "Gender:",
      identiy: "gender",
      subdata: [
        { name: "Male", type: "radio" },
        { name: "Female", type: "radio" },
        { name: "Others", type: "radio" },
      ],
    },
    { label: "Date of Birth:", type: "date", identiy: "date_of_birth" },
  ];

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b font-poping from-yellow-200 to-white flex items-center justify-center ">
      <div className="w-3/4 my-10 p-5 bg-white rounded-md shadow-2xl">
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-ful flex">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREV7OqbWAYbL_nNEO2AFXJRwOvvTD-I4MwXMgZjnsb2A&s" />
          </div>
        </div>
        <div className="text-center text-2xl tracking-wide font-bold text-red-600">
          Monalisa Futsal
        </div>
        <div className="mt-1 text-center text-lg tracking-wide font-semibold text-zinc-800">
          Create new account
        </div>
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            address: "",
            contact_no: "",
            email: "",
            gender: "",
            date_of_birth: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log(values);
            if (localStorage.getItem("auth")) {
              setErrMsg("You have registered already. Please head to login.");
              return;
            }
            localStorage.setItem("auth", JSON.stringify(values));
            navigate("/dash");
          }}
        >
          {({ handleSubmit, errors, setFieldValue }) => {
            // console.log(errors)
            return (
              <Form onSubmit={handleSubmit}>
                <div className="my-5">
                  <div className="grid grid-cols-2 gap-2">
                    {data.map((val, i) => {
                      if (val.subdata) {
                        return (
                          <div key={i} className="h-14 text-zinc-700">
                            <div className="px-2 py-2 flex flex-row bg-yellow-100 shadow-sm">
                              <label>{val.label}</label>
                              <div className="text-sm grid grid-cols-3 w-full items-center text-center">
                                {val.subdata &&
                                  val.subdata.map((item, index) => {
                                    return (
                                      <div key={index} className="px-1">
                                        <label>{item.name}</label>
                                        <input
                                          onChange={(e) => {
                                            setFieldValue(
                                              val.identiy,
                                              e.target.value
                                            );
                                          }}
                                          type={item.type}
                                          name={val.identiy}
                                          className="ml-1"
                                        />
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                            <ErrorMessage
                              name={val.identiy}
                              component={"div"}
                              className="text-red-600 text-sm"
                            />
                          </div>
                        );
                      } else {
                        if (val.type === "date") {
                          return (
                            <div key={i} className="h-14 text-zinc-700 ">
                              <div className="px-2 py-2 shadow-sm bg-yellow-100">
                                <label>{val.label}</label>
                                <Field
                                  type={val.type}
                                  name={val.identiy}
                                  className="bg-yellow-100 ml-2"
                                />
                              </div>
                              <ErrorMessage
                                name={val.identiy}
                                component={"div"}
                                className="text-red-600 text-sm"
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div key={i} className="h-14">
                              <Field
                                type={val.type}
                                placeholder={val.placeholder}
                                name={val.identiy}
                                className="w-full px-2 py-2 outline-none shadow-sm bg-yellow-100 rounded-md placeholder-zinc-700"
                              />
                              <ErrorMessage
                                name={val.identiy}
                                component={"div"}
                                className="text-red-600 text-sm"
                              />
                            </div>
                          );
                        }
                      }
                    })}
                  </div>
                  <div className="flex justify-center mt-2">
                    <button
                      type="submit"
                      className="px-5 py-2 bg-yellow-200 text-red-600 font-semibold text-lg
                                hover:text-yellow-400 hover:bg-red-600 rounded-md "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
