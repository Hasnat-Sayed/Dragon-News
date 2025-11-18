import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        
        <div className="min-h-screen">  
            <div className="max-w-6xl mx-auto p-6 space-y-12">
                <Navbar></Navbar>
                {/* Hero Section with Badge */}
                <div className="text-center space-y-6">
                    <div className="badge badge-secondary badge-lg">Est. 2025</div>
                    <h1 className="text-5xl md:text-6xl font-bold text-primary">
                        About Dragon News
                    </h1>
                    <p className="text-xl text-accent max-w-2xl mx-auto">
                        Your trusted source for real-time news across the globe
                    </p>
                    <div className="divider"></div>
                </div>

                {/* Mission Statement - Hero Card */}
                <div className="hero bg-base-200 rounded-box">
                    <div className="hero-content text-center py-12">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
                            <p className="text-lg text-accent leading-relaxed">
                                Dragon News is committed to delivering accurate, timely, and engaging news content
                                to readers worldwide. We believe in the power of information to educate, inspire,
                                and connect communities across the globe.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What We Offer - Stats */}
                <div className='relative border-2 py-8 px-6 border-secondary rounded-2xl bg-linear-to-br from-base-100 to-base-200 shadow-xl overflow-hidden'>
                    {/* Decorative elements */}
                    

                    <div className="text-center mb-8 relative z-10">
                        <div className="inline-block">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                Dragon News At a Glance
                            </h2>
                            <div className="h-1 w-32 bg-secondary mx-auto rounded-full"></div>
                        </div>
                        <p className="text-accent mt-4 text-lg">Delivering excellence in every story</p>
                    </div>

                    <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full bg-base-100 border border-base-300 relative z-10">
                        <div className="stat place-items-center hover:bg-base-200 transition-colors duration-300 border-r-2 group">
                            
                            <div className="stat-title text-accent font-semibold">Real-Time</div>
                            <div className="stat-value text-secondary text-5xl font-extrabold group-hover:scale-110 transition-transform duration-300">24/7</div>
                            <div className="stat-desc text-primary font-medium">News Updates</div>
                        </div>

                        <div className="stat place-items-center hover:bg-base-200 transition-colors duration-300 border-r-2 group">
                            
                            <div className="stat-title text-accent font-semibold">Categories</div>
                            <div className="stat-value text-secondary text-5xl font-extrabold group-hover:scale-110 transition-transform duration-300">8+</div>
                            <div className="stat-desc text-primary font-medium">Diverse Topics</div>
                        </div>

                        <div className="stat place-items-center hover:bg-base-200 transition-colors duration-300 group">
                            
                            <div className="stat-title text-accent font-semibold">Verified</div>
                            <div className="stat-value text-secondary text-5xl font-extrabold group-hover:scale-110 transition-transform duration-300">100%</div>
                            <div className="stat-desc text-primary font-medium">Authentic Sources</div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-primary text-center">What We Offer</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-secondary transition-all">
                            <div className="card-body">
                                <div className="text-4xl mb-2">📰</div>
                                <h3 className="card-title text-primary">Diverse Categories</h3>
                                <p className="text-accent">
                                    Browse news across multiple categories including breaking news, politics,
                                    business, technology, entertainment, sports, and more.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-secondary transition-all">
                            <div className="card-body">
                                <div className="text-4xl mb-2">🔐</div>
                                <h3 className="card-title text-primary">Secure Authentication</h3>
                                <p className="text-accent">
                                    Enjoy a personalized experience with secure Firebase authentication.
                                    Save your preferences and access exclusive content.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-secondary transition-all">
                            <div className="card-body">
                                <div className="text-4xl mb-2">📱</div>
                                <h3 className="card-title text-primary">Responsive Design</h3>
                                <p className="text-accent">
                                    Access Dragon News seamlessly across all your devices - desktop, tablet,
                                    or mobile. Our responsive design ensures optimal viewing experience.
                                </p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-secondary transition-all">
                            <div className="card-body">
                                <div className="text-4xl mb-2">⚡</div>
                                <h3 className="card-title text-primary">Real-Time Updates</h3>
                                <p className="text-accent">
                                    Stay informed with the latest news as it happens. Our platform delivers
                                    real-time updates to keep you ahead of the curve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Stack - Collapse */}
                <div className="collapse collapse-plus bg-base-200 border border-base-300">
                    <input type="checkbox" defaultChecked />
                    <div className="collapse-title text-2xl font-bold text-primary">
                        🚀 Built With Modern Technology
                    </div>
                    <div className="collapse-content">
                        <p className="text-accent mb-4">
                            Dragon News is built using cutting-edge web technologies to ensure
                            performance, security, and scalability:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary">React</div>
                                <span className="text-accent">Fast, dynamic user interface with component-based architecture</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary">React Router</div>
                                <span className="text-accent">Seamless navigation and routing</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary">Firebase</div>
                                <span className="text-accent">Secure user authentication and authorization</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary">Tailwind CSS</div>
                                <span className="text-accent">Beautiful, responsive design with utility-first CSS</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="badge badge-secondary">DaisyUI</div>
                                <span className="text-accent">Professional UI components for modern web apps</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-secondary text-white p-8 rounded-lg text-center space-y-4 shadow-lg">
                    <h2 className="text-3xl font-bold">Join Our Community</h2>
                    <p className="text-lg opacity-90">
                        Create an account today and personalize your news reading experience
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => window.location.href = '/auth/register'}
                            className="bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-base-200 transition-colors"
                        >
                            Get Started
                        </button>
                        <button
                            onClick={() => window.location.href = '/category/0'}
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
                        >
                            Browse News
                        </button>
                    </div>
                </div>

                {/* Our Values - Timeline */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-primary text-center">Our Core Values</h2>

                    <ul className="timeline timeline-vertical lg:timeline-horizontal">
                        <li>
                            <div className="timeline-start timeline-box bg-base-200 border-base-300">
                                <div className="text-4xl mb-2">🎯</div>
                                <h3 className="font-bold text-primary text-lg">Accuracy</h3>
                                <p className="text-accent text-sm">We prioritize fact-checking and verified sources</p>
                            </div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <hr className="bg-secondary" />
                        </li>
                        <li>
                            <hr className="bg-secondary" />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end timeline-box bg-base-200 border-base-300">
                                <div className="text-4xl mb-2">⚖️</div>
                                <h3 className="font-bold text-primary text-lg">Integrity</h3>
                                <p className="text-accent text-sm">Unbiased reporting with journalistic ethics</p>
                            </div>
                            <hr className="bg-secondary" />
                        </li>
                        <li>
                            <hr className="bg-secondary" />
                            <div className="timeline-start timeline-box bg-base-200 border-base-300">
                                <div className="text-4xl mb-2">🌍</div>
                                <h3 className="font-bold text-primary text-lg">Accessibility</h3>
                                <p className="text-accent text-sm">News for everyone, everywhere, anytime</p>
                            </div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>

            {/* Footer */}
            <footer className="footer footer-center bg-base-300 text-base-content p-10">
                <aside>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                    <p className="font-bold text-primary text-xl">
                        Dragon News
                    </p>
                    <p className="text-accent">Your Trusted Source for Real-Time News</p>
                    <p className="text-accent text-sm">© 2025 Dragon News. All rights reserved.</p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-accent hover:text-secondary transition-colors">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-accent hover:text-secondary transition-colors">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-accent hover:text-secondary transition-colors">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
                <nav className="flex flex-wrap justify-center gap-4">
                    <a className="link link-hover text-accent hover:text-secondary" onClick={() => window.location.href = '/'}>Home</a>
                    <a className="link link-hover text-accent hover:text-secondary" onClick={() => window.location.href = '/about'}>About</a>
                    <a className="link link-hover text-accent hover:text-secondary" onClick={() => window.location.href = '/career'}>Career</a>
                    <a className="link link-hover text-accent hover:text-secondary">Contact</a>
                    <a className="link link-hover text-accent hover:text-secondary">Privacy Policy</a>
                    <a className="link link-hover text-accent hover:text-secondary">Terms of Service</a>
                </nav>
            </footer>

        </div>
    );
};

export default About;