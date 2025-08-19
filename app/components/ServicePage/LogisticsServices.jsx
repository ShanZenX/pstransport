import Image from "next/image";

const services = [
  {
    title: "Container Freight",
    description: "We keep your items damage free solution",
    features: [
      "Flexibility & Versatility",
      "Controlled Environment",
      "Speed and Efficiency",
    ],
    image: "/LogisticsLorry.png",
  },
  {
    title: "Supply Freight",
    description: "We keep your items damage free solution",
    features: [
      "Flexibility & Versatility",
      "Controlled Environment",
      "Speed and Efficiency",
    ],
    image: "/LogisticsLorry.png",
  },
];

export default function Services() {
  return (
    <section className="py-12">
      <div className="m-3 sm:m-0">
       <h2 className="text-2xl md:text-[32px] font-bold mb-4 flex justify-center items-center gap-2 text-center">
<span className="h-[3px] w-[20px] bg-black block"></span>
  Our Services To Explore
<span className="h-[3px] w-[20px] bg-black block"></span>
</h2>


        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="w-[300] h-[300]  md:w-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-900 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-indigo-900 font-semibold">
                  Read Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
