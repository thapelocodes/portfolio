import Link from "next/link";

const ServicesSection = () => (
  <section className="services">
    <h2>
      <Link href="/services">Services</Link>
    </h2>
    <Link href="/services/service1">Service 1</Link>
    <Link href="/services/service2">Service 2</Link>
    <Link href="/services/service3">Service 3</Link>
  </section>
);

export default ServicesSection;
