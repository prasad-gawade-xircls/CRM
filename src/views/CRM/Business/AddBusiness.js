import React, { useEffect, useState } from 'react'
import { Card, CardBody } from "reactstrap"
import { getReq, baseURL } from '@src/assets/auth/jwtService.js'
import { useParams, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import AddBusinessNav from '@src/views/CRM/Business/Components/AddBusinessNav.js'
import CompanyAddInfo from '@src/views/CRM/Business/Components/CompanyAddInfo.js'
import CompanyBasicInfo from '@src/views/CRM/Business/Components/CompanyBasicInfo.js'
import ContactPersonInfo from '@src/views/CRM/Business/Components/ContactPersonInfo.js'
import ContactPersonAddInfo from '@src/views/CRM/Business/Components/ContactPersonAddInfo.js'

/* eslint-disable */
const AddBusiness = () => {
   const [formData, setFormData] = useState({
      mark_parent: false,
      country: "India",
      company_name: "Apex",
      industry: "None",
      company_gst: "sa543455345",
      company_pancard: "ssss3342",
      company_phone: "8767687567",
      company_email: "asdfadsfsdfsfdsdf@gmail.com",
      company_website: "www.gadf.com",
      type: "Retail",
      address_line1: "Subsidiary address",
      address_line2: "Subsidiary street",
      area_building: "Subsidiary area",
      landmark: "Subsidiaryland",
      city: "Subsidiary cty",
      state: "Subsidiary state",
      pincode: "Subsidiary pincode",
      par_company_name: "parent name",
      par_industry: "parent  indust",
      par_company_gst: "parent  gsst",
      par_company_pancard_name: "parent pan",
      par_company_phone: "9656767568",
      par_company_email: "parent@email.com",
      par_company_website: "parent.com",
      company_twitter: "Subsidiary.twiiter",
      company_fb: "Subsidiary.facebook",
      company_insta: "Subsidiary.instagram",
      par_address_com: "Parent Company Address",
      par_street_com: "Parent Company Address stteet",
      par_area_building_com: "Parent Company Address area",
      par_landmark_com: "Parent Company Address land",
      par_city_com: "Parent Company Address city",
      par_state_com: "Parent Company Address stayte",
      par_pincode_com: "Parent Company Address pincode",
      par_country_selection_com: "Aland Islands",
      par_company_twitter_link: "ParentCompany.twiiter",
      par_company_facebook_link: "ParentCompany.facebook",
      par_company_instagram_link: "ParentCompany.insta",
      title: "mr",
      cust_first_name: "vinay",
      cust_last_name: "jpoojary",
      email: "v3p@gmail.com",
      phone_no: "9136286758",
      phone_no2: "91362858",
      landline1: "7467465464",
      landline2: "4564574564",
      dropdown: "privi_group",
      customerType: "customerGroup",
      cust_source_dropdown: "Phone Enquiry",
      cust_dob: "2024-01-04",
      gender: "female",
      marital_status: "inRelationship",
      children: "yes",
      occupation: "Retired Professional",
      designation: "developer",
      Adharcard: "6756767578585676",
      pancard: "5586567568856756"
   })
   // const [formData, setFormData] = useState({
   //    mark_parent: false,
   //    country: 'India'
   // })
   const [currentStep, setCurrentStep] = useState(1)
   const [country, setCountry] = useState([])

   const navigate = useNavigate()

   const { id } = useParams()
   
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

   const fetchCustomerData = (id) => {
      const url = new URL(`${baseURL}/customers/merchant/get_view_customer/`)
      const form_data = new FormData()
      form_data.append('id', id)
      form_data.append('edit_type', 'is_customer_detail')
      fetch(url, {
        method: "POST",
        body: form_data
      })
        .then((response) => {
          if (!response.ok) {
            // toast.error(`HTTP error! Status: ${response.status}`)
            // throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.json()
        })
        .then((resp) => {
          console.log("Response:", resp.success[0])
          const newObject = {};
          for (const key in resp.success[0]) {
            if (resp.success[0].hasOwnProperty(key) && resp.success[0][key] !== null) {
              newObject[key] = resp.success[0][key];
            }
          }
          setFormData(newObject)
          const name = newObject.customer_name.split(' ')
          const datePart = newObject.cust_dob.substring(0, 10)
          setFormData(prefData => ({
            ...prefData,
            cust_first_name: name[0],
            cust_last_name: name[1],
            cust_dob: datePart
          }))
        })
        .catch((error) => {
          console.error("Error:", error)
          if (error.message === 'Customer already exists') {
            toast.error('Customer already exists')
          } else {
            toast.error('Failed to save customer')
          }
        })
    }
   
   const postData = (btn) => {
      const url = new URL(`${baseURL}/customers/merchant/add_customer/`)
      const form_data = new FormData()
      Object.entries(formData).map(([key, value]) => {
         if (key === 'mark_parent') {
            value = value ? 'yes' : 'no'
         }
        form_data.append(key, value)
      })
      formData?.aadhar_pdf_file instanceof Object && form_data.append("is_aadhar_file", '1')
      formData?.pan_pdf_file instanceof Object && form_data.append("is_pan_file", '1')
      // formData?.user_profile_img instanceof Object && form_data.append("is_user_profile", '1')
      form_data.append("add_new_customers_b2b", '1')
      form_data.append("mark_parent", formData?.mark_parent ? 'yes' : 'no')
      form_data.append("pin", 'INsdfsdfsDV')
      form_data.append("entry_point", 'INDV')
      form_data.append("press_btn", btn)
      id && form_data.append("customer_id", id)
  
      for (var key of form_data.entries()) {
        console.log(key[0] + ', ' + key[1]);
      }
  
      fetch(url, {
        method: "POST",
        body: form_data
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status === 409) {
              throw new Error('Customer already exists')
            } else {
              toast.error(`HTTP error! Status: ${response.status}`)
              throw new Error(`HTTP error! Status: ${response.status}`)
            }
          }
          return response.json()
        })
        .then((resp) => {
          console.log("Response:", resp)
          toast.success('Customer saved successfully')
          if (resp.is_edit_url) {
            // navigate(`/merchant/customers/edit_customer/${resp.cust_id}`)
          } else {
            // navigate(`/merchant/customers`)
          }
        })
        .catch((error) => {
          console.error("Error:", error)
          if (error.message === 'Customer already exists') {
            toast.error('Customer already exists')
          } else {
            toast.error('Failed to save customer')
          }
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
      postData(btn)
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