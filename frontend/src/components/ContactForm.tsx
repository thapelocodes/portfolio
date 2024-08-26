import Link from "next/link";

const ContactForm = () => (
  <section className="contact">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button>Send</button>
    </form>
    <Link href="/contact">Reach out</Link>
  </section>
);

export default ContactForm;
