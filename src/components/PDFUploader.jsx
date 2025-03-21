import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFUploader = () => {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPageNumber(1);
  };

  const handlePreview = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div
      className="card mb-4 p-4"
      style={{
        borderStyle: "dashed",
        borderWidth: "2px",
        height: "40vh",
        textAlign: "center",
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
        setPageNumber(1);
      }}
    >
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <h3 className="mb-3">Upload Your Invoice</h3>
        <p className="text-muted mb-3">To auto-populate fields and save time</p>
        <input
          type="file"
          className="form-control-file mb-3"
          onChange={handleFileChange}
          accept="application/pdf"
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="btn btn-primary mb-2">
          Choose File
        </label>
        {file && (
          <Button variant="success" onClick={handlePreview}>
            Preview PDF
          </Button>
        )}
        <p className="text-muted mt-2">
          <small>Click to upload or Drag and drop</small>
        </p>
      </div>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>PDF Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {file && (
            <div>
              <Document
                file={URL.createObjectURL(file)}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} height={500} width={600} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button
            variant="secondary"
            onClick={prevPage}
            disabled={pageNumber <= 1}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={nextPage}
            disabled={pageNumber >= numPages}
          >
            Next
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PDFUploader;
