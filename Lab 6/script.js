function submitData(){
var row=document.createElement("tr");
var ids=["fname","lname","sid","email","credit","dept"];
for(var i=0;i<ids.length;i++){
var td=document.createElement("td");
td.innerHTML=document.getElementById(ids[i]).value;
row.appendChild(td);
}
document.getElementById("list").appendChild(row);
}