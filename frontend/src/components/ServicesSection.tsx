import Link from "next/link";

const ServicesSection = () => (
  <section className="services w-full rounded-2xl my-2 md:w-9/12 mx-auto py-2 px-3 overflow-hidden">
    <h2 className="text-xl m-2">Services & Skills</h2>
    <div className="flex flex-col md:flex-row justify-between-2 md:whitespace-nowrap scrollContainer">
      <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/web-dev" className="">
          Web Development
        </Link>
      </div>
      <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/app-dev" className="">
          App Development
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/frontend" className="">
          Frontend Development
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/api-dev" className="">
          API Development and Integration
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/seo" className="">
          Technical SEO
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/ui-ux" className="">
          UI/UX Design & Development
        </Link>
      </div>

      {/* Duplicate for seamless scrolling */}
      <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/web-dev" className="">
          Web Development
        </Link>
      </div>
      <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/app-dev" className="">
          App Development
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/frontend" className="">
          Frontend Development
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/api-dev" className="">
          API Development and Integration
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/seo" className="">
          Technical SEO
        </Link>
      </div>
      <div className="w-fit mt-1 mb-2 mx-auto md:mx-1 rounded-xl bg-slate-700 p-1">
        <Link href="/services/ui-ux" className="">
          UI/UX Design & Development
        </Link>
      </div>
    </div>
    <div className="w-fit mx-auto bg-gradient-to-br dark:from-blue-950 dark:to-slate-900 dark:hover:from-blue-900 dark:hover:to-slate-800 rounded-xl my-1 py-2 px-4">
      <Link href="/services">See more services</Link>
    </div>
  </section>
);

export default ServicesSection;
