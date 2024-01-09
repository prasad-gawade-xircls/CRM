import {  Col, Row, Card, CardBody, CardHeader, Button} from "reactstrap"
import { useState } from "react"
import AdvanceServerSide from "@src/views/Components/DataTable/AdvanceServerSide.js"
import { baseURL } from "@src/assets/auth/jwtService.js"
import { Edit3, Eye, Trash2 } from "react-feather"
import { LuTrendingUp } from "react-icons/lu"
import { LiaUserSlashSolid, LiaUserSolid } from "react-icons/lia"
import { PiMoneyThin } from "react-icons/pi"

/* eslint-disable */
const Customers = () => {
  const [tableData, setTableData] = useState([])
  const [custData, setCustData ] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState([])

  const getData = (currentPage = 0, currentEntry = 10, searchValue = "", advanceSearchValue = {}) => {
    setIsLoading(true)
    const form_data = new FormData()
    const url = new URL(`${baseURL}/customers/merchant/all_cust_dashboard/`)
    Object.entries(advanceSearchValue).map(([key, value]) => value && form_data.append(key, value))
    form_data.append("slug", "add_insurance")
    form_data.append("table_name", "today_insurance")
    form_data.append("page", currentPage + 1)
    form_data.append("size", currentEntry)
    form_data.append("searchValue", searchValue)

    fetch(url, {
      method: "POST",
      body: form_data
    })
      .then((data) => data.json())
      .then((resp) => {
        setCustData(resp)
        console.log("hh", resp)
        setTableData(resp.insurance)
        setIsLoading(false)
      })
      .catch((error) => {
        // console.log(error)
        setIsLoading(false)
      })

    }

//   useEffect(() => {
//     getData()
//   }, [])

const columns = [
    {
      name: "Customer Name",
      minWidth: "150px",
      selector: (row) => (
        row?.customer_name
        ),
      type: 'text',
      isEnable: true
    },
    {
      name: "Brand",
      minWidth: "150px",
      selector: (row) => row?.brand,
      type: 'number',
      isEnable: true
    },
    {
      name: "Model",
      minWidth: "200px",
      selector: (row) => row?.car_model,
      type: 'text',
      isEnable: true
    },
    {
      name: "Variant",
      minWidth: "200px",
      selector: (row) => row?.variant,
      type: 'text',
      isEnable: true
    },
    {
      name: "Policy Number",
      minWidth: "200px",
      selector: (row) => row?.policy_number,
      type: 'text',
      isEnable: true
    },
    {
      name: "Insurance Company",
      minWidth: "200px",
      selector: (row) => row?.insurance_company,
      type: 'text',
      isEnable: true
    },
    {
      name: "Policy Purchase Date",
      minWidth: "200px",
      selector: (row) => row?.policy_purchase_date,
      type: 'text',
      isEnable: true
    },
    {
      name: "Policy Expiry Date",
      minWidth: "200px",
      selector: (row) => row?.policy_expiry_date,
      type: 'text',
      isEnable: true
    },
    {
      name: "Ammount",
      minWidth: "200px",
      selector: (row) => row?.amount,
      type: 'text',
      isEnable: true
    },
    {
      name: "Action",
      minWidth: "50px",
      selector: (row) => (
        <div className="d-flex ms-1 justify-content-center align-items-center text-center gap-1">
          <Eye size={15}/>
          <Edit3  size={15}/>
          <Trash2 size={15}/>
        </div>
      )
    }
  ]

  const customerStatisticsData = [
    {
      name: "All Insurance",
      data: custData.recordsTotal,
      type: "number",
      icon: <LuTrendingUp size={30} className="text-warning" />,
      iconStyle: "bg-warning bg-opacity-25"
    },
    {
      name: "Today's Insurance",
      data: custData.recordsFiltered,
      type: "number",
      icon: <LiaUserSolid size={30} className="text-info" />,
      iconStyle: "bg-info bg-opacity-25"
    },
    {
      name: "Total Customers Insured",
      data: custData.total_customers      ,
      type: "number",
      icon: <LiaUserSlashSolid size={30} className="text-danger" />,
      iconStyle: "bg-danger bg-opacity-25"
    },
    {
      name: "Total Amount",
      data: custData.total_amount,
      type: "money",
      icon: <PiMoneyThin size={30} className="text-success" />,
      iconStyle: "bg-success bg-opacity-25"
    }
  ]
  console.log("Main TableData", tableData)

  return (
    <>

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
                tableName="Upcoming Insurance"
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
