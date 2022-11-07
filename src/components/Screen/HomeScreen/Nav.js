import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Icon } from "rsuite"
import { selectUserName, selectUserPhoto, setSignOut } from "../../../Features/userSlice"
import styles from "./Nav.module.scss"
function Nav() {
  const dispatch = useDispatch()
  const userImage = useSelector(selectUserPhoto)
  const userName = useSelector(selectUserName)
  const navigate = useNavigate()

  const signOut = () => {
    dispatch(setSignOut())
    navigate("/login")
  }

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
                <img
                  onClick={signOut}
                  className={styles.imageProfile}
                  src={userImage}
                  alt="error"
                />
                <p>{userName}</p>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Nav
