import { useState } from "react";

function Card({ data }) {
  const [flippedStates, setFlippedStates] = useState(new Array(data.length).fill(false));

  const handleFlip = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <div key={index} className="relative perspective mx-12 my-5">
          <div className={`w-60 h-60 duration-700 transform-style preserve-3d ${flippedStates[index] ? 'rotate-y-180' : ''}`}>
            
            {/* Front Side */}
            <div className="absolute w-full h-full flex flex-col justify-around bg-cyan-400 rounded-xl backface-hidden">
              <h1 className="text-black px-5 text-center font-extrabold underline text-xl">Joke {index + 1}</h1>
              <p className="text-black px-5 text-center text-lg">{item.setup}</p>
              <div className="flex justify-center pb-3">
                <button
                  className="bg-black w-32 h-8 rounded-full hover:opacity-80"
                  onClick={() => handleFlip(index)} 
                >
                  Reveal?
                </button>
              </div>
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full flex flex-col justify-around bg-cyan-400 rounded-xl backface-hidden rotate-y-180">
              <p className="text-black px-5 text-center text-lg">{item.punchline}</p>
              <div className="flex justify-center pb-3">
                <button
                  className="bg-black w-32 h-8 rounded-full hover:opacity-80"
                  onClick={() => handleFlip(index)} 
                >
                  Go Back
                </button>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
