import React from "react"
import avatar from "../../assets/avatar.jpg"
import { MenuIcon } from "@heroicons/react/outline"
import { BellIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="h-[70px] w-full bg-[white]">
      <header class="w-full h-[70px] bg-[white] border-b-2 z-[100] fixed">
        <nav class="h-full px-5">
          <ul class="h-full flex items-center justify-between">
            <Link to="/">
              <li>
                <span class="hidden md:flex text-2xl font-bold not-italic text-[#1F2937]">
                  <a href="/home">CRUD</a>
                </span>
                <span class="md:hidden">
                  <MenuIcon className="w-5 " />
                </span>
              </li>
            </Link>
            <li class="flex items-center">
              <div class="pr-[20px] cursor-pointer">
                <BellIcon className="w-5 " />
              </div>
              <div>
                <img
                  class="w-[32px] h-[32px] rounded-[16px] cursor-pointer object-cover"
                  src={avatar}
                  alt="error"
                />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Nav
