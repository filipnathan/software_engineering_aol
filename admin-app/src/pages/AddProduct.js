import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Upload } from "lucide-react";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    category: "Category 1",
  });

  const [images, setImages] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddCategory = () => {
    alert(`Added category: ${newCategory}`);
    setNewCategory("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages([...images, url]);
    }
  };

  const handleSubmit = () => {
    // This is where the product would be saved to context, localStorage, or API
    alert("Product added:\n" + JSON.stringify(form, null, 2));
    navigate("/products");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Add New Product</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="md:col-span-2 space-y-6">
          {/* General Info */}
          <div className="border rounded-lg p-4 space-y-3 shadow">
            <h3 className="font-medium text-gray-700">General Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Name Product"
              value={form.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <textarea
              name="description"
              placeholder="Description Product"
              value={form.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none h-28"
            />
          </div>

          {/* Pricing and Stock */}
          <div className="border rounded-lg p-4 space-y-3 shadow">
            <h3 className="font-medium text-gray-700">Pricing and Stock</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="price"
                placeholder="Base Pricing"
                value={form.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              />
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={form.stock}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                name="discount"
                placeholder="Discount"
                value={form.discount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upload Image */}
          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-medium text-gray-700 mb-2">Upload Image</h3>
            <div className="flex justify-center items-center h-32 border border-dashed rounded bg-gray-100 mb-3">
              <label className="cursor-pointer flex flex-col items-center">
                <Upload className="text-gray-500 mb-1" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <span className="text-xs text-gray-500">Click to upload</span>
              </label>
            </div>
            <div className="flex flex-wrap gap-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Uploaded"
                  className="w-12 h-12 rounded object-cover"
                />
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="border rounded-lg p-4 space-y-3 shadow">
            <h3 className="font-medium text-gray-700">Category</h3>
            <select
              name="category"
              value={form.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </select>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="New category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded"
              />
              <button
                onClick={handleAddCategory}
                className="bg-green-500 text-white text-sm px-3 py-2 rounded hover:bg-green-600"
              >
                Add Category
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-2">
            <button className="px-4 py-2 border rounded shadow hover:bg-gray-100">
              Save Draft
            </button>
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
