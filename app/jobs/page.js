// pages/jobs.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Jobs = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto mt-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Available Jobs</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Job Card 1 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Software Developer - Canada</h2>
              <p>Job Type: Full-time</p>
              <p>Salary: $90,000 - $110,000 CAD</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Nurse - UK</h2>
              <p>Job Type: Full-time</p>
              <p>Salary: £30,000 - £40,000</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Engineer - Australia</h2>
              <p>Job Type: Contract</p>
              <p>Salary: $80,000 - $100,000 AUD</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>

          {/* Add more job cards as needed */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
