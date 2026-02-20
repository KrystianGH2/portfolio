function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="border-t-border border-t  py-8 px-6 text-center">
      <p className="text-sm text-gray-500">
        © {year} Krystian Cruz. Built with passion and clean code.
      </p>
    </div>
  );
}

export default Footer;
