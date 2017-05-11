module.exports = function getDate(num) {
  var today = new Date()
  today.setDate(today.getDate()+num);
  var dd = today.getDate();
  var mm = today.getMonth()+1;

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
  if(mm<10){
    mm='0'+mm;
  }

  var tomorrow = yyyy+'-'+mm+'-'+dd;
  return tomorrow
}
