import React from 'react'
import { Card, CardHeader, Button } from 'reactstrap'
import { Link } from "react-router-dom"
import Today from './today_insurance'
import Overall from './OverAll_insurance'

export default function Finance() {

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between w-100">
            <h2 className="fw-bolder">Insurance Dashboard</h2>
            <div className="d-flex">
              <Link to="/merchant/customers/add-insurance/">
                <Button color="secondary text-nowrap">Add Insurance</Button>
              </Link>
              <div
                className="ms-1 px-1 bg-secondary justify-content-center align-items-center d-flex rounded h-100 w-100"
              // style={{ width: "50px", height: "50px" }}
              >
                {/* <IoSettingsOutline color="white" size={20} /> */}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Today />
      <Overall />
    </div>)
}
