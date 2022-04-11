let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("div1");

play.onclick = ()=>{
    result.innerHTML = codes.value;
    localStorage.setItem("result", codes.value);
};
remove.onclick = ()=>{
    result.innerHTML = "";
    // codes.Value = "";
}
onload = ()=>{
    codes.value = localStorage.getItem("result");
    result.innerHTML = codes.value;
}

let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let data3 = document.getElementById("ali1");
let data4 = document.getElementById("ali2");
let data5 = document.getElementById("navbarDropdown");
let data6 = document.getElementById("ali3");
let data7 = document.getElementById("ali4");
let data8 = document.getElementById("ali5");

arabic.onclick = ()=>{
    data1("arabic");
    localStorage.setItem("lang","arabic");
}
english.onclick = ()=>{
    data1("english");
    localStorage.setItem("lang","english");
};

onload = ()=>{
    data1(localStorage.getItem("lang"));
}
function data1(data2){
if(data2 === "arabic"){
data4.innerHTML = "محرر اكواد Mr Ali";
data3.innerHTML = "مراسلتنا";
data5.innerHTML = "متابعتنا";
data6.innerHTML = "مراسلتنا";
data7.innerHTML = "متابعتنا على فيسبوك";
data8.innerHTML = "متابعتنا على انستغرام";
remove.innerHTML = "حذف الاكواد";
play.innerHTML = "تشغيل";
}else if(data2 === "english"){
    data4.innerHTML = "Editor Mr Ali";
    data3.innerHTML = "Message Us";
    data5.innerHTML = "Follow Us";
    data6.innerHTML = "Message Us";
    data7.innerHTML = "Follow for Facebook";
    data8.innerHTML = "Follow for Instagram";
    remove.innerHTML = "Delete";
    play.innerHTML = "Run";
}
}
