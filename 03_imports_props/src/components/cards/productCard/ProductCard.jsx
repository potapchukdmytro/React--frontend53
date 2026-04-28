function ProductCard({ title, image, price }) {
    return (
        <div className="product-card">
            <img className="product-card-image" src={image} alt={title}/>
            <h5>{title}</h5>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard;