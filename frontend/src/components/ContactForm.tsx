import Link from "next/link";

const ContactForm = () => (
  <section className="md:max-w-screen-sm mx-auto contact dark:text-white p-2 rounded-xl">
    <h2 className="w-fit mx-auto text-2xl p-2">Contact</h2>
    <form className="w-9/12 mx-auto flex items-center">
      <div className="flex flex-col w-full mx-auto md:w-11/12 mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
        />
        <input
          type="email"
          placeholder="Email"
          className="my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
        />
        <textarea
          placeholder="Message"
          className="my-2 pl-5 pt-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
        ></textarea>
        <button className="mx-auto pb-1 my-2 rounded-2xl w-20 bg-gradient-to-tl dark:from-indigo-900 dark:to-slate-950 dark:hover:from-indigo-700 dark:hover:to-slate-900 dark:text-white">
          Send
        </button>
      </div>
    </form>
    <div className="w-fit mx-auto p-2 bg-gradient-to-br dark:from-blue-950 dark:to-slate-900 dark:hover:from-blue-900 dark:hover:to-slate-800 rounded-xl my-1">
      <Link href="/contact" className="">
        Let&apos;s socialize
      </Link>
    </div>
  </section>
);

export default ContactForm;
