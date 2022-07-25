import React, { useState, useEffect } from "react"
import { Table } from "rsuite"
import axios from "axios"
const { Column, HeaderCell, Cell, Pagination } = Table
function TableListProducts() {
  useEffect(() => {
    axios.get("https://random-data-api.com/api/device/random_device").then((res) => {
      console.log("res;", res)
    })
  }, [])
  return (
    <div>
      <Table data={[]}>{/* <Column></Column> */}</Table>
    </div>
  )
}

export default TableListProducts
