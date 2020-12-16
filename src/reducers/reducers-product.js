import Product from '../components/Products'

function products(){
    return(
        [new Product(1,"iPhone 11",71000,1,"/images/iphone11.jpg"),
                new Product(3,"Apple watch SE",34000,1,"/images/watchSE.jpg"),
                new Product(2,"iPhone 6s",25000,1,"/images/iphone6s.jpg")]
    );
}

export default products;