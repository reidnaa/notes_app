const name = 'andrew';

const userAge = 35;

const user= {
    name,
    userAge
}

// console.log(user);

const product = {
    label: 'red notebook',
    price: '#3.00',
    salePrice: undefined,
    stock: 40
}

// const {label: productLabel, stock} = product;
// console.log(productLabel );

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);