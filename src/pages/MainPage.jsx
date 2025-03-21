import React from "react";
import InvoiceForm from "../components/InvoiceForm";
import PDFUploader from "../components/PDFUploader";
import DummyDataButton from "../components/DummyDataButton";
import { useFormik } from "formik";

const MainPage = () => {
  const formik = useFormik({
    initialValues: {
      vendor: "",
      poNumber: "",
      invoiceNumber: "",
      invoiceDate: "",
      totalAmount: "",
      paymentTerms: "",
      invoiceDueDate: "",
      glPostDate: "",
      invoiceDescription: "",
      lineAmount: "",
      department: "",
      account: "",
      location: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });
  const handleLogout = () => {
    localStorage.removeItem("session");
    window.location.href = "/";
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <button onClick={handleLogout} className="btn btn-danger mb-3">
          Logout
        </button>
      </div>

      <div className="row">
        <div className="col-md-4">
          <PDFUploader />
          {/* <DummyDataButton setFormValues={formik.setValues} /> */}
        </div>
        <div className="col-md-8">
          <InvoiceForm initialData={formik?.values} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
