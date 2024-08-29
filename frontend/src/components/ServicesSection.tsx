import Link from "next/link";

const ServicesSection = () => (
  <section className="services w-full rounded-2xl mt-2 md:w-9/12 mx-auto text-center">
    <h2 className="text-xl">
      <Link href="/services">Services</Link>
    </h2>
    <div className="flex flex-col my-2">
      <Link href="/services/service1" className="px-3">
        Service 1
      </Link>
      <Link href="/services/service2" className="px-3">
        Service 2
      </Link>
      <Link href="/services/service3" className="px-3">
        Service 3
      </Link>
    </div>
  </section>
);

export default ServicesSection;
