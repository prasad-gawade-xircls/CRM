import React from 'react'
import { Container, Card, CardBody, Row, Col } from "reactstrap"
import { Facebook, Instagram, Twitter } from "react-feather"
import Select from "react-select"

const CompanyAddInfo = ({ allData }) => {

  const {
    formData,
    country,
    handleInputChange,
    handleNext,
    handleBack
  } = allData

  return (
    <>
      <Container fluid className="px-0 py-1">
        <Row>
          <Col md={12} className="mt-2">
            <h4 className="mb-0">Subsidiary Company Details</h4>
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-house-details">
              Flat and / or Building / House Details
            </label>
            <input
              placeholder="Flat and / or Building / House Details"
              type="text"
              id="address-1-house-details"
              name="address_line1"
              className="form-control"
            // value={formData?.address_line1 ?? ''}
            // onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-lane">Street Lane or Road</label>
            <input
              placeholder="Street Lane or Road"
              type="text"
              id="address-1-lane"
              name="address_line2"
              className="form-control"
            // value={formData?.address_line2 ?? ''}
            // onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-locality">
              Enter Area, Locality or Suburb e.g. Bandra
            </label>
            <input
              placeholder="Enter Area, Locality or Suburb e.g. Bandra"
              type="text"
              id="address-1-locality"
              name="area_building"
              className="form-control"
            // value={formData?.area_building ?? ''}
            // onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-landmark">Landmark</label>
            <input
              placeholder="Landmark"
              type="text"
              id="address-1-landmark"
              name="landmark"
              className="form-control"
            // value={formData?.landmark ?? ''}
            // onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-city">City</label>
            <input
              placeholder="City"
              type="text"
              id="address-1-city"
              name="city"
              className="form-control"
            // value={formData?.city ?? ''}
            // onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-state">State</label>
            <input
              placeholder="State"
              type="text"
              id="address-1-state"
              name="state"
              className="form-control"
            // value={formData?.state ?? ''}
            // onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-pincode">Pincode</label>
            <input
              placeholder="Pincode"
              type="text"
              id="address-1-pincode"
              name="pincode"
              className="form-control"
            // value={formData?.pincode ?? ''}
            // onChange={handleInputChange}
            />
          </Col>
          <Col md={6} lg={4} className="mt-2">
            <label htmlFor="address-1-country">Country</label>
            <Select
              options={country}
              inputId="aria-example-input"
              closeMenuOnSelect={true}
              name="country"
              placeholder="Select Country"
              value={country.find(option => option.value === formData?.country) ?? ''}
              // defaultValue={country.find(option => option.value === 'India')}
              onChange={(e) => handleInputChange(e, 'country')}
            />
          </Col>
        </Row>
        <Row className='mt-2'>
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
              // value={formData?.social_twitter ?? ''}
              // onChange={handleInputChange}
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
              // value={formData?.social_fb ?? ''}
              // onChange={handleInputChange}
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
              // value={formData?.social_insta ?? ''}
              // onChange={handleInputChange}
              />
            </div>
          </Col>
        </Row>
        <>
          <Row>
            <Col md={12} className="mt-2 d-flex justify-content-between">
              <h4 className="mb-0">Parent Company Address Details</h4>
              <div>
                <span className="form-check form-check-success">
                  <input
                    type="checkbox"
                    id="same-Subsidiary-company"
                    className="form-check-input"
                    name="SameSubsidiaryCompany"
                    checked={formData?.SameSubsidiaryCompany}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="same-Subsidiary-company">Same as Subsidiary Company</label>
                </span>
              </div>
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-house-details2">
                Flat and / or Building / House Details
              </label>
              <input
                placeholder="Flat and / or Building / House Details"
                type="text"
                id="address-1-house-details2"
                name="address_line1"
                className="form-control"
              // value={formData?.address_line1 ?? ''}
              // onChange={handleInputChange}
              />
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-lane2">Street Lane or Road</label>
              <input
                placeholder="Street Lane or Road"
                type="text"
                id="address-1-lane2"
                name="address_line2"
                className="form-control"
              // value={formData?.address_line2 ?? ''}
              // onChange={handleInputChange}
              />
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-locality2">
                Enter Area, Locality or Suburb e.g. Bandra
              </label>
              <input
                placeholder="Enter Area, Locality or Suburb e.g. Bandra"
                type="text"
                id="address-1-locality2"
                name="area_building"
                className="form-control"
              // value={formData?.area_building ?? ''}
              // onChange={handleInputChange}
              />
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-landmark2">Landmark</label>
              <input
                placeholder="Landmark"
                type="text"
                id="address-1-landmark2"
                name="landmark"
                className="form-control"
              // value={formData?.landmark ?? ''}
              // onChange={handleInputChange}
              />
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-city2">City</label>
              <input
                placeholder="City"
                type="text"
                id="address-1-city2"
                name="city"
                className="form-control"
              // value={formData?.city ?? ''}
              // onChange={handleInputChange}
              />
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-state2">State</label>
              <input
                placeholder="State"
                type="text"
                id="address-1-state2"
                name="state"
                className="form-control"
              // value={formData?.state ?? ''}
              // onChange={handleInputChange}
              />
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-pincode2">Pincode</label>
              <input
                placeholder="Pincode"
                type="text"
                id="address-1-pincode2"
                name="pincode"
                className="form-control"
              // value={formData?.pincode ?? ''}
              // onChange={handleInputChange}
              />
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="address-1-country2">Country</label>
              <Select
                options={country}
                inputId="address-1-country2"
                closeMenuOnSelect={true}
                name="country"
                placeholder="Select Country"
                value={country.find(option => option.value === formData?.parentCountry) ?? ''}
                // defaultValue={country.find(option => option.value === 'India')}
                onChange={(e) => handleInputChange(e, 'parentCountry')}
              />
            </Col>
          </Row>
          <Row className='mt-2'>
            <Col md={12} className="mt-2">
              <h4 className="mb-0">Social Presence</h4>
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="personalDetails-twitter2">Twitter</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <Twitter size={24} />
                </span>
                <input
                  type="text"
                  id="personalDetails-twitter2"
                  className="form-control"
                  aria-label=""
                  name="social_twitter"
                // value={formData?.social_twitter ?? ''}
                // onChange={handleInputChange}
                />
              </div>
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="personalDetails-facebook2">Facebook</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <Facebook size={24} />
                </span>
                <input
                  type="text"
                  id="personalDetails-facebook2"
                  className="form-control"
                  aria-label=""
                  name="social_fb"
                // value={formData?.social_fb ?? ''}
                // onChange={handleInputChange}
                />
              </div>
            </Col>
            <Col md={6} lg={4} className="mt-2">
              <label htmlFor="personalDetails-instagram2">Instagram</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <Instagram size={24} />
                </span>
                <input
                  type="text"
                  id="personalDetails-instagram2"
                  className="form-control"
                  aria-label=""
                  name="social_insta"
                // value={formData?.social_insta ?? ''}
                // onChange={handleInputChange}
                />
              </div>
            </Col>
          </Row>
        </>
        <div className="d-flex justify-content-between mt-2">
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
        </div>
      </Container>
    </>
  )
}

export default CompanyAddInfo