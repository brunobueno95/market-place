
function updateView(){
    let html = '';
    html += `<h1 >Bruno's Market Place</h1><hr>
    Your Sum : ${sum} kr<br><br>
    Products you bought:${boughtProducts}<br><br>
    Products you sold:${soldProducts}<hr> `
    

    html+= `Product <input class="inputBox" type="text" oninput="model.input.name = this.value">
            Price <input class="inputBox" type="number" oninput="model.input.price = this.value">
            <input  type="radio"  name="Used" value="Used" onchange="model.input.used = this.value"> Used
            <input type="radio"  name="Used" value="New" onchange="model.input.used = this.value"> New
            <br><br>    Picture <input class="inputBox" type="text" placeholder="Paste the URL" oninput="model.input.picture = this.value">
            <button onclick="addProduct()">Sell your product</button><br>
            <hr> 
            <button onclick="changePage('buyP')" >show products to buy</button>  
            <button onclick="changePage('sellP')">show products to sell</button>  <button onclick="changePage('buyAndSellP')">show all products</button>
            <hr><br>
            `
    
            
            if(currentPage == 'buyAndSellP'){
            html += buyOrSellProducts( model.objectArray, 'buy');
            html += buyOrSellProducts( model.sellArray, 'sell');
          }
          if(currentPage == 'buyP') html += buyOrSellProducts( model.objectArray, 'buy');
          if(currentPage == 'sellP') html += buyOrSellProducts( model.sellArray, 'sell');   
            

    
    document.getElementById('app').innerHTML = html
}

function changePage(page){
    currentPage = page;
    updateView()
}



function buyOrSellProducts(buyOrsellModel, btext) {
    console.log(currentPage)
    let html = '';
    
    let buttontext = '';
    let functionName = '';
    let className = '';
    let classImage = '';
    if(btext == 'buy'){
        buttontext = 'buy'
        functionName = 'buyProduct';
        className= 'product';
        classImage = 'image';
        
    }

    else {buttontext = 'sell'
    functionName = 'sellProduct';
    className ="productSell"
    classImage = 'imageSell';
    
}

    for (let i = 0; i < buyOrsellModel.length; i++) {
        html += ` <div class="${className}" >
            <p>Product :${buyOrsellModel[i].name}</p>
            
            <p>Price:${buyOrsellModel[i].price} kr</p>
            
            <p>Used or New: ${buyOrsellModel[i].used}</p>
            <button class="btndiv" ${buyOrsellModel[i].discountGiven} onclick = "clickDiscount(${i})">Used Discount</button><br>
            
            <img class="${classImage}" src="${buyOrsellModel[i].picture}" alt ="${buyOrsellModel[i].name}"><br> 
            <button class="btndiv" ${buyOrsellModel[i].boughtSold} onclick="${functionName}(${i})">${buttontext}</button>
           
            </div>
            
        `;
    }


    return html;

  

}


