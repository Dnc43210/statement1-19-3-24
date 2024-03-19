import React from "react";

export default function About() {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
            felis elit. Quisque tincidunt sit amet metus ac congue. Phasellus
            lorem libero, hendrerit sed ante eu, rutrum vestibulum massa. In
            porttitor sapien diam, ac bibendum metus viverra id. Nullam eget
            purus laoreet ex iaculis laoreet vel in ex. Ut commodo libero vel
            nulla euismod, vel elementum arcu feugiat. Sed nunc neque, tristique
            sit amet posuere in, congue vitae ex.Sed ante dolor, faucibus non
            libero quis, pretium porta elit. Cras quis velit sit amet tellus
            vulputate egestas vitae et nisl. Sed nulla lorem, placerat a
            lobortis non, tempor in libero. Cras non leo odio. Suspendisse
            potenti. Pellentesque fringilla dignissim odio, in luctus enim porta
            eu. Donec pellentesque commodo dapibus. Aenean gravida metus et
            purus gravida elementum. Nam placerat ac sapien quis varius. In
            ullamcorper lorem dui, in lacinia nunc viverra maximus. Suspendisse
            lacinia fermentum luctus. Donec faucibus condimentum vestibulum.
            Aenean sagittis id ex id pharetra. Cras in fringilla est. Sed
            efficitur nibh et diam eleifend maximus. Aenean nunc mi, tincidunt
            vel odio eu, euismod accumsan tortor. Nam eget libero nec libero
            iaculis consequat. Sed semper mauris ut finibus rutrum. Duis eget
            hendrerit enim. Curabitur ligula leo, iaculis sed risus vitae,
            placerat faucibus massa. Donec feugiat ultricies aliquam. Duis quis
            euismod dui. Fusce at imperdiet odio. Nam eget tempor odio, pretium
            finibus massa. Proin in eros rutrum, rutrum erat ut, sollicitudin
            eros.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Mauris vel tellus sit amet arcu lacinia venenatis non non urna.
            Maecenas at orci non purus convallis facilisis vitae eget turpis.
            Quisque fermentum, ligula quis vestibulum cursus, lacus lorem
            condimentum metus, vitae lacinia diam elit sed nulla. Aenean sit
            amet dolor convallis, egestas turpis eu, congue orci. In aliquet
            sodales venenatis. Praesent at lacus viverra, dictum risus ut,
            volutpat massa. Curabitur finibus erat in felis tempor aliquet.
            Phasellus tincidunt quis massa a ultrices. Nam ac nunc quis diam
            consequat elementum. Donec non vehicula odio. Cras efficitur
            malesuada libero et congue.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Olivia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Liam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
