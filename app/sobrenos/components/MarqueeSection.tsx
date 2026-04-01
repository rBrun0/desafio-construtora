export const MarqueeSection = () => {
  const marqueeItems = [
    {
      text: "QUALIDADE EM",
      highlight: "TODOS OS DETALHES",
      minW: "min-w-[700px]",
    },
    { text: "POS VENDA", highlight: "ATIVO", minW: "min-w-[400px]" },
    {
      text: "COMPRA SEGURA",
      highlight: "EM TODO O PROCESSO",
      minW: "min-w-[700px]",
    },
  ];

  return (
    <section className="flex flex-col space-y-12 sm:space-y-24 w-full h-60 sm:h-96 overflow-hidden bg-customGray">
      {/* primeiro marquee - left */}
      <div className="w-full flex animate-marqueeLeft">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0 space-x-7">
            {marqueeItems.map((item, i) => (
              <span
                key={`${setIndex}-${i}`}
                className={`${item.minW} text-white text-2xl sm:text-4xl md:text-6xl font-bold shrink-0 px-4`}
              >
                {item.text} <br />{" "}
                <span className="text-mostard">{item.highlight}</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* segundo marquee - right */}
      <div className="w-full flex animate-marqueeRight">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex shrink-0 space-x-7">
            {[...marqueeItems].reverse().map((item, i) => (
              <span
                key={`${setIndex}-${i}`}
                className={`${item.minW} text-white text-2xl sm:text-4xl md:text-6xl font-bold shrink-0 px-4`}
              >
                {item.text} <br />{" "}
                <span className="text-mostard">{item.highlight}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
