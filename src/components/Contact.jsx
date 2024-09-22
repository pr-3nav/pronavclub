const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4">I’d love to hear from you! Whether you have a project idea or just want to connect, feel free to reach out.</p>
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a4.991 4.991 0 0 1-2.055-1.022l-3.823 3.821a2.03 2.03 0 0 1-2.829 0l-2.829-2.829a2.03 2.03 0 0 1 0-2.828L9.764 6.76A4.991 4.991 0 0 1 15 4h.496a2 2 0 0 1 1.707.993l2.828 4.242A4.992 4.992 0 0 1 21 15z"></path>
                </svg>
                <a href="tel:+9101017208" className="text-gray-800 hover:text-blue-600">+91 91010 17208</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12.011c0 5.515-4.486 10.007-10.011 10.007S1.979 17.526 1.979 12.011 6.465 2.004 11.979 2.004C17.493 2.004 22 6.484 22 12.011zM12.01 13.49c-.683 0-1.343-.168-1.936-.485-1.334-.59-2.09-1.873-2.09-3.19 0-.83.391-1.642 1.05-2.178-.046.287-.07.591-.07.902 0 1.645 1.336 2.98 2.98 2.98.309 0 .615-.023.918-.068-.548.537-1.279.838-2.075.838zm0 2.577c1.947 0 3.53-1.615 3.53-3.589 0-1.973-1.583-3.589-3.53-3.589-1.944 0-3.53 1.616-3.53 3.589s1.586 3.589 3.53 3.589zm0-9.893c.637 0 1.274.055 1.895.16-.002-.212-.01-.425-.03-.637-.172-1.295-1.363-2.168-2.476-2.168-1.042 0-2.052.888-2.215 2.014-.016.105-.027.21-.027.316 0 .548.224 1.082.629 1.508-.61-.17-1.247-.268-1.903-.268-.62 0-1.215.109-1.779.306.567.972 1.49 1.782 2.507 2.232-.092-.399-.14-.823-.14-1.237 0-2.192 1.731-3.97 3.846-3.97zm0 0"></path>
                </svg>
                <a href="mailto:pronavclub@gmail.com" className="text-gray-800 hover:text-blue-600">pronavclub7@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
