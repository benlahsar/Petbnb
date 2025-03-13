import {Calendar, CheckCircle, DollarSign, Shield} from 'lucide-react';
import WelcomeNavbar from "../components/WelcomeNavbar.jsx";
import AtrractSection from "../components/AtrractSection.jsx";

const BecomeHost = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <div className="h-[500px] w-full">
                    <img
                        src="https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                        alt="Person with pets"
                        className="w-full h-full object-cover"
                    />
                    {/*<div className="absolute inset-0 bg-black bg-opacity-40"></div>*/}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 max-w-4xl">
                        Share Your Love for Pets and Earn
                    </h1>
                    <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
                        Join thousands of hosts providing loving care for pets in their homes
                    </p>
                    <button
                        className="bg-rose-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-rose-600 transition duration-200">
                        Get Started
                    </button>
                </div>
            </div>

            <AtrractSection/>

            {/* How It Works */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                    How Hosting Works
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Becoming a PawStay host is simple. Follow these steps to start earning by caring for pets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                        <div className="bg-rose-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                            <Calendar className="h-8 w-8 text-rose-500"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Create Your Profile</h3>
                        <p className="text-gray-600">
                            Sign up and create your profile showcasing your experience, home, and the types of pets you
                            can host.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                        <div className="bg-rose-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                            <CheckCircle className="h-8 w-8 text-rose-500"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Accept Bookings</h3>
                        <p className="text-gray-600">
                            Review and accept booking requests from pet owners. You control your availability and which
                            pets you host.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                        <div className="bg-rose-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                            <DollarSign className="h-8 w-8 text-rose-500"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Paid</h3>
                        <p className="text-gray-600">
                            Provide loving care for pets and get paid securely through our platform within 48 hours of
                            checkout.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                        Benefits of Hosting
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                        Join our community of pet lovers and enjoy these benefits
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-sm p-6 flex">
                            <div
                                className="bg-rose-100 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                <DollarSign className="h-6 w-6 text-rose-500"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Earn Extra Income</h3>
                                <p className="text-gray-600">
                                    Set your own rates and availability. Many hosts earn $1,000+ per month caring for
                                    pets they love.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 flex">
                            <div
                                className="bg-rose-100 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                <Calendar className="h-6 w-6 text-rose-500"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Flexible Schedule</h3>
                                <p className="text-gray-600">
                                    You control when you host. Accept bookings only when it works for your schedule.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 flex">
                            <div
                                className="bg-rose-100 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                <Shield className="h-6 w-6 text-rose-500"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Protection & Support</h3>
                                <p className="text-gray-600">
                                    Enjoy 24/7 support, veterinary coverage, and property damage protection up to $1
                                    million.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 flex">
                            <div
                                className="bg-rose-100 p-3 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                                <svg className="h-6 w-6 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd"
                                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pet Experience</h3>
                                <p className="text-gray-600">
                                    Enjoy the company of pets without the long-term commitment. Perfect for animal
                                    lovers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                    Host Stories
                </h2>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                    Hear from our community of hosts
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                                alt="Host"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Jessica T.</h3>
                                <p className="text-gray-500 text-sm">Hosting since 2023</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            "I started hosting on PawStay to earn extra income while working from home. Now I make
                            around $1,200 a month doing something I love - caring for dogs!"
                        </p>
                        <p className="text-gray-600 italic">
                            Hosts dogs and cats in Seattle, WA
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                                alt="Host"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Marcus L.</h3>
                                <p className="text-gray-500 text-sm">Hosting since 2024</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            "As a retiree, PawStay gives me companionship and purpose. I love meeting new pets and their
                            owners, and the extra income helps with my expenses."
                        </p>
                        <p className="text-gray-600 italic">
                            Hosts all pets in Austin, TX
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                                alt="Host"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <h3 className="font-semibold text-gray-800">Aisha K.</h3>
                                <p className="text-gray-500 text-sm">Hosting since 2023</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            "I started hosting to help pay for college. Now I've built a regular client base of pet
                            owners who trust me with their furry family members!"
                        </p>
                        <p className="text-gray-600 italic">
                            Hosts cats and small pets in Chicago, IL
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Everything you need to know about becoming a PawStay host
                    </p>

                    <div className="space-y-4">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">How much can I earn as a host?</h3>
                            <p className="text-gray-600">
                                Your earnings depend on your location, the services you offer, and how often you host.
                                Many active hosts earn $1,000-$2,000 per month. You set your own rates and keep 80% of
                                what you charge.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Do I need any special
                                qualifications?</h3>
                            <p className="text-gray-600">
                                While professional experience is a plus, it's not required. We look for hosts who are
                                responsible, reliable, and have a genuine love for animals. All hosts undergo a
                                background check and home verification.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">What protection do I have as a
                                host?</h3>
                            <p className="text-gray-600">
                                PawStay provides hosts with protection that includes veterinary coverage for pets in
                                your care and property damage protection up to $1 million. We also offer 24/7 support
                                for any issues that arise.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">How do I get paid?</h3>
                            <p className="text-gray-600">
                                Payments are processed automatically through our secure platform. You'll receive your
                                earnings via direct deposit within 48 hours after a pet's stay is completed.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Can I host part-time?</h3>
                            <p className="text-gray-600">
                                Absolutely! You have complete control over your availability. Many of our hosts have
                                full-time jobs and host on evenings and weekends, or whenever works for their schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Ready to Become a PawStay Host?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Join our community of pet lovers today and start earning by doing what you love
                </p>
                <button
                    className="bg-rose-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-rose-600 transition duration-200">
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

export default BecomeHost;