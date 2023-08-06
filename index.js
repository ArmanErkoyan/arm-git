var arr = [2, 3, 6, 3, 9, 7]
var arr1 = [2, 3, 6, 32, 9, 71]
var arr2 = [2, 3, 6, 34, 90, 7]

function a(num) {
    let k = 0
    for (let index = 0; index < arr.length; index++) {
        k += num[index]

    }
    console.log(k)
}
a(arr)
a(arr1)
a(arr2)

console.log(bc);
function b() {
    var bc = 0
}
b()


let ops = 0;
function color(elem) {
    ops++;
    console.log(typeof ops,ops);
    elem.innerHTML = ops
    document.getElementById('input').innerHTML = "Armancho";
  
}