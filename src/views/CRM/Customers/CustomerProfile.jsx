import { useEffect, useState } from "react"
import { Card, CardBody } from "reactstrap"
import { baseURL } from "@src/assets/auth/jwtService.js"
import { useParams, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

// import customerData from './CustomerData'

import CustomersAddCustomer from "./CustomerProfileBasic/CustomersAddCustomer.jsx"
import PersonalInfo from './CustomerProfileBasic/CustomerBasicPersonal.js'
import CustomerBasicIdProof from "./CustomerProfileBasic/CustomerBasicIdProof.js"
import CustomerBasicAddress from "./CustomerProfileBasic/CustomerBasicAddress.js"
import CustomerBasicCompanyInfo from "./CustomerProfileBasic/CustomerBasicCompanyInfo.js"
import CustomerBasicAccount from "./CustomerProfileBasic/CustomerBasicAccount.js"
import CustomerBasicNav from "./CustomerProfileBasic/CustomerBasicNav.js"
import { validForm, validateEmail } from "@src/views/Validator/index.js"
import CustomerBasicCompanyInfo2 from "./CustomerProfileBasic/CustomerBasicCompanyInfo2.js"


export default function CustomerProfile() {
  const [formData, setFormData] = useState({})
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const { id } = useParams()

  console.log(formData)
  
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
        // console.log("Response:", resp.success[0])
        const newObject = {}
        for (const key in resp.success[0]) {
          if (resp.success[0].hasOwnProperty(key) && resp.success[0][key] !== null) {
            newObject[key] = resp.success[0][key]
          }
        }
        setFormData(newObject)
        const name = newObject?.customer_name ? newObject?.customer_name.split(' ') : ''
        const datePart = newObject?.cust_dob ? newObject?.cust_dob.substring(0, 10) : ''
        setFormData(prefData => ({
          ...prefData,
          cust_first_name: name[0],
          cust_last_name: name[1],
          cust_dob: datePart
        }))
      })
      .catch((error) => {
        console.error("Error:", error)
        toast.error('Failed to Fetch customer')
      })
  }

  useEffect(() => {
    if (id) {
      fetchCustomerData(id)
    }
  }, [])

  // default addressType is for React-Select onChange
  const handleInputChange = (e, addressType) => {
    // console.log(e)
    if (addressType === undefined) {
      const { name, type, checked } = e.target
      let { value } = e.target
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
        if (name === 'billingShippingAddressSame') {
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
    } else if (addressType === 'company') {
      setFormData(prevFormData => ({
        ...prevFormData,
        select_comp_id: e.id
      }))
    } else if (addressType === 'file') {
      setFormData(prevFormData => ({
        ...prevFormData,
        // view_logo_url: URL.createObjectURL(e.target.files[0]),
        [`${e.target.name}_view`] : URL.createObjectURL(e.target.files[0]),
        [e.target.name]: (e.target.files[0])
      }))
    } else if (addressType) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [addressType]: e.value
      }))
    }
  }

  // {"is_edit_url": "/customer/merchant/is_edit/", "cust_id": 57103}   SAVE

  const postData = (btn) => {
    const url = new URL(`${baseURL}/customers/merchant/add_customer/`)
    const form_data = new FormData()
    Object.entries(formData).map(([key, value]) => {
      form_data.append(key, value)
    })
    if (formData?.aadhar_pdf_file instanceof Object) {
      form_data.append("is_aadhar_file", '1')
    }
    if (formData?.pan_pdf_file instanceof Object) {
      form_data.append("is_pan_file", '1')
    }
    if (formData?.user_profile_img instanceof Object) {
      form_data.append("is_user_profile", '1')
    }
    form_data.append("pin", 'INsdfsdfsDV')
    form_data.append("entry_point", 'INDV')
    form_data.append("press_btn", btn)
    if (id) {
      form_data.append("customer_id", id) 
    }

    fetch(url, {
      method: "POST",
      body: form_data
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 409) {
            throw new Error('Customer already exists')
          } 
          // else {
          //   toast.error(`HTTP error! Status: ${response.status}`)
          //   throw new Error(`HTTP error! Status: ${response.status}`)
          // }
        }
        return response.json()
      })
      .then((resp) => {
        console.log("Response:", resp)
        toast.success('Customer saved successfully')
        if (resp.is_edit_url) {
          navigate(`/merchant/customers/edit_customer/${resp.cust_id}`)
        } else {
          navigate(`/merchant/customers`)
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

  const valueToCheck = [
    {
      name: 'title',
      message: 'Please enter your Title',
      type: 'string',
      id: 'title'
    },
    {
      name: 'cust_first_name',
      message: 'Please enter your first name',
      type: 'string',
      id: 'cust_first_name'
    },
    {
      name: 'cust_last_name',
      message: 'Please enter your last name',
      type: 'string',
      id: 'cust_last_name'
    },
    {
      name: 'email',
      message: 'Please enter your email ID',
      type: 'string',
      id: 'email'
    },
    {
      name: 'phone_no',
      message: 'Please enter your phone number',
      type: 'string',
      id: 'phone_no'
    }
  ]

  let checkForm = true
  const handleSubmitSection = (event, btn) => {
    event.preventDefault()
    checkForm = validForm(valueToCheck, formData)
    if (checkForm) {
      const emailCheck = validateEmail(formData.email)
      if (!emailCheck) {
        // document.getElementById('email_val').innerHTML = 'Invaild email ID'
        toast.error("Invaild email ID")
      } else {
        postData(btn)
      }
    }
  }

  const handleNext = async () => {
    checkForm = validForm(valueToCheck, formData)
    if (checkForm) {
      const emailCheck = validateEmail(formData.email)
      if (!emailCheck) {
        // document.getElementById('email_val').innerHTML = 'Invaild email ID'
        toast.error("Invaild email ID")
      } else {
        setCurrentStep(prevStep => prevStep + 1)
      }
    }
  }

  const handleEmailBlur = () => {
    const emailCheck = validateEmail(formData.email)
    if (!emailCheck) {
      // document.getElementById('email_val').innerHTML = 'Invaild email ID'
      toast.error("Invaild email ID")
    }
  }

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1)
  }

  const NavCurrentStep = (step) => {
    checkForm = validForm(valueToCheck, formData)
    if (checkForm) {
      const emailCheck = validateEmail(formData.email)
      if (!emailCheck) {
        // document.getElementById('email_val').innerHTML = 'Invaild email ID'
        toast.error("Invaild email ID")
      } else {
        setCurrentStep(step)
      }
    }
  }

  const allData = {
    formData,
    currentStep,
    id,
    handleEmailBlur,
    handleInputChange,
    handleNext,
    handleBack
  }

  return (
    <>
      <div className="customer-profile">
        <Card>
          <CardBody>
            <h3 className="mb-0">{id ? 'Edit Customer' : 'Add Customer'}</h3>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CustomerBasicNav currentStep={currentStep} NavCurrentStep={NavCurrentStep} />
            <form>
              {currentStep === 1 && (
                <>
                  <CustomersAddCustomer allData={allData} />
                  {/* <CustomerBasicCompanyInfo2 allData={allData} /> */}
                </>
              )}
              {currentStep === 2 && (
                <PersonalInfo allData={allData} />
              )}
              {currentStep === 3 && (
                <CustomerBasicIdProof allData={allData} />
              )}
              {currentStep === 4 && (
                <CustomerBasicAddress allData={allData} />
              )}
              {currentStep === 5 && (
                <>
                  {/* <CustomerBasicCompanyInfo allData={allData} /> */}
                  <CustomerBasicCompanyInfo2 allData={allData} />
                </>
              )}
              {currentStep === 6 && (
                <CustomerBasicAccount allData={allData} />
              )}
              <div className="w-100 d-flex justify-content-between mt-2">
                <div>
                  {!(currentStep === 1) && <button
                    className="btn btn-primary me-2"
                    type="button"
                    onClick={handleBack}
                  >
                    Back
                  </button>}
                  <button className="btn btn-primary " type="button">
                    Cancel
                  </button>
                </div>
                <div>
                  <button className="btn btn-primary ms-2" type="button" onClick={e => handleSubmitSection(e, 'SAVE')}>Save</button>
                  <button className="btn btn-primary ms-2" type="button" onClick={e => handleSubmitSection(e, 'SAVE & CLOSE')}>Save & Close</button>
                  {!(currentStep === 6) && <button
                    className="btn btn-primary ms-2"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                  </button>}
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
