const Footer = () => (
  <footer className="bg-slate-400 dark:bg-slate-900 h-24 flex items-center">
    <div className="w-fit mx-auto">
      <p className="m-3 text-secondary flex">
        &copy; {new Date().getFullYear()}{" "}
        <p className="text-primary ml-1">thapelocodes</p>
      </p>
    </div>
  </footer>
);

export default Footer;
