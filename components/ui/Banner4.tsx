import Image from "next/image";
import React from "react";

function Banner4() {
  const Products = [
    {
      id: 1,
      name: "Linkedin Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/g7yJv6v/f3.png",
    },
    {
      id: 2,
      name: "Facebook Ads Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/w4PmL9P/fa.jpg",
    },
    {
      id: 3,
      name: "Search Engine Optimization",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/6gLzd07/f2.jpg",
    },
    {
      id: 4,
      name: "Google Ads Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/FKJYkyT/fa1.jpg",
    },
    {
      id: 5,
      name: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/pbdgr9Q/f4.jpg",
    },
    {
      id: 6,
      name: "Google Ads Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/vXhYjTk/f5.png",
    },
  ];
  return (
    <div className="bg-[#171616] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Products.map((product) => (
          <div
            key={product.id}
            className="max-w-[350px] w-[999px] border space-y-4 rounded-lg bg-[#2d2c2c] p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]"
          >
            <Image
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={product.Url}
              alt={product.name}
            />
            <div className="grid gap-2">
              <h1 className="text-lg  font-semibold ">{product.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner4;
