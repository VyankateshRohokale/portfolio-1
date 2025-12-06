'use client';
import React, { useState } from 'react';
import { Star, Quote, Twitter, Github, Globe, ChevronRight, ChevronLeft } from 'lucide-react';

// Testimonials removed per user request.
const testimonials: Array<any> = [];

// const TestimonialsSection = () => {

//   return (
//     <section className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-mono">
//             What Our <span className="text-lime-400">Clients Say</span>
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
//             Dont just take our word for it. Heres what industry leaders say about working with us.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial) => (
//             <div 
//               key={testimonial.id}
//               className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 hover:border-lime-400 transition-all duration-300 group hover:scale-105"
//             >
//               <div className="flex items-center mb-4">
//                 <Quote className="h-8 w-8 text-lime-400 mr-3" />
//                 <div className="flex">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
//                   ))}
//                   {[...Array(5 - testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-4 w-4 text-gray-600" />
//                   ))}
//                 </div>
//               </div>

//               <p className="text-gray-300 mb-6 leading-relaxed italic font-mono">
//                 {testimonial.content || "Waiting for testimonial"}
//               </p>

//               <div className="flex items-center">
//                 <img 
//                   src={testimonial.image} 
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-lime-400"
//                 />
//                 <div>
//                   <h4 className="text-white font-semibold font-mono">{testimonial.name}</h4>
//                   <p className="text-gray-400 text-sm font-mono">{testimonial.role}</p>
//                   <p className="text-lime-400 text-sm font-mono">{testimonial.company}</p>
//                 </div>
//               </div>

//               <div className="mt-4 pt-4 border-t border-gray-800">
//                 <span className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded font-mono">
//                   Project: <span className="text-lime-400">{testimonial.project}</span>
//                 </span>
//                 <div className="mt-2 flex space-x-4">
//                   {testimonial.social.map((social, index) => (
//                     <a 
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-400 hover:text-lime-400 transition-colors duration-300 text-sm font-mono"
//                     >
//                       {social.icon}
//                     </a>
//                   ))}

//                   </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;


const TestimonialsSection = () => {
  if (!testimonials || testimonials.length === 0) return null;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerView >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - itemsPerView) : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-mono">
            What Our <span className="text-lime-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            Dont just take our word for it. Heres what industry leaders say about working with us.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative ">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-lime-400 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-lime-400/10 h-[450px] flex flex-col"
              >
                {/* Header with Avatar and Info */}
                <div className="flex items-center mb-6 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-lime-400/50 group-hover:border-lime-400 transition-colors duration-300"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-bold font-mono text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm font-mono">{testimonial.role}</p>
                    <p className="text-lime-400 text-sm font-mono font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 flex-shrink-0">
                  <div className="flex mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gray-600" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-lime-400/60" />
                </div>

                {/* Content - Fixed with hidden scrollbar */}
                <div className="flex-1 mb-4 overflow-hidden">
                  <div className="h-full overflow-y-auto pr-2 scrollbar-hide">
                    <p className="text-gray-300 leading-relaxed italic font-mono text-sm">
                      {testimonial.content || "Waiting for testimonial"}
                    </p>
                  </div>
                </div>


                {/* Footer */}
                <div className="pt-4 border-t border-gray-800/50 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full font-mono">
                      <span className="text-lime-400 font-semibold">{testimonial.project}</span>
                    </span>
                    <div className="flex space-x-3">
                      {testimonial.social.map((social: any, index: number) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-lime-400 transition-colors duration-300 hover:scale-110 transform"
                        >
                          {React.cloneElement(social.icon, { className: "w-4 h-4" })}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 rounded-full border border-gray-700 bg-gray-900/50 text-gray-400 hover:text-lime-400 hover:border-lime-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transform"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerView) === index
                      ? 'bg-lime-400 scale-110'
                      : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerView >= testimonials.length}
              className="p-3 rounded-full border border-gray-700 bg-gray-900/50 text-gray-400 hover:text-lime-400 hover:border-lime-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transform"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;