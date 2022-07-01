function disableSellDiscount(){
    for( i = 0; i < model.sellArray.length; i++){
     if(model.sellArray[i].used == 'New'){
         model.sellArray[i].discountGiven = 'disabled'
     }
    }
 }

 function disableButton(){
     for(i=0;i<model.objectArray.length;i++ ){
         if(model.objectArray[i].used == 'New'){
             model.objectArray[i].discountGiven = 'disabled'
         }
     }
     
    
 }
 function clickDiscount(index){
    model.objectArray[index].discount()
    model.objectArray[index].discountGiven = 'disabled';
    updateView() 
    model.sellArray[index].discount()
    model.sellArray[index].discountGiven = 'disabled';
    console.log('Clicked')

updateView()   
}


function addProduct(){
    model.sellArray.push(new product(model.input.name, parseInt(model.input.price), model.input.used, model.input.picture));
    disableSellDiscount();
    updateView();
}

function buyProduct(index){
    if(sum >= model.objectArray[index].price){
        sum -= model.objectArray[index].price 
        boughtProducts +=" " + model.objectArray[index].name + ", "
    model.objectArray[index].boughtSold= 'disabled';
    }
    else {
        alert('Sorry, you dont have enough money to make this purchase')
    }
    updateView()
}


function sellProduct(index){
sum += model.sellArray[index].price;
model.sellArray[index].boughtSold= 'disabled';
soldProducts +=" " + model.sellArray[index].name + ", "

updateView()
}