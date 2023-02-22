import dayjs from "dayjs"

// 毫秒转日期
const msToDate = (ms: number | string) => {
  if (typeof ms === 'string'){
    return dayjs(parseInt(ms)).format('YYYY-MM-DD')
  }
  return dayjs(ms).format('YYYY-MM-DD')
}

export {
  msToDate
}