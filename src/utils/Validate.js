export const Required = (value) => {
  const message = "Trường này là bắt buộc"
  if (!value || !value.toString().trim()) {
    return <small className="text-left text-danger">{message}</small>
  }
}

export const EmailValid = (value) => {
  if (!/^\s*(([a-zA-Z\d]+[\._])+)?[a-zA-Z\d]+@([a-zA-Z\d]+[\.-])+[a-z]{2,}\b/.test(value)) {
    return <small className=" text-danger">Dữ liệu Email không hợp lệ</small>
  }
}

export const PhoneValid = (value) => {
  if (
    !/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/.test(
      value
    )
  ) {
    return <small className="text-left text-danger">Vui lòng nhập số vào trường này</small>
  }
  if (String(value).length < 10) {
    return <small className="text-left text-danger">Số điện thoại phải có ít nhất 10 số</small>
  }
}

export const LengthString = (value) => {
  if (value.toString().trim().length < 6) {
    return <small className="text-left text-danger">{`Mật khẩu phải từ 6 ký tự trở lên`}</small>
  }
}

export function addCommas(nStr) {
  if (nStr !== null) {
    let str = nStr
    str = String(str)
    const xx = str.split(";")
    let [x1] = xx
    const rgx = /(\d+)(\d{3})/u
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1,$2")
    }
    return x1
  } else {
    return " "
  }
}

export function convertDateToString(date) {
  if (date) {
    let dd = String(date.getDate()).padStart(2, "0")
    let mm = String(date.getMonth() + 1).padStart(2, "0")
    let yyyy = date.getFullYear()
    let newDate = dd + "-" + mm + "-" + yyyy
    return newDate
  }
  return ""
}

export const PasswordValid = (value) => {
  if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)) {
    return (
      <span className="text-center w-100 text-left text-danger">
        {`Mật khẩu phải có từ 7 đến 15 ký tự chứa ít nhất một chữ số và một ký tự đặc biệt(VD:abcde123@,..)`}
      </span>
    )
  }
}

export const checkPositiveNumber = (value) => {
  const message = "greater_than_zero"
  if (value <= 0) {
    return <small className="w-100 text-left text-danger">{message}</small>
  }
}

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined)

export const checkIntNumber = (value) => {
  if (value <= 0) {
    return <small className="w-100 text-left text-danger">{"must_be_pos_integer"}</small>
  }
}
export const quota = (value) => {
  if (value > 50000) {
    return (
      <small className="w-100 text-left text-danger">
        {"Định mức danh mục này từ 100.000 - 500.000"}
      </small>
    )
  }
}

export const checkTypeMoney = (value) => {
  if (/^\d+$/.test(value)) {
    return (
      <span className="text-center w-100 text-left text-danger">
        {`Nhập đúng định dạng số tiền (VD:1.000.000)`}
      </span>
    )
  }
}

export const checkPercentageValue = (value) => {
  if (value > 100) {
    return <small className="w-100 text-left text-danger">{"percentage_value_100"}</small>
  }
  if (value <= 0) {
    return <small className="w-100 text-left text-danger">{"percentage_value_0"}</small>
  }
}

export const checkHourValue = (value) => {
  if (value > 24) {
    return <small className="w-100 text-left text-danger">{"hour_value_24"}</small>
  }
  if (value < 0) {
    return <small className="w-100 text-left text-danger">{"hour_value_0"}</small>
  }
}

export const checkShiftValue = (value) => {
  if (value > 8) {
    return <small className="w-100 text-left text-danger">{"shift_value_8"}</small>
  }
  if (value <= 0) {
    return <small className="w-100 text-left text-danger">{"shift_value_0"}</small>
  }
}

export const checkDayInMonth = (value) => {
  if (value < 1 || value > 30) {
    return (
      <span className="text-center w-100 text-left text-danger">
        {`Nhập ngày trong tháng từ 1 đến 30`}
      </span>
    )
  }
}
function removeAscent(str) {
  if (str === null || str === undefined) return str
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
  str = str.replace(/đ/g, "d")
  return str
}
export const checkName = (value) => {
  const regexName = /^[a-zA-Z ]{2,}$/g
  return regexName.test(removeAscent(value))
}
