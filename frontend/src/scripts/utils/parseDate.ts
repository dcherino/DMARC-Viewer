const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();

  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month.toString();

  return `${day}/${month}/${year}`;
};

export default parseDate;