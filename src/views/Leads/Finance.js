import React from 'react'
import Today from './today_finance'
import Overall from './OverAll_finance'
import { Card, CardHeader, Button } from "reactstrap"
import { Link } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"

export default function Finance() {

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between w-100">
            <h4 className="">Finance Dashboard</h4>
            <div className="pe-2 d-flex">
              <Link to="/merchant/customers/jmd-finance-customers/">
                <Button className="btn btn-outline-primary btn-block">Add Finance</Button>
              </Link>
              <div
                className="ps-2 justify-content-center align-items-center d-flex"
              // style={{ width: "50px", height: "50px" }}
              >
                <IoSettingsOutline color="black" size={20} />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Today />
      <Overall />
    </div>)
}
