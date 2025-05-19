const WhyMe = () => {
  const listIems=[
            "Creativity with strategy to create a brand presence that’s unforgettable.",
            "I deliver results with consistency, agility, and a keen understanding of trends.",
            "I bring a personal touch to every project — your goals are my mission.",
          ]
  return (
    <>
      <h2 className="mt-24 text-lg font-medium tracking-tight text-[rgb(152,243,151)] sm:text-xl text-center mb-4">
        Why Work With Me?
      </h2>
      <div className="p-6 text-slate-50">
        <ul className="space-y-4 text-lg">
          {listIems.map((text, i) => (
            <li key={i} className="flex items-start gap-2">
              <span>🔹</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default WhyMe;
