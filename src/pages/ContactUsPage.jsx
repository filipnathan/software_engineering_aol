import { useState } from 'react'

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    console.log('📨 Form submitted:', form)

    setSubmitted(true)
    setForm({
      name: '',
      email: '',
      message: ''
    })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-[#E4E4E4] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-black text-blue-700">Contact Us</h1>
          <p className="mt-2 font-medium text-gray-600 max-w-2xl mx-auto">
            We are here to assist you with all your healthcare and pharmacy needs.
            Feel free to reach out to us through the following channels.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: 'mail',
              title: 'Email Address',
              content: (
                <>
                  oxypharmachy@gmail.com<br />
                  oxybussiness@gmail.com
                </>
              )
            },
            {
              icon: 'call',
              title: 'Phone Number',
              content: (
                <>
                  081234567890<br />
                  081234567891
                </>
              )
            },
            {
              icon: 'location_on',
              title: 'Our Location',
              content: (
                <>
                  Jl. Kemanggisan Raya No.17,<br />
                  Jakarta Barat, Indonesia
                </>
              )
            },
            {
              icon: 'schedule',
              title: 'Work Day',
              content: (
                <>
                  Mon–Fri 09.00–24.00<br />
                  Sat–Sun 09.00–21.00
                </>
              )
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 space-y-3">
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 rounded-full">
                <span className="material-symbols-outlined text-blue-600 text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-blue-700 font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Success Message - show above form layout */}
        {submitted && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md text-sm mb-4 text-center">
            ✅ Your message has been sent!
        </div>
        )}        
        
        {/* Form + Image */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-start">
          {/* Contact Form */}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-bold text-blue-600">Get In Touch With Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="w-full bg-blue-100 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full bg-blue-100 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className="w-full bg-blue-100 text-sm px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-md transition"
            >
              SEND MESSAGE
            </button>
          </form>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/team.png"
              alt="Pharmacy Team"
              className="rounded-xl w-full max-w-md object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


