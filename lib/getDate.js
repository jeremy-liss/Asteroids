module.exports = function getDate(num) {
  var date = new Date()
  date.setDate(date.getDate()+num);
  var dd = date.getDate();
  var mm = date.getMonth()+1;

  var yyyy = date.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
  if(mm<10){
    mm='0'+mm;
  }

  var date = yyyy+'-'+mm+'-'+dd;
  return date
}
