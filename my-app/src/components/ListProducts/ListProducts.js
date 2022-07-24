import { useState } from "react"
import { SearchIcon } from "@heroicons/react/outline"
import { Button } from "rsuite"
import TableListProducts from "./TableListProducts"

function ListProducts() {
  const [show, setShow] = useState(true)

  return (
    <div className="md:ml-[240px]">
      <section class="mt-[25px] mx-6">
        <div className="w-full overflow-visible bg-white shadow-lg px-[16px] py-[24px]">
          <h1 class="font-semibold text-[20px] text-black font-weight">Danh sách sản phẩm</h1>
          <section class="mt-[28px] flex justify-between">
            <div class="flex items-center">
              <div class="flex border-2 rounded">
                <input
                  id="inputSearchProduct"
                  type="text"
                  class="px-2 py-2 w-80 h-10"
                  placeholder="Search..."
                />
                <button class="flex items-center justify-center px-4 border-l">
                  <SearchIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
            <div>
              <Button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Thêm mới
              </Button>
              <Button
                onClick={() => {
                  setShow(!show)
                }}
                className="
                text-black bg-white hover:text-[blue] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
                 text-sm px-5 py-2.5 mr-2 mb-2 shadow-lg
                "
              >
                {show ? "Bộ lọc" : "Ẩn bộ lọc"}
              </Button>
            </div>
          </section>
          <TableListProducts />
        </div>
      </section>
    </div>
  )
}

export default ListProducts
