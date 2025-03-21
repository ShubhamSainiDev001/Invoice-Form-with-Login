import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const STORAGE_KEY = "invoiceFormData";

const InvoiceForm = () => {
  const savedValues = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  const formik = useFormik({
    initialValues: {
      vendor: savedValues.vendor || "",
      poNumber: savedValues.poNumber || "",
      invoiceNumber: savedValues.invoiceNumber || "",
      invoiceDate: savedValues.invoiceDate || "",
      totalAmount: savedValues.totalAmount || "",
      paymentTerms: savedValues.paymentTerms || "",
      invoiceDueDate: savedValues.invoiceDueDate || "",
      glPostDate: savedValues.glPostDate || "",
      invoiceDescription: savedValues.invoiceDescription || "",
      lineAmount: savedValues.lineAmount || "",
      department: savedValues.department || "",
      account: savedValues.account || "",
      location: savedValues.location || "",
      description: savedValues.description || "",
    },
    validationSchema: Yup.object({
      vendor: Yup.string().required("Vendor is required"),
      poNumber: Yup.string().required("Purchase Order Number is required"),
      invoiceNumber: Yup.string().required("Invoice Number is required"),
      invoiceDate: Yup.date().required("Invoice Date is required"),
      totalAmount: Yup.number()
        .typeError("Total Amount must be a number")
        .required("Total Amount is required"),
      paymentTerms: Yup.string().required("Payment Terms are required"),
      invoiceDueDate: Yup.date().required("Invoice Due Date is required"),
      glPostDate: Yup.date().required("GL Post Date is required"),
      invoiceDescription: Yup.string().required(
        "Invoice Description is required"
      ),
      lineAmount: Yup.number()
        .typeError("Line Amount must be a number")
        .required("Line Amount is required"),
      department: Yup.string().required("Department is required"),
      account: Yup.string().required("Account is required"),
      location: Yup.string().required("Location is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
    },
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formik.values));
  }, [formik.values]);

  const ClearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
    formik.resetForm();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="mb-4">Vendor Details</h3>
        <div className="form-group mb-3">
          <label>Vendor</label>
          <select
            className="form-control"
            name="vendor"
            onChange={formik.handleChange}
            value={formik.values.vendor}
          >
            <option value="">Select Vendor</option>
            <option value="A-1 Exterminators">A-1 Exterminators</option>
            <option value="A-2 Exterminators">A-2 Exterminators</option>
          </select>
          {formik.errors.vendor && (
            <div className="text-danger">{formik.errors.vendor}</div>
          )}
        </div>

        <h3 className="mb-4">Invoice Details</h3>
        <div className="form-group mb-3">
          <label>Purchase Order Number</label>
          <input
            type="text"
            className="form-control"
            name="poNumber"
            onChange={formik.handleChange}
            value={formik.values.poNumber}
          />
          {formik.errors.poNumber && (
            <div className="text-danger">{formik.errors.poNumber}</div>
          )}
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Invoice Number</label>
            <input
              type="text"
              className="form-control"
              name="invoiceNumber"
              onChange={formik.handleChange}
              value={formik.values.invoiceNumber}
            />
            {formik.errors.invoiceNumber && (
              <div className="text-danger">{formik.errors.invoiceNumber}</div>
            )}
          </div>
          <div className="col-md-6">
            <label>Invoice Date</label>
            <input
              type="date"
              className="form-control"
              name="invoiceDate"
              onChange={formik.handleChange}
              value={formik.values.invoiceDate}
            />
            {formik.errors.invoiceDate && (
              <div className="text-danger">{formik.errors.invoiceDate}</div>
            )}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Total Amount</label>
            <input
              type="number"
              className="form-control"
              name="totalAmount"
              onChange={formik.handleChange}
              value={formik.values.totalAmount}
            />
            {formik.errors.totalAmount && (
              <div className="text-danger">{formik.errors.totalAmount}</div>
            )}
          </div>
          <div className="col-md-6">
            <label>Payment Terms</label>
            <select
              className="form-control"
              name="paymentTerms"
              onChange={formik.handleChange}
              value={formik.values.paymentTerms}
            >
              <option value="">Select</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
            </select>
            {formik.errors.paymentTerms && (
              <div className="text-danger">{formik.errors.paymentTerms}</div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Invoice Due Date</label>
            <input
              type="date"
              className="form-control"
              name="invoiceDueDate"
              onChange={formik.handleChange}
              value={formik.values.invoiceDueDate}
            />
            {formik.errors.invoiceDueDate && (
              <div className="text-danger">{formik.errors.invoiceDueDate}</div>
            )}
          </div>
          <div className="col-md-6">
            <label>GL Post Date</label>
            <input
              type="date"
              className="form-control"
              name="glPostDate"
              onChange={formik.handleChange}
              value={formik.values.glPostDate}
            />
            {formik.errors.glPostDate && (
              <div className="text-danger">{formik.errors.glPostDate}</div>
            )}
          </div>
        </div>
        <div className="form-group mb-3">
          <label>Invoice Description</label>
          <textarea
            className="form-control"
            name="invoiceDescription"
            onChange={formik.handleChange}
            value={formik.values.invoiceDescription}
          />
          {formik.errors.invoiceDescription && (
            <div className="text-danger">
              {formik.errors.invoiceDescription}
            </div>
          )}
        </div>

        <h3 className="mb-4">Expense Details</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Line Amount</label>
            <input
              type="number"
              className="form-control"
              name="lineAmount"
              onChange={formik.handleChange}
              value={formik.values.lineAmount}
            />
            {formik.errors.lineAmount && (
              <div className="text-danger">{formik.errors.lineAmount}</div>
            )}
          </div>
          <div className="col-md-6">
            <label>Department</label>
            <select
              className="form-control"
              name="department"
              onChange={formik.handleChange}
              value={formik.values.department}
            >
              <option value="">Select Department</option>
              <option value="Art">Art</option>
              <option value="Finance">Finance</option>
            </select>
            {formik.errors.department && (
              <div className="text-danger">{formik.errors.department}</div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Account</label>
            <select
              className="form-control"
              name="account"
              onChange={formik.handleChange}
              value={formik.values.account}
            >
              <option value="">Select Account</option>
              <option value="AC-1001">AC-1001</option>
              <option value="AC-1002">AC-1002</option>
            </select>
            {formik.errors.account && (
              <div className="text-danger">{formik.errors.account}</div>
            )}
          </div>
          <div className="col-md-6">
            <label>Location</label>
            <select
              className="form-control"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
            >
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
            {formik.errors.location && (
              <div className="text-danger">{formik.errors.location}</div>
            )}
          </div>
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && (
            <div className="text-danger">{formik.errors.description}</div>
          )}
        </div>

        <h3 className="mb-4">Comments</h3>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            placeholder="Add a comment and use @Name to tag someone"
          />
        </div>

        <div className="d-flex justify-content-between">
          {/* <button type="button" className="btn btn-secondary">
            Save as Draft
          </button> */}
          <button onClick={ClearStorage} className="btn btn-secondary">
            Clear Form
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={formik.handleSubmit}
          >
            Submit & New
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
