import { Col, Row, Card, CardBody, CardHeader, Button } from "reactstrap"
import { useState } from "react"
import AdvanceServerSide from "@src/views/Components/DataTable/AdvanceServerSide.js"
import { baseURL } from "@src/assets/auth/jwtService.js"
import { Edit3, Eye, Trash2 } from "react-feather"
import { LuTrendingUp } from "react-icons/lu"
import { LiaUserSlashSolid, LiaUserSolid } from "react-icons/lia"
import { PiMoneyThin } from "react-icons/pi"
import { Link } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"

/* eslint-disable */
const Customers = () => {
  const [tableData, setTableData] = useState([])
  const [custData, setCustData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState([])

  const getData = (currentPage = 0, currentEntry = 10, searchValue = "", advanceSearchValue = {}) => {
    setIsLoading(true)
    const form_data = new FormData()
    const url = new URL(`${baseURL}/customers/merchant/all_cust_dashboard/`)
    // form_data.append("draw", "1")
    // form_data.append("length", "10")
    // form_data.append("start", "1")
    Object.entries(advanceSearchValue).map(([key, value]) => value && form_data.append(key, value))
    form_data.append("slug", "customer_data")
    form_data.append("table_name", "overAll_finance")
    form_data.append("page", currentPage + 1)
    form_data.append("size", currentEntry)
    form_data.append("searchValue", searchValue)


    fetch(url, {
      method: "POST",
      body: form_data
    })
      .then((data) => data.json())
      .then((resp) => {
        setCustData(resp.success)
        console.log("hh", resp.success.customer_details_obj)
        setTableData(resp.success.customer_details_obj)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })

    // console.log("Main TableData", tableData)
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  const columns = [
    {
      name: "Customer Name",
      minWidth: "200px",
      selector: (row) => row?.customer_details_customer_name,
      type: 'text',
      isEnable: true
    },
    {
      name: "Customer Group",
      minWidth: "100px",
      selector: (row) => row?.customer_details_phone_no ? '' : row.customer_details_phone_no,
      type: 'text',
      isEnable: true
    },
    {
      name: "Mobile Number",
      minWidth: "150px",
      selector: (row) => row?.customer_details_phone_no,
      type: 'text',
      isEnable: true
    },
    {
      name: "Email",
      minWidth: "200px",
      selector: (row) => row?.customer_details_email,
      type: 'text',
      isEnable: true
    },
    {
      name: "Location",
      minWidth: "200px",
      selector: (row) => row?.customer_details_location,
      type: 'text',
      isEnable: true
    },
    {
      name: "Action",
      minWidth: "50px",
      selector: (row) => (
        <div className="d-flex ms-1 justify-content-center align-items-center text-center gap-1">
          <Eye size={15} />
          <Edit3 size={15} />
          <Trash2 size={15} />
        </div>
      )
    }
  ]


  const customerStatisticsData = [
    {
      name: "Total Customers",
      data: custData.customer_detailsrecordsTotal,
      type: "number",
      icon: <LuTrendingUp size={30} className="text-warning" />,
      iconStyle: "bg-warning bg-opacity-25"
    },
    {
      name: "Active Customers",
      data: custData.customer_detailsrecordsFiltered,
      type: "number",
      icon: <LiaUserSolid size={30} className="text-info" />,
      iconStyle: "bg-info bg-opacity-25"
    },
    {
      name: "Inactive Customers",
      data: custData.total_loan_amount,
      type: "number",
      icon: <LiaUserSlashSolid size={30} className="text-danger" />,
      iconStyle: "bg-danger bg-opacity-25"
    },
    {
      name: "Earnings Today",
      data: custData.total_emi_amt,
      type: "money",
      icon: <PiMoneyThin size={30} className="text-success" />,
      iconStyle: "bg-success bg-opacity-25"
    }
  ]


  return (
    <>
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between w-100">
            <h2 className="fw-bolder">Customer Dashboard</h2>
            <div className="d-flex">
              <Link to="/merchant/customers/add_customer">
                <Button color="btn btn-primary text-nowrap">Add Customer</Button>
              </Link>
              <div
                className="ms-1 px-1 bg-success justify-content-center align-items-center d-flex rounded h-100 w-100"
              // style={{ width: "50px", height: "50px" }}
              >
                <IoSettingsOutline color="black" size={20} />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Row className="mb-2">
            <h4 className="">Statistics</h4>
          </Row>
        </CardHeader>
        <CardBody>
          <div className="mx-2 d-flex justify-content-between ">
            {customerStatisticsData.map((ele) => (
              <Row className="align-items-center">
                <Col
                  xs="2"
                  className={`d-flex justify-content-start align-items-center d-black ${ele.iconStyle && ele.iconStyle
                    }`}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%"
                  }}
                >
                  {ele.icon}
                </Col>
                <Col className="ms-1">
                  <p className=" fw-bolder" style={{ fontSize: "15px", margin: "0px" }}>
                    {ele.type === "money" ? `₹${ele.data}` : ele.data}
                  </p>
                  <h4 className="fs-6 fw-light" style={{ margin: "0px" }}>{ele.name}</h4>
                </Col>
              </Row>
            ))}
          </div>
        </CardBody>
      </Card>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <AdvanceServerSide
                tableName="Customers"
                tableCol={columns}
                data={tableData}
                isLoading={isLoading}
                getData={getData}
                count={tableData?.recordsTotal}
                selectableRows={true}
                setSelectedRows={setSelected}
                selectedRows={selected}
                advanceFilter={true}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Customers
