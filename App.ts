const add1 = document.querySelector('.add1') as HTMLInputElement;
var addQ1 = document.querySelector('.added-quan1') as Element;
var addQ2 = document.querySelector('.added-quan2') as Element;
var addQ3 = document.querySelector('.added-quan3') as Element;
var price1 = 20;
var price2 = 30;
var price3 = 40;
var emailList : string[] = [];
var sub = 0;
const quan1 = document.querySelector('.quan1') as HTMLInputElement;;
const quan2 = document.querySelector('.quan2') as HTMLInputElement;;
const quan3 = document.querySelector('.quan3') as HTMLInputElement;;

var value1 : any;
var value2 : any;
var value3 : any;
add1.addEventListener('click', addfunc);


//adding items1
function addfunc(){
value1 = addQ1.innerHTML;

++value1;
const displayValue1 = document.querySelector('.added-quan1') as Element;
displayValue1.innerHTML = value1;
quan1.setAttribute("max",value1);
console.log(value1)

//selling price
price1 = 20;
price1 = (price1 - (value1) * 0.50 )
const displayPrice1 = document.querySelector('.priceItm1') as Element;
displayPrice1.innerHTML = String(price1);
const addQ1Value = document.querySelector('.added-quan1') as HTMLInputElement;
const addQ1Value1 = parseFloat(addQ1Value.value);

if(isNaN(addQ1Value1)){

     const myValue1 =  document.querySelector('.added-quan1') as HTMLInputElement;
     myValue1.value = '0'
     const myvalue1 =  document.querySelector('.added-quan1') as HTMLInputElement;
     myvalue1.innerHTML = '0'


}

}

//adding item2
const add2 = document.querySelector('.add2')  as HTMLInputElement;
add2.addEventListener('click', addfunc2);

function addfunc2(){
value2 = addQ2.innerHTML;

++value2;
const displayValue2 = document.querySelector('.added-quan2') as Element;
displayValue2.innerHTML = value2;
quan2.setAttribute("max",value2);
console.log(value2)

//selling price
price2 = 30;
price2 = price2 - (value2 * 0.50 )
const displayPrice2 = document.querySelector('.priceItm2') as Element;
displayPrice2.innerHTML = String(price2);
const addQ2Value = document.querySelector('.added-quan2') as HTMLInputElement;
const addQ2Value2 = parseFloat(addQ2Value.value);

if(isNaN(addQ2Value2)){

     const myValue2 =  document.querySelector('.added-quan2') as HTMLInputElement;
     myValue2.value = '0'
     const myvalue2 =  document.querySelector('.added-quan2') as HTMLInputElement;
     myvalue2.innerHTML = '0'


}
}

//adding atem3
const add3 = document.querySelector('.add3')  as HTMLInputElement;
add3.addEventListener('click', addfunc3);

function addfunc3(){
value3 = addQ3.innerHTML;

++value3;
const displayValue3 = document.querySelector('.added-quan3') as Element;
displayValue3.innerHTML = value3;
quan3.setAttribute("max",value3);
console.log(value3)

//selling price
price3 = 40;
price3 = price3 - (value3 * 0.50 )
const displayPrice3 = document.querySelector('.priceItm3') as Element;
displayPrice3.innerHTML = String(price3);
const addQ3Value = document.querySelector('.added-quan3') as HTMLInputElement;
const addQ3Value3 = parseFloat(addQ3Value.value);

if(isNaN(addQ3Value3)){

     const myValue3 =  document.querySelector('.added-quan3') as HTMLInputElement;
     myValue3.value = '0'
     const myvalue3 =  document.querySelector('.added-quan3') as HTMLInputElement;
     myvalue3.innerHTML = '0'


}
}


const form = document.querySelector('#ASM-form')!;
const submit = document.querySelector('.submit') as HTMLInputElement;
const List = document.querySelector('.list') as Element;



//Removing items
form.addEventListener('submit', formsubmit)

function formsubmit(e : any){
        e.preventDefault();
        const email = document.querySelector('#email') as HTMLInputElement;
        const emailValue = email.value;
        const quantity1 = document.querySelector('#quantity1') as HTMLInputElement;
        const quantity1Value = quantity1.value;
        const quantity2 = document.querySelector('#quantity2') as HTMLInputElement;
        const quantity2Value = quantity2.value;
        const quantity3 = document.querySelector('#quantity3') as HTMLInputElement;
        const quantity3Value = quantity3.value;

        for(let i = 0; i < emailList.length; i++){
                if(emailValue == emailList[i]){
                        alert('Cannot complete request "email address exists"')
                        return null
                }
        }

        //Creating Elements
        let li = document.createElement('li');
        li.className = 'list-group-item shadow-sm';
        li.appendChild(document.createTextNode(emailValue));
        li.appendChild(document.createTextNode(` / ${quantity1Value} Ice cream : R${parseInt(quantity1Value) * price1}`));
        li.appendChild(document.createTextNode(` / ${quantity2} Pizza: R${parseInt(quantity2Value) * price2} `));
        li.appendChild(document.createTextNode(` / ${quantity3} Burger: R${parseInt(quantity3Value) * price3}`));
        List.appendChild(li);

        value1 = value1 - parseInt(quantity1Value);
        value2 = value2 - parseInt(quantity2Value);
        value3 = value3 - parseInt(quantity3Value);
        quan1.setAttribute("max",value1);
        quan2.setAttribute("max",value2);
        quan3.setAttribute("max",value3);
        const addQuan1 = document.querySelector('.added-quan1') as HTMLInputElement;
        addQuan1.innerHTML = value1;
        const addQuan2 = document.querySelector('.added-quan2') as HTMLInputElement;
        addQuan2.innerHTML = value2;
        const addQuan3 = document.querySelector('.added-quan3') as HTMLInputElement;
        addQuan3.innerHTML = value3;

        console.log(value1);

        emailList.push(emailValue)
        console.log(emailList)

        //current price update
        price1 = 20;
        price1 = price1 - (value1 * 0.50 )
        const priceUpdate1 = document.querySelector('.priceItm1') as Element;
        priceUpdate1.innerHTML = 'price1';
        //current price update
        price2 = 30;
        price2 = price2 - (value2 * 0.50 )
        const priceUpdate2 = document.querySelector('.priceItm2') as Element;
        priceUpdate2.innerHTML = 'price2';
        //current price update
        price3 = 40;
        price3 = price3 - (value3 * 0.50 )
        const priceUpdate3 = document.querySelector('.priceItm3') as Element;
        priceUpdate3.innerHTML = 'price3';


   
        console.log(`Price ${price1}`)
        console.log(`Price2 ${price2}`)
        console.log(`Price3 ${price3}`)


}




