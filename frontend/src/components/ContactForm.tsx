import Link from "next/link";

const ContactForm = () => (
  <section className="md:max-w-screen-sm my-5 shadow-lg dark:shadow-dark mx-auto contact dark:text-white p-2 rounded-xl bg-gradient-to-t from-slate-300 via-zinc-200 to-slate-100 dark:from-slate-950 dark:via-zinc-900 dark:to-slate-900">
    <h2 className="w-fit mx-auto text-xl p-2 text-shadow text-tertiary">
      Contact
    </h2>
    <form className="w-9/12 mx-auto flex items-center">
      <div className="flex flex-col w-full mx-auto md:w-11/12 mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
        />
        <input
          type="email"
          placeholder="Email"
          className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
        />
        <textarea
          placeholder="Message"
          className="shadow-inner shadow-lg my-2 pl-5 pt-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
        ></textarea>
        <button className="text-tertiary font-medium shadow mx-auto py-1 my-2 rounded-2xl w-20 bg-gradient-to-tl from-indigo-500 to-slate-300 dark:from-indigo-900 dark:to-slate-950 dark:hover:from-indigo-700 dark:hover:to-slate-900 dark:text-white transform transition-transform duration-200 hover:scale-110">
          Send
        </button>
      </div>
    </form>
    <button className="text-tertiary font-medium shadow w-fit mx-auto p-2 px-4 bg-gradient-to-br from-blue-200 to-slate-500 dark:from-blue-950 dark:to-slate-900 dark:hover:from-blue-900 dark:hover:to-slate-800 rounded-3xl my-1 transform transition-transform duration-200 hover:scale-110">
      <Link href="/contact" className="">
        Let&apos;s socialize
      </Link>
    </button>
  </section>
);

export default ContactForm;
