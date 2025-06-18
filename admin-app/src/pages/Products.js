import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, MoreVertical, Trash2 } from "lucide-react";

const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Category 1");
  const [products, setProducts] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          selectedCategory
            ? `http://localhost:5000/api/products?category=${selectedCategory}`
            : "http://localhost:5000/api/products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        setOpenMenuId(null);
      } else {
        console.error("Delete failed");
      }
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search here..."
          className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      {/* Category Filters */}
      <div className="flex space-x-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg border text-sm ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative bg-white p-3 rounded-lg shadow hover:shadow-md transition"
          >
            {/* Image */}
            <div className="h-24 bg-gray-100 rounded mb-2 overflow-hidden flex items-center justify-center">
              {product.images && product.images[0] ? (
                <img src={product.images[0]} alt={product.name} className="h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-sm">No Image</span>
              )}
            </div>

            {/* Info */}
            <div className="flex justify-between items-center text-sm font-medium">
              <span>{product.name}</span>
              <span className="text-xs text-gray-400">{product._id.slice(-4)}</span>
            </div>
            <div className="text-sm text-gray-600">Rp{product.price?.toLocaleString()}</div>

            {/* More Options */}
            <div className="absolute top-2 right-2">
              <button
                onClick={() => setOpenMenuId(openMenuId === product._id ? null : product._id)}
                className="p-1 rounded hover:bg-gray-200"
              >
                <MoreVertical size={16} />
              </button>

              {openMenuId === product._id && (
                <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-md z-10">
                  <button
                    onClick={() => handleRemove(product._id)}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <Trash2 size={16} />
                    Remove Product
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Add Product Card */}
        <button
          onClick={() => navigate("/products/add")}
          className="bg-white p-4 flex flex-col justify-center items-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50"
        >
          <Plus size={32} className="text-gray-600 mb-1" />
          <span className="text-sm font-medium text-green-600">Add Product</span>
        </button>
      </div>
    </div>
  );
};

export default Products;

// [OLD]
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus, MoreVertical, Trash2 } from "lucide-react";

// const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

// const initialProducts = Array.from({ length: 11 }, (_, i) => ({
//   id: i + 1,
//   name: "Medicine Name",
//   price: "Rp30,000",
//   code: "ID001",
// }));

// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Category 2");
//   const [products, setProducts] = useState(initialProducts);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const navigate = useNavigate();

//   const handleRemove = (id) => {
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//     setOpenMenuId(null);
//   };

//   return (
//     <div className="space-y-6">
//       {/* Search */}
//       <div className="flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring focus:border-blue-400"
//         />
//       </div>

//       {/* Category Filters */}
//       <div className="flex space-x-3">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={`px-4 py-2 rounded-lg border text-sm ${
//               selectedCategory === cat
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="relative bg-white p-3 rounded-lg shadow hover:shadow-md transition"
//           >
//             {/* Image Placeholder */}
//             <div className="h-24 bg-gray-100 rounded mb-2" />

//             {/* Info */}
//             <div className="flex justify-between items-center text-sm font-medium">
//               <span>{product.name}</span>
//               <span className="text-xs text-gray-400">{product.code}</span>
//             </div>
//             <div className="text-sm text-gray-600">{product.price}</div>

//             {/* More Options */}
//             <div className="absolute top-2 right-2">
//               <button
//                 onClick={() =>
//                   setOpenMenuId(openMenuId === product.id ? null : product.id)
//                 }
//                 className="p-1 rounded hover:bg-gray-200"
//               >
//                 <MoreVertical size={16} />
//               </button>

//               {openMenuId === product.id && (
//                 <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-md z-10">
//                   <button
//                     onClick={() => handleRemove(product.id)}
//                     className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//                   >
//                     <Trash2 size={16} />
//                     Remove Product
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* Add Product Card */}
//         <button
//           onClick={() => navigate("/products/add")}
//           className="bg-white p-4 flex flex-col justify-center items-center rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50"
//         >
//           <Plus size={32} className="text-gray-600 mb-1" />
//           <span className="text-sm font-medium text-green-600">
//             Add Product
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Products;