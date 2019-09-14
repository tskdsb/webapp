var elSelectBirthday = document.getElementById("elSelectBirthday");
var elAge = document.getElementById("elAge");

elSelectBirthday.addEventListener("change", showAge);

// 地球绕太阳运行周期为365天5小时48分45秒500毫秒
miliSecondOneYear=(365*86400+5*3600+48*60+45)*1000+500;

function showAge(){
    let birthday = elSelectBirthday.value ;

    elAge.innerHTML="你的年龄是："+(Date.parse(new Date())-Date.parse(birthday))/miliSecondOneYear+"岁";

}

