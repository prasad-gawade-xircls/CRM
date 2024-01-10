import React from "react"
import { Container, Card, CardBody, Row, Col } from "reactstrap"
import { Facebook, Instagram, Twitter } from "react-feather"
import Select from "react-select"

const CustomerBasicPersonal = ({ allData }) => {
  const {
    formData,
    handleInputChange
    // handleNext,
    // handleBack
  } = allData

  const genderOptions = [
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    }
  ]

  const maritalStatusOptions = [
    {
      value: "single",
      label: "Single"
    },
    {
      value: "inRelationship",
      label: "In relationship"
    },
    {
      value: "married",
      label: "Married"
    },
    {
      value: "divorced",
      label: "Divorced"
    },
    {
      value: "widowed",
      label: "Widowed"
    }
  ]

  const occupationOptions = [
    { value: 'Employed', label: 'Employed' },
    { value: 'Business_Owner', label: 'Business Owner' },
    { value: 'Retired Professional', label: 'Retired Professional' },
    { value: 'Student', label: 'Student' },
    { value: 'Homemaker', label: 'Homemaker' }
  ]

  const childrenOptions = [
    {
      value: "no",
      label: "No"
    },
    {
      value: "yes",
      label: "Yes"
    }
  ]

  return (
    <>
      <Container fluid className="px-0 py-1">
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mb-0">Personal Details</h4>
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="personalDetails-dob">Date Of Birth</label>
            <input

              placeholder="Date Of Birth"
              type="date"
              id="personalDetails-dob"
              name="cust_dob"
              className="form-control"
              value={formData?.cust_dob ?? ''}
              onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label
              htmlFor="personalDetails-gender"
              className=""
              style={{ margin: "0px" }}
            >
              Gender
            </label>
            <Select
              id="personalDetails-gender"
              placeholder='Select Your Gender'
              options={genderOptions}
              value={genderOptions.find(option => option.value === formData?.gender) ?? ''}
              onChange={(e) => handleInputChange(e, 'gender')}
              closeMenuOnSelect={true}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label
              htmlFor="personalDetails-marital-status"
              className=""
              style={{ margin: "0px" }}
            >
              Marital Status
            </label>
            <Select
              id="personalDetails-marital-status"
              options={maritalStatusOptions}
              placeholder='Select Your Martial Status'
              value={maritalStatusOptions.find(option => option.value === formData?.marital_status) ?? ''}
              onChange={(e) => handleInputChange(e, 'marital_status')}
              closeMenuOnSelect={true}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label
              htmlFor="personalDetails-children"
              className=""
              style={{ margin: "0px" }}
            >
              Children
            </label>
            <Select
              id="personalDetails-children"
              placeholder='Children'
              value={childrenOptions.find(option => option.value === formData?.children) ?? ''}
              onChange={(e) => handleInputChange(e, 'children')}
              options={childrenOptions}
              closeMenuOnSelect={true}
            />
          </Col>
          {formData?.children === 'yes' && (
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="personalDetails-noChildren">
                No. of Children
              </label>
              <input
                placeholder="Occupation"
                type="number"
                id="personalDetails-noChildren"
                name="NO_Of_Children"
                className="form-control"
                min="0"
                value={formData?.NO_Of_Children ?? ''}
                onChange={handleInputChange}
              />
            </Col>
          )}
          <Col md={6} lg={4} className="mt-2">
            <label
              htmlFor="personalDetails-occupation"
              className=""
              style={{ margin: "0px" }}
            >
              Occupation
            </label>
            <Select
              id="personalDetails-children"
              options={occupationOptions}
              placeholder='Select Occupation'
              value={occupationOptions.find(option => option.value === formData?.occupation) ?? ''}
              onChange={(e) => handleInputChange(e, 'occupation')}
              closeMenuOnSelect={true}
            />
          </Col>
          {(formData?.occupation === 'employed' || formData?.occupation === 'businessOwner') && <Col md={6} lg={4} className="mt-2">
            <label htmlFor="personalDetails-sector">Sector</label>
            <input
              placeholder="Sector"
              type="text"
              id="personalDetails-sector"
              name="category"
              className="form-control"
              value={formData?.category ?? ''}
              onChange={handleInputChange}
            />
          </Col>}
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="personalDetails-designation">Designation</label>
            <input
              placeholder="Designation"
              type="text"
              id="personalDetails-designation"
              name="designation"
              className="form-control"
              value={formData?.designation ?? ''}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mb-0">Social Presence</h4>
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="personalDetails-twitter">Twitter</label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <Twitter size={24} />
              </span>
              <input
                type="text"
                id="personalDetails-twitter"
                className="form-control"
                aria-label=""
                name="social_twitter"
                value={formData?.social_twitter ?? ''}
                onChange={handleInputChange}
              />
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="personalDetails-facebook">Facebook</label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <Facebook size={24} />
              </span>
              <input
                type="text"
                id="personalDetails-facebook"
                className="form-control"
                aria-label=""
                name="social_fb"
                value={formData?.social_fb ?? ''}
                onChange={handleInputChange}
              />
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="personalDetails-instagram">Instagram</label>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <Instagram size={24} />
              </span>
              <input
                type="text"
                id="personalDetails-instagram"
                className="form-control"
                aria-label=""
                name="social_insta"
                value={formData?.social_insta ?? ''}
                onChange={handleInputChange}
              />
            </div>
          </Col>
        </Row>
        {/* <div className="d-flex justify-content-between mt-3">
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
            {/* <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmitSection1}
              >
                Save
              </button>
              <button className="btn btn-primary ms-2" type="button">
                Save & Close
              </button> */}
            {/* <button
              className="btn btn-primary ms-2"
              type="button"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div> */}
      </Container>
    </>
  )
}

export default CustomerBasicPersonal
