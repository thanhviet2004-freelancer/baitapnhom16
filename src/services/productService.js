// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    description: 'Laptop cao cấp, hiệu năng mạnh mẽ',
    price: 25000000,
    emoji: '💻'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    description: 'Điện thoại thông minh, camera xuất sắc',
    price: 28000000,
    emoji: '📱'
  },
  {
    id: 3,
    name: 'AirPods Max',
    description: 'Tai nghe không dây cao cấp',
    price: 7400000,
    emoji: '🎧'
  },
  {
    id: 4,
    name: 'iPad Pro 12.9',
    description: 'Máy tính bảng mạnh mẽ cho công việc',
    price: 20000000,
    emoji: '📱'
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    description: 'Đồng hồ thông minh với sức khỏe',
    price: 9500000,
    emoji: '⌚'
  },
  {
    id: 6,
    name: 'MacBook Pro 16',
    description: 'Laptop chuyên nghiệp cho nhà phát triển',
    price: 45000000,
    emoji: '💻'
  },
  {
    id: 7,
    name: 'Sony WH-1000XM5',
    description: 'Tai nghe chủ động chống ồn tốt nhất',
    price: 5200000,
    emoji: '🎧'
  },
  {
    id: 8,
    name: 'Samsung 4K TV 75"',
    description: 'TV 4K siêu lớn để giải trí',
    price: 22000000,
    emoji: '📺'
  }
]

// Function to fetch products from mock API (simulating API call)
export const getProducts = async () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts)
    }, 500)
  })
}

// Optional: Fetch from real MockAPI
export const getProductsFromMockAPI = async () => {
  try {
    const response = await fetch('https://65b8c0f4e7c3fe170dffdc26.mockapi.io/api/products')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching from MockAPI:', error)
    return mockProducts
  }
}
