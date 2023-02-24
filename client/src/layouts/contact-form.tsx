import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import { Link } from "react-router-dom";
import PrimaryBtn from "./primary-btn";

const ContactForm = () => {
  return (
    <>
      <Nav />
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="uppercase playfair italic font-semibold mb-4 text-4xl tracking-tight  text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit
            ipsa expedita quidem, nesciunt iste perspiciatis tempora totam!
            Quae, incidunt.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="playfair block mb-2 text-sm font-medium text-gray-900 uppercase"
              >
                Your Name
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="playfair block mb-2 text-sm font-medium text-gray-900 uppercase"
              >
                Subject
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="uppercase playfair block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="mt-5">
              <Link to="/submitted">
                <PrimaryBtn>Submit</PrimaryBtn>
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactForm;
