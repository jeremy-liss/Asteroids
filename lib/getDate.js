module.exports = {
  getToday:getToday,
  getYesterday: getYesterday,
  getTomorrow: getTomorrow
}


function getToday(){
  var today = new Date()

  var dd = today.getDate();
  var mm = today.getMonth()+1;

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
  if(mm<10){
    mm='0'+mm;
  }

  var today = yyyy+'-'+mm+'-'+dd;
  return today
}

function getYesterday(){
  var today = new Date()
  today.setDate(today.getDate() - 1);
  var dd = today.getDate();
  var mm = today.getMonth()+1;

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
  if(mm<10){
    mm='0'+mm;
  }

  var yesterday = yyyy+'-'+mm+'-'+dd;
  return yesterday
}

function getTomorrow(){
  var today = new Date()
  today.setDate(today.getDate()+1);
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
