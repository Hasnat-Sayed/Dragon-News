import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and optimize user interfaces for our news platform using React and modern web technologies.'
    },
    {
      id: 2,
      title: 'News Content Writer',
      department: 'Editorial',
      location: 'Chattogram, BD',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Research, write, and publish compelling news articles across various categories with accuracy and speed.'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Design intuitive and engaging user experiences for our news platform and mobile applications.'
    },
    {
      id: 4,
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Dhaka, BD',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Analyze user behavior, engagement metrics, and content performance to drive data-informed decisions.'
    },
    {
      id: 5,
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Manage social media presence, create engaging content, and grow our audience across platforms.'
    },
    {
      id: 6,
      title: 'Video Editor',
      department: 'Content',
      location: 'Chattogram, BD',
      type: 'Part-time',
      experience: '1-2 years',
      description: 'Edit and produce high-quality video content for news stories, features, and social media.'
    }
  ];

  const departments = ['all', 'Engineering', 'Editorial', 'Design', 'Analytics', 'Marketing', 'Content'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        <Navbar></Navbar>
        {/* Hero Section */}
        <div className="hero bg-linear-to-br from-base-100 to-base-200 rounded-2xl border-2 border-secondary shadow-xl relative overflow-hidden">
          
          <div className="hero-content text-center py-16 relative z-10">
            <div className="max-w-3xl">
              <div className="badge badge-secondary badge-lg mb-4">We're Hiring!</div>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                Join Our Team
              </h1>
              <div className="h-1 w-32 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-accent leading-relaxed mb-6">
                Be part of a dynamic team that's revolutionizing how people consume news. 
                We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="stats stats-horizontal shadow-lg bg-base-100 border border-base-300">
                <div className="stat place-items-center">
                  <div className="stat-value text-secondary text-3xl">50+</div>
                  <div className="stat-desc text-primary font-medium">Team Members</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value text-secondary text-3xl">6</div>
                  <div className="stat-desc text-primary font-medium">Open Positions</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value text-secondary text-3xl">15+</div>
                  <div className="stat-desc text-primary font-medium">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary mb-2">Why Dragon News?</h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-lg border border-base-300 hover:border-secondary transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="card-title text-primary">Growth Opportunities</h3>
                <p className="text-accent">
                  Continuous learning, skill development, and career advancement in a fast-growing company.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300 hover:border-secondary transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="card-title text-primary">Remote-First Culture</h3>
                <p className="text-accent">
                  Work from anywhere with flexible hours and a healthy work-life balance.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300 hover:border-secondary transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="card-title text-primary">Innovation Focus</h3>
                <p className="text-accent">
                  Work with cutting-edge technologies and contribute to meaningful projects.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300 hover:border-secondary transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="card-title text-primary">Collaborative Team</h3>
                <p className="text-accent">
                  Join a diverse, supportive team that values collaboration and creativity.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300 hover:border-secondary transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="card-title text-primary">Competitive Benefits</h3>
                <p className="text-accent">
                  Attractive salary packages, health insurance, and performance bonuses.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300 hover:border-secondary transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="card-title text-primary">Impactful Work</h3>
                <p className="text-accent">
                  Your work reaches millions of readers and makes a real difference.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary mb-2">Open Positions</h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-accent text-lg">Find your perfect role and apply today</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`btn btn-sm ${
                  selectedDepartment === dept 
                    ? 'btn-secondary' 
                    : 'btn-outline btn-primary'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid gap-6">
            {filteredJobs.map(job => (
              <div key={job.id} className="card bg-base-100 shadow-lg border border-base-300 hover:border-secondary transition-all">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="card-title text-primary text-2xl mb-2">{job.title}</h3>
                      <p className="text-accent mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="badge badge-secondary">{job.department}</div>
                        <div className="badge badge-outline">{job.location}</div>
                        <div className="badge badge-outline">{job.type}</div>
                        <div className="badge badge-outline">{job.experience}</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="btn btn-secondary btn-sm">
                        Apply Now
                      </button>
                      <button className="btn btn-outline btn-primary btn-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-accent text-lg">No positions available in this department at the moment.</p>
            </div>
          )}
        </div>

        {/* Application Process */}
        <div className="bg-base-200 rounded-2xl p-8 border border-base-300">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary mb-2">Our Hiring Process</h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
          </div>

          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start timeline-box bg-base-100 border-base-300">
                <div className="font-bold text-primary">Step 1: Apply</div>
                <p className="text-accent text-sm">Submit your application with resume and portfolio</p>
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <hr className="bg-secondary"/>
            </li>
            <li>
              <hr className="bg-secondary"/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-base-100 border-base-300">
                <div className="font-bold text-primary">Step 2: Initial Screening</div>
                <p className="text-accent text-sm">We review your application (1-3 days)</p>
              </div>
              <hr className="bg-secondary"/>
            </li>
            <li>
              <hr className="bg-secondary"/>
              <div className="timeline-start timeline-box bg-base-100 border-base-300">
                <div className="font-bold text-primary">Step 3: Interview</div>
                <p className="text-accent text-sm">Virtual interview with the team</p>
              </div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <hr className="bg-secondary"/>
            </li>
            <li>
              <hr className="bg-secondary"/>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="timeline-end timeline-box bg-base-100 border-base-300">
                <div className="font-bold text-primary">Step 4: Offer</div>
                <p className="text-accent text-sm">Welcome to the team! 🎉</p>
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

export default Career;