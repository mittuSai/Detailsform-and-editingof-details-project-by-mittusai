var allInputs=document.querySelectorAll("input")
function storeData(){
    var eName=allInputs[0].value
    var eId=allInputs[1].value
    var eDes=allInputs[2].value 
    var eSal=allInputs[3].value
    var ePhn=allInputs[4].value
    var eEmail=allInputs[5].value
    localStorage.setItem("EName",eName);
    localStorage.setItem("EId",eId);
    localStorage.setItem("EDesignation",eDes);
    localStorage.setItem("ESalary",eSal);
    localStorage.setItem("EPhn",ePhn);
    localStorage.setItem("EmpEmail",eEmail);
    
}
var outPut=document.getElementsByClassName("getOutput")
function getOutPut(){
    var eName=localStorage.getItem("EName")
    var eId=localStorage.getItem("EId")
    var eDes=localStorage.getItem("EDesignation")
    var eSal=localStorage.getItem("ESalary")
    var ePhn=localStorage.getItem("EPhn")
    var eEmail=localStorage.getItem("EmpEmail")
    outPut[0].innerHTML=eName
    outPut[1].innerHTML=eId
    outPut[2].innerHTML=eDes
    outPut[3].innerHTML=eSal
    outPut[4].innerHTML=ePhn
    outPut[5].innerHTML=eEmail
}
function deleteItem(keyVal){
    localStorage.removeItem(keyVal);
}
function clearData(){
    localStorage.clearData()
}