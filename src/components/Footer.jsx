
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Contact Info</h4>
            <p className="mb-1">Phone: <a href="tel:+9101017208" className="hover:underline">+91 91010 17208</a></p>
            <p>Email: <a href="mailto:pronavclub.com" className="hover:underline">pronavclub7@gmail.com</a></p>
          </div>
          <div className="text-center mt-4 md:mt-0">
            <p className="mb-2">&copy; {new Date().getFullYear()} PronavClub . All rights reserved.</p>
            <p className="text-sm">Built with React and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
