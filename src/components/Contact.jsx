import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // Added FaPhoneAlt icon

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const headingRef = useRef();
  const subheadingRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    phone: '', // Added phone number field
    service: 'Academy',
    timing: '10:00 AM',
    notes: '',
  });

  useEffect(() => {
    // Animation for the main heading and subheading
    gsap.fromTo(
      [headingRef.current, subheadingRef.current],
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reset',
        },
      }
    );

    // Animation for the form container
    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'back.out(1.7)', // More playful and impactful ease
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsAppRedirect = () => {
    const { name, phone, service, timing, notes } = formData;
    let message = `Hello Red Ball Cricket Academy, I would like to book a consultation.`;
    
    if (name) message += `\n\nName: ${name}`;
    if (phone) message += `\nPhone: ${phone}`;
    if (service) message += `\nService Interested In: ${service}`;
    if (timing) message += `\nPreferred Timing: ${timing}`;
    if (notes) message += `\nAdditional Notes: ${notes}`;

    const encodedMsg = encodeURIComponent(message);
    
    // Replace '9350076653' with your actual WhatsApp number if different
    window.open(`https://wa.me/9350076653?text=${encodedMsg}`, '_blank');
  };

  return (
    <section
      id='contact'
      className="py-20 px-6 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#122A4A] via-[#2F5480] to-[#122A4A] text-white overflow-hidden"
    >
      <div className="text-center mb-14 md:mb-20">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white mb-4 drop-shadow-xl leading-tight"
        >
          Book Your <span className="text-orange-400">Consultation</span>
        </h2>
        <p
          ref={subheadingRef}
          className="text-base sm:text-lg text-blue-100 mt-4 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Ready to elevate your game? Reserve your personalized slot with our
          **expert coaches**, access our **state-of-the-art ground facilities**, or
          discuss **tailored training programs**. We're available daily from{' '}
          <span className="text-orange-300 font-semibold">10:00 AM – 10:00 PM</span>.
        </p>
      </div>

      <div
        ref={formRef}
        className="max-w-4xl mx-auto w-full bg-white/95 text-gray-800 p-8 sm:p-10 md:p-12 rounded-3xl shadow-3xl backdrop-blur-sm transform transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-4xl"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="E.g., John Doe"
              aria-label="Your Name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel" // Use type="tel" for phone numbers
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="E.g., +91 9876543210"
              aria-label="Phone Number"
            />
          </div>

          <div>
            <label htmlFor="service" className="block mb-2 text-sm font-semibold text-gray-700">Service Interested In</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition duration-200 ease-in-out"
              aria-label="Service Interested In"
            >
              <option value="Academy">Academy Enrollment</option>
              <option value="Training">Personalized Training</option>
              <option value="Ground">Ground Booking</option>
              <option value="Others">General Inquiry / Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="timing" className="block mb-2 text-sm font-semibold text-gray-700">Preferred Timing</label>
            <select
              id="timing"
              name="timing"
              value={formData.timing}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition duration-200 ease-in-out"
              aria-label="Preferred Timing"
            >
              {Array.from({ length: 13 }, (_, i) => { // Increased to cover 10 AM to 10 PM
                const hour = 10 + i;
                const displayHour = hour > 12 ? hour - 12 : hour;
                const ampm = hour >= 12 ? 'PM' : 'AM';
                const label = `${displayHour}:00 ${ampm}`;
                return (
                  <option key={i} value={label}>
                    {label}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="notes" className="block mb-2 text-sm font-semibold text-gray-700">Additional Notes (Optional)</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3" // Changed to textarea for multi-line notes
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y transition duration-200 ease-in-out"
              placeholder="Share any specific questions or requirements..."
              aria-label="Additional Notes"
            ></textarea>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            <FaWhatsapp size={22} /> Send via WhatsApp
          </button>
          <a
            href="tel:+919350076653" // Direct call link
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            <FaPhoneAlt size={20} /> Call Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;