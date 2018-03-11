var ws = new WebSocket("ws://" + "localhost:8888" + "/ws");
ws.onmessage = function(evt){
    var received_msg = evt.data;
    //alert(received_msg);
data_json = JSON.parse(received_msg)
//console.log(data_json[0])

txt = ""
txt += "<table border='1'>"
txt += "<th>Host</th><th>Alive</th>"

for (i in data_json){
    status = ""
    if (data_json[i] == false){
        status =  "<font color='red'>NO</font>"
    }else{
        status =  "<font color='green'>YES</font>"
    }
    txt += "<tr><td>" + i + "</td><td>" + status + "</td></tr>";
    //console.log(i)
    //console.log(data_json[i])
}
txt += "</table>"
document.getElementById("stream_data").innerHTML = txt;
}
ws.onopen = function(){
    ws.send("connection established");
}