import React, { useEffect, useState } from 'react'
import { Card, CardBody } from "reactstrap"
import { getReq } from '@src/assets/auth/jwtService.js'
import AddBusinessNav from '@src/views/CRM/Business/Components/AddBusinessNav.js'
import CompanyAddInfo from '@src/views/CRM/Business/Components/CompanyAddInfo.js'
import CompanyBasicInfo from '@src/views/CRM/Business/Components/CompanyBasicInfo.js'
import ContactPersonInfo from '@src/views/CRM/Business/Components/ContactPersonInfo.js'
import ContactPersonAddInfo from '@src/views/CRM/Business/Components/ContactPersonAddInfo.js'

/* eslint-disable */
const AddBusiness = () => {
   const [formData, setFormData] = useState({
      country: 'India'
   })
   const [currentStep, setCurrentStep] = useState(1)
   const [country, setCountry] = useState([])

   console.log(formData, 'formData')

   const getCountries = () => {
      getReq("countries")
         .then((resp) => {
            console.log(resp)
            setCountry(
               resp.data.data.countries.map((curElem) => {
                  return { value: curElem.name, label: `${curElem.name}` }
               })
            )
         })
         .catch((error) => {
            console.log(error)
         })
   }

   useEffect(() => {
      getCountries()
   }, [])
   
   const handleInputChange = (e, addressType) => {
      if (addressType === undefined) {
         let { name, value, type, checked } = e.target
         if (name.includes('.')) {
            const [parent, child] = name.split('.')
            setFormData(prevFormData => ({
               ...prevFormData,
               [parent]: {
                  ...prevFormData[parent],
                  [child]: value
               }
            }))
         } else {
            if (type === "tel") {
               value = value.replace(/[^0-9]/g, "")
            }
            setFormData(prevFormData => ({
               ...prevFormData,
               [name]: type === 'checkbox' ? checked : value
            }))
            if (name === 'SameSubsidiaryCompany') {
               setFormData((prevData) => ({
                  ...prevData,
                  parentCountry: checked ? prevData?.country : ''
               }))
            }
            else if (name === 'billingShippingAddressSame') {
               setFormData((prevData) => ({
                  ...prevData,
                  shipping_address1: checked ? prevData?.address_line1 : '',
                  shipping_address2: checked ? prevData?.address_line2 : '',
                  shipping_area_building: checked ? prevData?.area_building : '',
                  shipping_landmark: checked ? prevData?.landmark : '',
                  shipping_city: checked ? prevData?.city : '',
                  shipping_state: checked ? prevData?.state : '',
                  shipping_pincode: checked ? prevData?.pincode : '',
                  shipping_country: checked ? prevData?.country : ''
               }))
            }
         }
      } else if (addressType === 'file') {
         setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: (e.target.files[0])
         }))
      } else if (addressType) {
         setFormData(prevFormData => ({
            ...prevFormData,
            [addressType]: e.value
         }))
      }
   }

   const handleSubmitSection = (event, btn) => {
      event.preventDefault()
      console.log(btn)
      // postData(btn)
   }

   const handleNext = () => {
      setCurrentStep(prevStep => prevStep + 1)
   }

   const handleBack = () => {
      setCurrentStep((prevStep) => prevStep - 1)
   }

   const NavCurrentStep = (step) => {
      setCurrentStep(step)
   }

   const allData = {
      formData,
      currentStep,
      country,
      handleInputChange,
      handleNext,
      handleBack
   }

   return (
      <>
         <div className="customer-profile">
            <Card>
               <CardBody>
                  <h3 className="mb-0">Add Customer</h3>
               </CardBody>
            </Card>
            <Card>
               <CardBody>
                  <AddBusinessNav currentStep={currentStep} NavCurrentStep={NavCurrentStep} />
                  <form>
                     {currentStep === 1 && (
                        <CompanyBasicInfo allData={allData} />
                     )}
                     {currentStep === 2 && (
                        <CompanyAddInfo allData={allData} />
                     )}
                     {currentStep === 3 && (
                        <ContactPersonInfo allData={allData} />
                     )}
                     {currentStep === 4 && (
                        <ContactPersonAddInfo allData={allData} />
                     )}
                     <div className="w-100 d-flex justify-content-end">
                        <button className="btn btn-primary ms-2" type="button" onClick={e => handleSubmitSection(e, 'SAVE')}>Save</button>
                        <button className="btn btn-primary ms-2" type="button" onClick={e => handleSubmitSection(e, 'SAVE & CLOSE')}>Save & Close</button>
                     </div>
                  </form>
               </CardBody>
            </Card>
         </div>
      </>
   )
}

export default AddBusiness