/* 当前时间格式化 */
_getcurrentTime(){
    var d = new Date();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var day = d.getDay();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ms = d.getMilliseconds();
    var curDateTime = d.getFullYear() + "年";
    if (month > 9){
      curDateTime += month + "月";
    }else{
      curDateTime += month + "月";
    }
    if (date > 9){
      curDateTime = curDateTime + data + "日";
    }else{
      curDateTime = curDateTime + data + "日";
    }
  
    if (hours > 9){
      curDateTime = curDateTime + hours +"时";
    }else{
      curDateTime = curDateTime + hours +"时";
    }
  
    if (minutes > 9) {
      curDateTime = curDateTime + minutes + "分";
    }else{
      curDateTime = curDateTime + minutes + "分";
    }
    return curDateTime;
  },
  /* 当前时间格式化 */