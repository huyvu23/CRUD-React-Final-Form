import React from "react"
import avatar from "../../../assets/avatar.jpg"
import styles from "./Nav.module.scss"
import { Icon } from "rsuite"
import { Link } from "react-router-dom"
function Nav() {
  return (
    <div className={styles.navContainer}>
      <header>
        <nav>
          <ul>
            <Link to="/">
              <li className={styles.topic}>
                <span>
                  <a href="/">CRUD</a>
                </span>
              </li>
            </Link>
            <li className={styles.bellAndAvatar}>
              <div className={styles.bell}>
                <Icon icon="bell" className={styles.icon} />
              </div>
              <div>
                <img className={styles.imageProfile} src={avatar} alt="error" />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Nav
