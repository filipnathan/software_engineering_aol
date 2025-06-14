import { useParams, Link } from 'react-router-dom'

const mockOrders = {
  A003: {
    id: 'A003',
    date: '20/5/2025',
    payment: 'Debit',
    status: 'Delivered',
    items: [
      {
        name: 'Lyvit syrup 60ml',
        description: 'per botol',
        image: 'https://via.placeholder.com/80',
        price: 52500,
        qty: 1
      },
      {
        name: 'Sumagesic 600mg 4 tablet',
        description: 'per strip',
        image: 'https://via.placeholder.com/80',
        price: 3200,
        qty: 3
      }
    ]
  }
  // Add A001, A002 if needed
}

export default function OrderDetailPage() {
  const { orderId } = useParams()
  const order = mockOrders[orderId]

  if (!order) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold text-red-600">Order not found</h1>
      </div>
    )
  }

  const total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Order Summary */}
      <div className="bg-blue-100 p-4 rounded shadow text-sm font-medium grid grid-cols-4 md:grid-cols-6 gap-4">
        <div className="col-span-1">Order ID:<br /><span className="text-black font-bold">{order.id}</span></div>
        <div className="col-span-1">Date:<br /><span>{order.date}</span></div>
        <div className="col-span-1">Payment:<br /><span>{order.payment}</span></div>
        <div className="col-span-1">Status:<br />
          <span className="bg-yellow-400 text-white px-2 py-1 rounded text-xs">{order.status}</span>
        </div>
      </div>

      {/* Items Table */}
      <div className="bg-white rounded-md shadow">
        <div className="p-4 border-b font-semibold text-gray-700">Items</div>
        <div className="divide-y">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex items-center p-4 text-sm">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain mr-4" />
              <div className="flex-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-gray-500">{item.description}</div>
              </div>
              <div className="w-24 text-right text-gray-500">Rp {item.price.toLocaleString()}</div>
              <div className="w-12 text-center">{item.qty}</div>
              <div className="w-24 text-right font-semibold">Rp {(item.price * item.qty).toLocaleString()}</div>
            </div>
          ))}
        </div>
        <div className="p-4 text-right font-bold text-gray-700 border-t">
          Total: Rp {total.toLocaleString()}
        </div>
      </div>

      <Link to="/orders" className="text-sm text-blue-600 hover:underline">
        ← View other orders
      </Link>
    </div>
  )
}
