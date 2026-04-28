import ProductCard from "./../cards/productCard/ProductCard";

function Products() {
    return (
        <div className="products-container">
            <ProductCard
                title="Дзеркало A-5 з LED-підсвічуванням"
                image="https://content2.rozetka.com.ua/goods/images/big/234197731.jpg"
                price="1 580₴"
            />
            <ProductCard
                title="Великий двокімнатний кемпінговий намет на 4–8 осіб"
                image="https://content2.rozetka.com.ua/goods/images/big/580887464.png"
                price="5 990₴"
            />
            <ProductCard
                title="Універсальний спрей Chante Clair Марсельське мило 600 мл"
                image="https://content2.rozetka.com.ua/goods/images/big/451764263.jpg"
                price="99₴"
            />
            <ProductCard
                title="Чоловічі кросівки Puma Anzarun Lite 37112802 44 (9.5) 28.5 см Puma Black-Puma White"
                image="https://content2.rozetka.com.ua/goods/images/big/204367699.jpg"
                price="2 690₴"
            />
        </div>
    );
}

export default Products;
