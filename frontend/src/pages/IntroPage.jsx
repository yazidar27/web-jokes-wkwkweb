import React from "react";
import TypeWriter from "../components/TypeWriter";
import ButtonLink from "../components/buttons/ButtonLink";

const IntroPage = () => {
  return (
    <div className="flex flex-col min-h-[70vh] justify-center items-center">
      <TypeWriter
        className="text-gray-800 text-center font-semibold text-4xl p-4 font-display tracking-wide mb-5"
        text="Write your best jokes and make people laugh."
      />
      <p className="text-center text-lg text-gray-700">
        Everyone has a sense of humor
      </p>

      <div className="flex flex-row justify-center align-center p-3 gap-4 mt-8">
        <ButtonLink title="Start Writing Jokes" to="jokes/create" />
        <ButtonLink title="Explore Jokes" />
      </div>
    </div>
  );
};

export default IntroPage;
