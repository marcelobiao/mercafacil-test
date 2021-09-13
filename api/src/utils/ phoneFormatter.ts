function phoneformatter(str) {
  const re = /(\d{2})(\d{2})(\d{5})(\d{4})/;
  const myArray = str.match(re);
  return (
    '+' + myArray[1] + ' (' + myArray[2] + ') ' + myArray[3] + '-' + myArray[4]
  );
}

export default phoneformatter;
