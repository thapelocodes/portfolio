import Link from "next/link";

const ContactForm = () => (
  <section className="md:w-9/12 mx-auto contact p-2 rounded-xl">
    <h2 className="w-fit mx-auto text-2xl text-white p-2">Contact</h2>
    <div className="w-fit mx-auto p-2 bg-slate-800 rounded-xl">
      <Link href="/contact" className="mx-aut">
        Reach out
      </Link>
    </div>
    <form className="w-7/12 mx-auto flex items-center text-black">
      <div className="flex flex-col md:w-11/12 mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="my-2 h-10 border-2 pl-5 pb-1 rounded-xl"
        />
        <input
          type="email"
          placeholder="Email"
          className="my-2 h-10 border-2 pl-5 pb-1 rounded-xl"
        />
        <textarea
          placeholder="Message"
          className="my-2 border-2 pl-5 pt-1 rounded-xl"
        ></textarea>
        <button className="mx-auto my-2 rounded-2xl w-20 bg-violet-950 text-white">
          Send
        </button>
      </div>
    </form>
  </section>
);

export default ContactForm;
