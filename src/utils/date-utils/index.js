export class DateUtilites {
  static formatDate(dateObject) {
    const months = [
      "Январь",
      "Вефраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    const year = dateObject.getFullYear();
    const month = months[dateObject.getMonth()];
    const date = dateObject.getDate();
    const hour = dateObject.getHours();
    const min = dateObject.getMinutes();
    const sec = dateObject.getSeconds();
    return `${date} ${month} ${year} ${hour}:${min}`;
  }

  static formatTimeStamp(timestamp) {
    return DateUtilites.formatDate(new Date(timestamp * 1000));
  }
}
