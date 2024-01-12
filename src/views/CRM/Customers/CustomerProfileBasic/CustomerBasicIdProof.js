import React from "react"
import { Container, Card, CardBody, Row, Col } from "reactstrap"
// import "../CustomerProfile.css"
import addDoc from '../Asset/addDoc.png'

const CustomerBasicIdProof = ({ allData }) => {
  const {
    formData,
    handleInputChange
    // handleNext
    // handleSubmitSection3,
    // handleBack
  } = allData

  return (
    <>
      <Container fluid className="px-0 py-1">
        <Row className="align-items-center">
          <Col md={12} className="mt-2">
            <h4 className="mb-0">Identity Proofs</h4>
          </Col>
          <Col md={5} className="mt-2">
            <label htmlFor="idproof-aadhar-no">Aadhar Number</label>
            <input
              placeholder="AadharNumber"
              type="text"
              id="idproof-aadhar-no"
              name="Adharcard"
              className="form-control"
              value={formData?.Adharcard ?? ''}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={5} className="mt-2">
            <label>Upload Aadhar Card Image</label>
            <div className="form-control p-0 d-flex justify-content-between align-items-center">
              <span className="mx-1">{formData?.aadhar_pdf_file?.name || formData?.aadhar_pdf_file || 'Aadhar Card'}</span>
              <input
                name="aadhar_pdf_file"
                type="file"
                id="idproof-aadhar"
                className="d-none"
                // value={formData?.aadhar_pdf_file}
                onChange={(e) => handleInputChange(e, 'file')}
              />
              <label
                className="btn btn-outline-primary"
                htmlFor="idproof-aadhar"
              >
                Upload File
              </label>
            </div>
          </Col>
          <Col md={2} className="mt-2">
            <div style={{ width: "100px", height: "100px" }}>
              <img className="img-thumbnail" style={{ height: '100px' }}
                src={(formData?.aadhar_pdf_file_view) ? formData?.aadhar_pdf_file_view : formData?.aadhar_pdf_file ? `${baseURL}/static${formData?.aadhar_pdf_file}` : addDoc}
                alt="User Image"
                loading="lazy"
              />
            </div>
          </Col>
          <Col md={5} className="mt-2">
            <label htmlFor="idproof-pan-no">Pan Card Number</label>
            <input
              placeholder="Pan Number"
              type="text"
              id="idproof-pan-no"
              name="pancard"
              className="form-control"
              value={formData?.pancard ?? ''}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={5} className="mt-2">
            <label>Upload Pan Card Image</label>
            <div className="form-control p-0 d-flex justify-content-between align-items-center">
              <span className="mx-1">{formData?.pan_pdf_file?.name || formData?.pan_pdf_file || 'Pan Card'}</span>
              <input
                name="pan_pdf_file"
                type="file"
                id="idproof-pan"
                className="d-none"
                // value={formData?.pan_pdf_file}
                onChange={(e) => handleInputChange(e, 'file')}
              />
              <label
                htmlFor="idproof-pan"
                className="btn btn-outline-primary"
              >
                Upload File
              </label>
            </div>
          </Col>
          <Col md={2} className="mt-2">
            <div style={{ width: "100px", height: "100px" }}>
              <img className="img-thumbnail" style={{ height: '100px' }}
                src={(formData?.pan_pdf_file_view) ? formData?.pan_pdf_file_view : formData?.pan_pdf_file ? `${baseURL}/static${formData?.pan_pdf_file}` : addDoc}
                alt="User Image"
                loading="lazy"
              />
            </div>
          </Col>
          {/* <div className="d-flex justify-content-between mt-2">
            <div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleBack}
              >
                Back
              </button>
              <button className="btn btn-primary ms-2" type="button">
                Cancel
              </button>
            </div>
            <div>
              <button
                className="btn btn-primary ms-2"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div> */}
        </Row>
      </Container>
    </>
  )
}

export default CustomerBasicIdProof
