import React from "react"
import {
  DocumentReportIcon,
  ChartSquareBarIcon,
  UsersIcon,
  DatabaseIcon,
} from "@heroicons/react/solid"
import { Sidenav, Nav, Button } from "rsuite"
import { Link } from "react-router-dom"

function Side() {
  return (
    <div>
      <Sidenav>
        <div className="hidden md:flex md:flex-col w-60 border-r-2 fixed top-0 bottom-0 left-0 pt-[70px]">
          <Sidenav.Body className="flex flex-col list-none">
            <Nav>
              <Nav.Item className="h-[50px] py-4 px-6 border-b-2">
                <span className="flex">
                  <ChartSquareBarIcon className="w-5 mr-2" />
                  <p>Bảng điều khiển</p>
                </span>
              </Nav.Item>
              <Link to="/listProducts">
                <Nav.Item className="h-[50px] py-4 px-6 hover:text-[#1C64F2]">
                  <span className="flex">
                    <DatabaseIcon className="w-5 mr-2" />
                    <p>Danh sách sản phẩm</p>
                  </span>
                </Nav.Item>
              </Link>
              <Link to="/listCustomers">
                <Nav.Item className="h-[50px] py-4 px-6 hover:text-[#1C64F2]">
                  <span className="flex">
                    <UsersIcon className="w-5 mr-2 " />
                    <p>Khách hàng</p>
                  </span>
                </Nav.Item>
              </Link>
              <Nav.Item className="h-[50px] py-4 px-6 hover:text-[#1C64F2]">
                <span className="flex">
                  <DocumentReportIcon className="w-5 mr-2" />
                  <p>Đơn hàng</p>
                </span>
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
          <Button
            className="
            w-full bg-[#1E429F] text-[#E1EFFE] h-[32px] md:absolute md:bottom-0 cursor-pointer
          "
          >
            Thu Gọn
          </Button>
        </div>
      </Sidenav>
    </div>
  )
}

export default Side
