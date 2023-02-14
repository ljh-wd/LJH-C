import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import PrimaryBtn from "../layouts/primary-btn";

const ContactForm = () => {
  return (
    <div className="h-screen">
      <Nav />
      <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full my-10 md:my-14">
        <div className="text-3xl mb-6 text-center playfair font-bold">
          Contact LJH-C
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Name"
            />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Email Address"
            />
          </div>

          <div className="col-span-2">
            <textarea
              cols={30}
              rows={8}
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="col-span-2 text-right">
            <PrimaryBtn>Submit</PrimaryBtn>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
