const Testimonials = () => {
    return (
      <section id="testimonials" className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg">Pronav did an amazing job building my company&apos;s website. The project was completed on time and exceeded my expectations!</p>
            <p className="mt-4 font-bold italic">-- Sumanta</p>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>
    );
  };

  export default Testimonials;