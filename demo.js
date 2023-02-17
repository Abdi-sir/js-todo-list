
var str = prompt("what would like to do");
var x = ["to"];
while (str != "quit") {
    if (str == "new") {
        var newtodo = prompt("enter new to do");
        x.push(newtodo);
        console.log(newtodo + " is added to list");
    } else if (str == "list") {//modification about forEach function 
        console.log("************");
        x.forEach(function (list) {//x.forEach(function(list,i){......}}
            console.log(x.indexOf(list) + ": " + list);
        });
        console.log("************");
    } else if (str == "delete") {
        var del = prompt("enter the delet item");
        var index = str.indexOf(del);
        x.splice(index, 1);
        console.log(del + " is removed");

    } else {
        console.log("error");
    }
    str = prompt("what would like to do");

}
console.log("you quit the appp");