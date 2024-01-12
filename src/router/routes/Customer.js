import { lazy } from 'react'
import ThankYouPage from '@src/views/CRM/Customers/ThankYouPage'
import ViewFinance from '../../views/CRM/Finance/ViewFinance'
const AddVehicle = lazy(() => import('@src/views/CRM/Vehicle/AddVehicle'))
const AddCall = lazy(() => import('@src/views/CRM/Call/AddCall'))
const ViewCustomer = lazy(() => import('@src/views/CRM/ViewCustomer/ViewCustomer'))
const AddBusiness = lazy(() => import('@src/views/CRM/Business/AddBusiness'))
const CustomerType = lazy(() => import('@src/views/CRM/Customers/CustomerType'))
const AddInsurance = lazy(() => import('@src/views/CRM/Insurance/AddInsurance'))
// const Insurance = lazy(() => import('@src/views/Leads/Insurance'))
const Servicing = lazy(() => import('@src/views/Leads/Service'))
const AddServicing = lazy(() => import('@src/views/CRM/Servicing/AddServicing'))
const AddFinance = lazy(() => import('@src/views/CRM/Finance/AddFinance'))
// const Finance = lazy(() => import('@src/views/Leads/Finance.js'))
const CustomerProfile = lazy(() => import('@src/views/CRM/Customers/CustomerProfile.jsx'))
const Leads = lazy(() => import('@src/views/Leads/Leads'))
const Customers = lazy(() => import('@src/views/Leads/Customers'))
const AddCustomerGroups = lazy(() => import('@src/views/CrossMarketing/AddCustomerGroups'))
const CustomerProfileBasic = lazy(() => import('@src/views/CRM/Customers/CustomerProfileBasic'))
const CustomerProfileBooking = lazy(() => import('@src/views/CRM/Customers/CustomerProfileBooking'))
const CustomerProfileCall = lazy(() => import('@src/views/CRM/Customers/CustomerProfileCall'))
const CustomerProfileDetails = lazy(() => import('@src/views/CRM/Customers/CustomerProfileDetails'))
const CustomerProfileInvoice = lazy(() => import('@src/views/CRM/Customers/CustomerProfileInvoice'))
const CustomerProfileLoyalty = lazy(() => import('@src/views/CRM/Customers/CustomerProfileLoyalty'))
const CustomerProfileOffer = lazy(() => import('@src/views/CRM/Customers/CustomerProfileOffer'))
const CustomerProfileProducts = lazy(() => import('@src/views/CRM/Customers/CustomerProfileProducts'))
const CustomerProfileVehicle = lazy(() => import('@src/views/CRM/Customers/CustomerProfileVehicle'))
const CustomerBasicAccount = lazy(() => import('@src/views/CRM/Customers/CustomerProfileBasic/CustomerBasicAccount'))
const CustomerBasicAddress = lazy(() => import('@src/views/CRM/Customers/CustomerProfileBasic/CustomerBasicAddress'))
const CustomerBasicCompanyInfo = lazy(() => import('@src/views/CRM/Customers/CustomerProfileBasic/CustomerBasicCompanyInfo'))
const CustomerBasicIdProof = lazy(() => import('@src/views/CRM/Customers/CustomerProfileBasic/CustomerBasicIdProof'))
const CustomerBasicPersonal = lazy(() => import('@src/views/CRM/Customers/CustomerProfileBasic/CustomerBasicPersonal'))
const AddCustomerForm = lazy(() => import('@src/views/CRM/Customers/AddCustomerForm'))
const Finance = lazy(() => import('@src/views/Leads/Finance'))
const Service = lazy(() => import('@src/views/Leads/Service'))
// const Customer = lazy(() => import('@src/views/Leads/Customers'))
const Insurance = lazy(() => import('@src/views/Leads/Insurance'))


const Customers_Routes = [
  {
    path: '/merchant/leads',
    element: <Leads />
  },
  {
    path: '/merchant/customers',
    element: <Customers />
  },
  {
    path: '/merchant/customer/add_type_of_customer/',
    element: <CustomerType/>
  },
  {
    path: '/merchant/customers/add_customer',
    element: <CustomerProfile/>
  },
  {
    path: '/merchant/customers/edit_customer/:id',
    element: <CustomerProfile/>
  },
  {
    path: '/merchant/customers/add_business',
    element: <AddBusiness/>
  },
  {
    path: '/merchant/customer/all_cust_dashboard/add_finance/',
    element: <Finance />
  },
  {
    path: '/merchant/customers/jmd-finance-customers/',
    element: <AddFinance />
  },
  {
    path: '/merchant/customers/add-finance/:id',
    element: <AddFinance />
  },
  {
    path: '/merchant/customers/edit_finance/:id',
    element: <AddFinance/>
  },
  {
    path: '/merchant/customers/view_finance/:id',
    element: <ViewFinance/>
  },
  {
    path: '/merchant/customer/all_cust_dashboard/add_servicing/',
    element: <Servicing />
  },
  {
    path: '/merchant/customers/add-servicing/',
    element: <AddServicing />
  },
  {
    path: '/merchant/customers/add-servicing/:id',
    element: <AddServicing />
  },
  {
    path: '/merchant/customers/edit_service/:id',
    element: <AddServicing/>
  },
  {
    path: '/merchant/customers/insurance/edit_insurance/:id',
    element: <AddInsurance/>
  },
  {
    path: '/merchant/customers/insurance/',
    element: <Insurance />
  },
  {
    path: '/merchant/customers/add-insurance/',
    element: <AddInsurance />
  },
  {
    path: '/merchant/customers/add-insurance/:id',
    element: <AddInsurance />
  },
  {
    path: '/merchant/customers/add-vehicle/:id',
    element: <AddVehicle />
  },
  {
    path: '/merchant/customers/edit-vehicle/:id',
    element: <AddVehicle />
  },
  {
    path: '/merchant/customers/view-vehicle/:id',
    element: <AddVehicle />
  },
  {
    path: '/merchant/customers/add-call',
    element: <AddCall />
  },
  // --------------------------------
  {
    path: '/merchant/customers/finance/',
    element: <Finance />
  },
  {
    path: '/merchant/customers/service/',
    element: <Service />
  },
  {
    path: '/merchant/customers/insurance/',
    element: <Insurance />
  },
  {
    path: '/merchant/customers/view_customer/:id',
    element: <ViewCustomer />
  },
  // --------------------------------
  {
    path: '/merchant/customers/customer_details',
    element: <CustomerProfileDetails />
  },
  {
    path: '/merchant/customers/customer_basic/',
    element: <CustomerProfileBasic />
  },
  {
    path: '/merchant/customers/customer_basic/personal_info',
    element: <CustomerBasicPersonal />
  },
  {
    path: '/merchant/customers/customer_basic/id_proof',
    element: <CustomerBasicIdProof />
  },
  {
    path: '/merchant/customers/customer_basic/address',
    element: <CustomerBasicAddress />
  },
  {
    path: '/merchant/customers/customer_basic/company_info',
    element: <CustomerBasicCompanyInfo />
  },
  {
    path: '/merchant/customers/customer_basic/account',
    element: <CustomerBasicAccount />
  },
  {
    path: '/merchant/customers/customer_booking',
    element: <CustomerProfileBooking />
  },
  {
    path: '/merchant/customers/customer_call',
    element: <CustomerProfileCall />
  },
  {
    path: '/merchant/customers/customer_invoice',
    element: <CustomerProfileInvoice />
  },
  {
    path: '/merchant/customers/customer_loyalty',
    element: <CustomerProfileLoyalty />
  },
  {
    path: '/merchant/customers/customer_offer',
    element: <CustomerProfileOffer />
  },
  {
    path: '/merchant/customers/customer_products',
    element: <CustomerProfileProducts />
  },
  {
    path: '/merchant/customers/customer_vehicle',
    element: <CustomerProfileVehicle />
  },
  {
    path: "/merchant/customers/create-groups/",
    element: <AddCustomerGroups />
  },
  {
    path: "/:outletName/add_customer/",
    meta: {
      layout: 'fullWidthLayout'
    },
    element: <AddCustomerForm />
  },
  {
    path: "/merchant/thank_you_page/",
    meta: {
      layout: 'fullWidthLayout'
    },
    element: <ThankYouPage />
  }

]

export default Customers_Routes