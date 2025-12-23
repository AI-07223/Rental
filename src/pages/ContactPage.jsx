// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: ["123 Fashion Street", "Connaught Place", "New Delhi, India 110001"]
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+91 98765 43210", "+91 11 2345 6789"]
        },
        {
            icon: Mail,
            title: "Email Us",
            details: ["contact@miliscouture.com", "appointments@miliscouture.com"]
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: By Appointment Only"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <section className="relative h-[40vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-[#D4AF37] text-sm tracking-[0.4em] uppercase mb-4">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 -mt-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <div key={index} className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#8B0000]/10 flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 text-[#8B0000]" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-serif text-lg text-[#1A1A1A] mb-3">{info.title}</h3>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-500 text-sm">{detail}</p>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <span className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 block">
                                Send a Message
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] mb-8">
                                We'd Love to Hear From You
                            </h2>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors bg-white"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors bg-white"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors bg-white"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors bg-white"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="appointment">Book Appointment</option>
                                                <option value="order">Order Inquiry</option>
                                                <option value="custom">Custom Design</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-200 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] outline-none transition-colors bg-white resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-10 py-4 bg-[#8B0000] text-white uppercase tracking-[0.15em] text-sm font-medium hover:bg-[#5C0A0A] transition-colors flex items-center justify-center gap-2"
                                    >
                                        Send Message
                                        <Send size={16} />
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-white border border-[#D4AF37] p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B0000]/10 flex items-center justify-center">
                                        <Send className="w-8 h-8 text-[#8B0000]" />
                                    </div>
                                    <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">Thank You!</h3>
                                    <p className="text-gray-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                                </div>
                            )}
                        </div>

                        {/* Store Image & Quick Contact */}
                        <div className="space-y-8">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                                    alt="Our Boutique"
                                    className="w-full aspect-[4/3] object-cover shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="font-serif text-xl mb-1">Our Flagship Boutique</h3>
                                        <p className="text-white/80 text-sm">Connaught Place, New Delhi</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 shadow-lg">
                                <h3 className="font-serif text-xl text-[#1A1A1A] mb-6">Quick Connect</h3>
                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/919876543210?text=Hi! I'd like to know more about Mili's Couture"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 transition-colors rounded-lg"
                                    >
                                        <MessageCircle className="w-6 h-6 text-green-600" />
                                        <div>
                                            <p className="font-medium text-green-800">WhatsApp</p>
                                            <p className="text-sm text-green-600">Chat with us instantly</p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 bg-pink-50 hover:bg-pink-100 transition-colors rounded-lg"
                                    >
                                        <Instagram className="w-6 h-6 text-pink-600" />
                                        <div>
                                            <p className="font-medium text-pink-800">Instagram</p>
                                            <p className="text-sm text-pink-600">@miliscouture</p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 transition-colors rounded-lg"
                                    >
                                        <Facebook className="w-6 h-6 text-blue-600" />
                                        <div>
                                            <p className="font-medium text-blue-800">Facebook</p>
                                            <p className="text-sm text-blue-600">Mili's Couture</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
