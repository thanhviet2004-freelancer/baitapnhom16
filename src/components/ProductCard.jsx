function ProductCard({ product, user, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.emoji || '📦'}
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
          }).format(product.price)}
        </div>
        <div className="product-actions">
          {user && (
            <button
              className="btn btn-add-cart btn-small"
              onClick={() => onAddToCart(product)}
            >
              🛒 Thêm vào giỏ
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
