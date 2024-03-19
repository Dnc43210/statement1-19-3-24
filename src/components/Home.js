import React from "react";

export default function Home() {
  return (
    <div class="absolute w-full">
      <img
        src="https://img.freepik.com/free-photo/abstract-blur-shopping-mall_74190-4926.jpg?t=st=1710832532~exp=1710836132~hmac=472bacff5583fdd8e10a7a6b8f12fc48d21dfe3ca009db9b73add91c3162d96d&w=740"
        alt="Image"
        class="w-full h-[90vh] object-cover object-center"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="absolute inset-0 flex items-center justify-center text-white">
        {/* <!-- Your overlay content goes here --> */}
        <h1 class="text-[5vw] font-bold text-wrap">PharmaSea Pharmaceuticals</h1>
      </div>
    </div>
  );
}
