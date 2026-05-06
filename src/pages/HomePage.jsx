import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../services/productService'

function HomePage({ user }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = await getProducts()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError('Không thể tải danh sách sản phẩm')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleAddToCart = (product) => {
    if (!user) {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng')
      return
    }
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`)
  }

  return (
    <div>
      {user && (
        <div className="user-info">
          {user.picture && <img src={user.picture} alt={user.name} className="user-avatar" />}
          <div className="user-details">
            <h4>Chào mừng, {user.name}!</h4>
            <p>Email: {user.email}</p>
            <p>Đăng nhập bằng: {user.provider}</p>
          </div>
        </div>
      )}

      <div className="products-section">
        <h3>Danh sách sản phẩm</h3>
        
        {loading && <div className="loading">Đang tải sản phẩm...</div>}
        {error && <div className="error">{error}</div>}

        {!loading && products.length > 0 && (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                user={user}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
