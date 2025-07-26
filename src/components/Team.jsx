import React from "react";
import Slider from "react-slick";

const Team = () => {
  const teachers = [
    {
      id: 1,
      image: '/1.png',
    },
    {
      id: 2,
      image: '/2.png',
    },
    {
      id: 3,
      image: '/3.png',
    },
    {
      id: 4,
      image: '/4.png',
    },
    {
      id: 5,
      image: '/5.png',
    },
    {
      id: 6,
      image: '/6.png',
    }
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="team" className="py-12 bg-blue-100 text-center">
      <div className="mb-8">
        <p className="text-lg text-gray-700">How We Have done it?</p>
        <h2 className="text-3xl font-semibold text-black">Meet Our Experienced Team</h2>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        <Slider {...settings}>
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="px-2 w-full flex-shrink-0 flex-grow-0"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
                {/* Square aspect ratio container for image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={`Teacher ${teacher.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `/api/placeholder/400/400`;
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};

export default Team;
