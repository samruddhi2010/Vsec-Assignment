var topName = "";
var topPercentage = 0;


function calculate() {

    var name = document.getElementById("name").value;
    var phy = Number(document.getElementById("phy").value);
    var chem = Number(document.getElementById("chem").value);
    var eng = Number(document.getElementById("eng").value);

    var total = phy + chem + eng;
    var percentage = (total / 300) * 100;


    document.getElementById("total").value = total;
    document.getElementById("percentage").value = percentage.toFixed(2) + "%";

    var table = document.getElementById("studentTable");

    var row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = total;
    row.insertCell(2).innerHTML = percentage.toFixed(2) + "%";


if (percentage > topPercentage) {
        topPercentage = percentage;
        topName = name;

        document.getElementById("topper").innerHTML="Topper:"+topName;
        

    }
}