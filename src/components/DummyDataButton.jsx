import React from "react";

const DummyDataButton = ({ setFormValues }) => {
  const fillWithDummyData = () => {
    const dummyData = {
      vendor: "A-1 Exterminators",
      poNumber: "PO-123456",
      invoiceNumber: "INV-78910",
      invoiceDate: "2024-03-21",
      totalAmount: 1000,
      paymentTerms: "Cash",
      invoiceDueDate: "2024-04-21",
      glPostDate: "2024-03-25",
      invoiceDescription: "Pest control services",
      lineAmount: 500,
      department: "Finance",
      account: "AC-1001",
      location: "New York",
      description: "Quarterly pest control service",
    };
    setFormValues(dummyData);
  };

  return (
    <button onClick={fillWithDummyData} className="btn btn-secondary mt-3">
      Fill Dummy Data
    </button>
  );
};

export default DummyDataButton;
