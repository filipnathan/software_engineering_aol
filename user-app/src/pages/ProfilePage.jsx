import { useState } from 'react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1984-01-01',
    email: 'johndoe@gmail.com',
    phone: '08123456789',
    country: 'Indonesia',
    city: 'Jakarta',
    postalCode: '12345',
    fullAddress: 'Jl. Melon A/17, Kebayoran Baru, Jakarta Selatan',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    fetch(`http://localhost:5000/api/user/${form.email}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated profile:", data)
        alert('Profile updated!');
        setIsEditing(false);
      })
      .catch((err) => {
        console.error('Update failed:', err);
        alert('Failed to update profile.');
      });
  };

  return (
    <div className="p-6 w-full max-w-screen-xl mx-auto space-y-6">
      <h1 className="text-2xl font-black text-gray-800 mb-2">My Profile</h1>

      {/* Profile Header */}
      <div className="bg-white rounded-md shadow p-4 flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold text-blue-700">{form.firstName} {form.lastName}</h2>
          <p className="text-sm text-gray-500">{form.city}, {form.country}</p>
        </div>
      </div>

      {/* Personal Info */}
      <section className="bg-white rounded-md shadow p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-blue-600 font-semibold">Personal Information</h3>
          <button
            className="text-sm bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">First Name</p>
            {isEditing ? (
              <input name="firstName" value={form.firstName} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.firstName}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Last Name</p>
            {isEditing ? (
              <input name="lastName" value={form.lastName} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.lastName}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Date of Birth</p>
            {isEditing ? (
              <input name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.dateOfBirth}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Email Address</p>
            <p className="font-medium">{form.email}</p>
          </div>
          <div>
            <p className="text-gray-500">Phone Number</p>
            {isEditing ? (
              <input name="phone" value={form.phone} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.phone}</p>
            )}
          </div>
        </div>
      </section>

      {/* Address Info */}
      <section className="bg-white rounded-md shadow p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-blue-600 font-semibold">Address</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Country</p>
            {isEditing ? (
              <input name="country" value={form.country} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.country}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">City</p>
            {isEditing ? (
              <input name="city" value={form.city} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.city}</p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Postal Code</p>
            {isEditing ? (
              <input name="postalCode" value={form.postalCode} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.postalCode}</p>
            )}
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-500">Full Address</p>
            {isEditing ? (
              <input name="fullAddress" value={form.fullAddress} onChange={handleChange} className="border rounded px-2 py-1 w-full" />
            ) : (
              <p className="font-medium">{form.fullAddress}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}