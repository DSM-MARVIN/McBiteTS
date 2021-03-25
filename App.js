"use strict";
var add1 = document.querySelector('.add1');
var addQ1 = document.querySelector('.added-quan1');
var addQ2 = document.querySelector('.added-quan2');
var addQ3 = document.querySelector('.added-quan3');
var price1 = 20;
var price2 = 30;
var price3 = 40;
var emailList = [];
var sub = 0;
var quan1 = document.querySelector('.quan1');
;
var quan2 = document.querySelector('.quan2');
;
var quan3 = document.querySelector('.quan3');
;
var value1;
var value2;
var value3;
add1.addEventListener('click', addfunc);
//adding items1
function addfunc() {
    value1 = addQ1.innerHTML;
    ++value1;
    var displayValue1 = document.querySelector('.added-quan1');
    displayValue1.innerHTML = value1;
    quan1.setAttribute("max", value1);
    console.log(value1);
    //selling price
    price1 = 20;
    price1 = (price1 - (value1) * 0.50);
    var displayPrice1 = document.querySelector('.priceItm1');
    displayPrice1.innerHTML = String(price1);
    var addQ1Value = document.querySelector('.added-quan1');
    var addQ1Value1 = parseFloat(addQ1Value.value);
    if (isNaN(addQ1Value1)) {
        var myValue1 = document.querySelector('.added-quan1');
        myValue1.value = '0';
        var myvalue1 = document.querySelector('.added-quan1');
        myvalue1.innerHTML = '0';
    }
}
//adding item2
var add2 = document.querySelector('.add2');
add2.addEventListener('click', addfunc2);
function addfunc2() {
    value2 = addQ2.innerHTML;
    ++value2;
    var displayValue2 = document.querySelector('.added-quan2');
    displayValue2.innerHTML = value2;
    quan2.setAttribute("max", value2);
    console.log(value2);
    //selling price
    price2 = 30;
    price2 = price2 - (value2 * 0.50);
    var displayPrice2 = document.querySelector('.priceItm2');
    displayPrice2.innerHTML = String(price2);
    var addQ2Value = document.querySelector('.added-quan2');
    var addQ2Value2 = parseFloat(addQ2Value.value);
    if (isNaN(addQ2Value2)) {
        var myValue2 = document.querySelector('.added-quan2');
        myValue2.value = '0';
        var myvalue2 = document.querySelector('.added-quan2');
        myvalue2.innerHTML = '0';
    }
}
//adding atem3
var add3 = document.querySelector('.add3');
add3.addEventListener('click', addfunc3);
function addfunc3() {
    value3 = addQ3.innerHTML;
    ++value3;
    var displayValue3 = document.querySelector('.added-quan3');
    displayValue3.innerHTML = value3;
    quan3.setAttribute("max", value3);
    console.log(value3);
    //selling price
    price3 = 40;
    price3 = price3 - (value3 * 0.50);
    var displayPrice3 = document.querySelector('.priceItm3');
    displayPrice3.innerHTML = String(price3);
    var addQ3Value = document.querySelector('.added-quan3');
    var addQ3Value3 = parseFloat(addQ3Value.value);
    if (isNaN(addQ3Value3)) {
        var myValue3 = document.querySelector('.added-quan3');
        myValue3.value = '0';
        var myvalue3 = document.querySelector('.added-quan3');
        myvalue3.innerHTML = '0';
    }
}
var form = document.querySelector('#ASM-form');
var submit = document.querySelector('.submit');
var List = document.querySelector('.list');
//Removing items
form.addEventListener('submit', formsubmit);
function formsubmit(e) {
    e.preventDefault();
    var email = document.querySelector('#email');
    var emailValue = email.value;
    var quantity1 = document.querySelector('#quantity1');
    var quantity1Value = quantity1.value;
    var quantity2 = document.querySelector('#quantity2');
    var quantity2Value = quantity2.value;
    var quantity3 = document.querySelector('#quantity3');
    var quantity3Value = quantity3.value;
    for (var i = 0; i < emailList.length; i++) {
        if (emailValue == emailList[i]) {
            alert('Cannot complete request "email address exists"');
            return null;
        }
    }
    //Creating Elements
    var li = document.createElement('li');
    li.className = 'list-group-item shadow-sm';
    li.appendChild(document.createTextNode(emailValue));
    li.appendChild(document.createTextNode(" / " + quantity1Value + " Ice cream : R" + parseInt(quantity1Value) * price1));
    li.appendChild(document.createTextNode(" / " + quantity2 + " Pizza: R" + parseInt(quantity2Value) * price2 + " "));
    li.appendChild(document.createTextNode(" / " + quantity3 + " Burger: R" + parseInt(quantity3Value) * price3));
    List.appendChild(li);
    value1 = value1 - parseInt(quantity1Value);
    value2 = value2 - parseInt(quantity2Value);
    value3 = value3 - parseInt(quantity3Value);
    quan1.setAttribute("max", value1);
    quan2.setAttribute("max", value2);
    quan3.setAttribute("max", value3);
    var addQuan1 = document.querySelector('.added-quan1');
    addQuan1.innerHTML = value1;
    var addQuan2 = document.querySelector('.added-quan2');
    addQuan2.innerHTML = value2;
    var addQuan3 = document.querySelector('.added-quan3');
    addQuan3.innerHTML = value3;
    console.log(value1);
    emailList.push(emailValue);
    console.log(emailList);
    //current price update
    price1 = 20;
    price1 = price1 - (value1 * 0.50);
    var priceUpdate1 = document.querySelector('.priceItm1');
    priceUpdate1.innerHTML = 'price1';
    //current price update
    price2 = 30;
    price2 = price2 - (value2 * 0.50);
    var priceUpdate2 = document.querySelector('.priceItm2');
    priceUpdate2.innerHTML = 'price2';
    //current price update
    price3 = 40;
    price3 = price3 - (value3 * 0.50);
    var priceUpdate3 = document.querySelector('.priceItm3');
    priceUpdate3.innerHTML = 'price3';
    console.log("Price " + price1);
    console.log("Price2 " + price2);
    console.log("Price3 " + price3);
}
