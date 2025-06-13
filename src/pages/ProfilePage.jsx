export default function ProfilePage() {
  return (
    <div className="p-6 w-full max-w-screen-xl mx-auto space-y-6">
      {/* Section Title */}
      <h1 className="text-2xl font-black text-gray-800 mb-2">My Profile</h1>

      {/* Profile Header */}
      <div className="bg-white rounded-md shadow p-4 flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-semibold text-blue-700">Enrico Navarro Lesmana</h2>
          <p className="text-sm text-gray-500">Jakarta, Indonesia</p>
        </div>
      </div>

      {/* Personal Info */}
      <section className="bg-white rounded-md shadow p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-blue-600 font-semibold">Personal Information</h3>
          <button className="text-sm bg-green-500 text-white px-3 py-1 rounded">Edit</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">First Name</p>
            <p className="font-medium">Enrico Navarro</p>
          </div>
          <div>
            <p className="text-gray-500">Last Name</p>
            <p className="font-medium">Lesmana</p>
          </div>
          <div>
            <p className="text-gray-500">Date of Birth</p>
            <p className="font-medium">17-01-2000</p>
          </div>
          <div>
            <p className="text-gray-500">Email Address</p>
            <p className="font-medium">itsvarro17@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500">Phone Number</p>
            <p className="font-medium">(+62)8123456789</p>
          </div>
        </div>
      </section>

      {/* Address Info */}
      <section className="bg-white rounded-md shadow p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-blue-600 font-semibold">Address</h3>
          <button className="text-sm bg-green-500 text-white px-3 py-1 rounded">Edit</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Country</p>
            <p className="font-medium">Indonesia</p>
          </div>
          <div>
            <p className="text-gray-500">City</p>
            <p className="font-medium">Jakarta</p>
          </div>
          <div>
            <p className="text-gray-500">Postal Code</p>
            <p className="font-medium">12345</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-gray-500">Full Address</p>
            <p className="font-medium">Jl. Melon A/17, Kebayoran Baru, Jakarta Selatan</p>
          </div>
        </div>
      </section>
    </div>
  )
}
