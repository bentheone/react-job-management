import Card from "./Card";
import {Link} from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <Card bg='bg-indigo-100'>
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React Jobs and start your career today
          </p>
          <Link to="/jobs.html" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Browse Jobs
          </Link>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job and find the perfect developer for the role
          </p>
          <Link to="/jobs.html" className="inline-block bg-indigo-700 text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Add Job
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;