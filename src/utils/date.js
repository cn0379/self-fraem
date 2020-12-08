/**
 * 
 * @param {日期} date 
 */
export const formatDate = (date) => {
  if (!(date instanceof Date)) return "";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let dayIndex = date.getDay();
  let weekday = ["日", "一", "二", "三", "四", "五", "六"];
  return [
    `${year}年${month}月${day}日`,
    `${("0" + hour).substr(-2)}:${("0" + min).substr(-2)}:${(
      "0" + sec
    ).substr(-2)}`,
    `星期${weekday[dayIndex]}`
  ];
}

/**
 * 获取当前差距天数的formatDateStr  [ YYYY-MM-DD ]
 * @param {与当前的差距天数} dayNum 
 */
export const getDay = (dayNum = 0, hasTime = false) => {
  const date = new Date()
  date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * dayNum)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  return `${year}-${('0' + month).substr(-2)}-${('0' + day).substr(-2)}${hasTime ? ` ${('0' + hour).substr(-2)}:${('0' + min).substr(-2)}:${('0' + sec).substr(-2)}` : ''}`
}