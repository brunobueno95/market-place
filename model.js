let sum = 4000;
let boughtProducts = "";
let soldProducts = "";
let currentPage = '';
let showView = ''

function product(name, price, used, picture){
    this.name= name,
    this.price= parseInt(price),
    this.used = used,
    this.picture = picture,
    this.boughtSold = '',
    this.discountGiven = '',
    this.discount = function () {
        if(this.used == 'Used'){
            this.price *= 0.8
        }
        
    }
}

const articleBlueprint = {
    buttontext : '',
    functionName : '',
    className : '',
    classImage : '',
}

objectArray= [new product('Playstation 4', 1500 , 'Used','img/ps4img.jpg'),new product('Nike Air', 1000 , 'New','img/nikeairimg.webp'),
new product('Dry Suit', 5000 , 'Used','img/drysuitimg.jpg'),new product('Sunglasses', 600 , 'New','img/sunglassesimg.webp'),
new product('Snowboard', 900 , 'Used','img/snowboardimg.webp')]


let input = new product('', '','','');

const model = {input, objectArray, sellArray: [] };