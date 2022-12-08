function showContent(id) {
    let interior = document.getElementById("interior-info");
    let exterior = document.getElementById("exterior-info");
    let safety = document.getElementById("safety-info");
    let extra = document.getElementById("extra-info");
    let interiorList = document.getElementById("list-interior");
    let exteriorList = document.getElementById("list-exterior");
    let safetyList = document.getElementById("list-safety");
    let extraList = document.getElementById("list-extra");

    if (id === "list-interior") {
        hideTabs(interior,exterior,safety,extra);
        changeColor(interiorList,exteriorList,safetyList,extraList);
        interior.style.gridTemplateColumns = '1fr 1fr';
    } else if (id === "list-exterior") {
        hideTabs(exterior,interior,safety,extra);
        changeColor(exteriorList,interiorList,safetyList,extraList);
        exterior.style.gridTemplateColumns = '1fr 1fr';
    } else if (id === "list-safety") {
        hideTabs(safety,exterior,interior,extra);
        changeColor(safetyList,interiorList,exteriorList,extraList);
        safety.style.gridTemplateColumns = "1fr 1fr";
    } else if (id === "list-extra") {
        hideTabs(extra,safety,exterior,interior);
        changeColor(extraList,interiorList,exteriorList,safetyList,);
        extra.style.gridTemplateColumns = "1fr 1fr";
    }
}

function changeColor(fir, sec, thi, fou){
    fir.style.backgroundColor = "#ffa07a";
    sec.style.backgroundColor = "#E0EEFF";
    thi.style.backgroundColor = "#E0EEFF";
    fou.style.backgroundColor = "#E0EEFF";
}
function hideTabs(fir, sec, thi,fou){
    fir.style.display = "grid";
    sec.style.display = "none";
    thi.style.display = "none";
    fou.style.display = "none";
}