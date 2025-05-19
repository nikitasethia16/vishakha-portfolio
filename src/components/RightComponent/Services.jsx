const Services = () => {
  const services = [
    {
      heading: " Social Media Management & Optimization",
      subheading:
        "Daily posting, engagement & growth strategies. Profile optimization & content planning. Performance tracking & analytics.",
    },
    {
      heading: "Meta Ads Campaigns & Creative Designing ",
      subheading:
        "Targeted Facebook & Instagram ad campaigns. A/B testing & performance reports. Social media creatives & branding. Logo & graphics designing. Ad creatives & promotional content.",
    },
    {
      heading: "Lead Generation &  Influencer Marketing",
      subheading:
        "Data-driven lead strategies. Email marketing & automation. Targeted audience outreach. Finding the right influencers. Brand collaboration & outreach. Performance tracking & ROI analysis",
    },
  ];

  return (
    <>
      <h2 className="mt-24 text-lg font-medium tracking-tight text-[rgb(152,243,151)] sm:text-xl text-center mb-4">
        Services
      </h2>
      {services.map((e, i) => (
        <div
          className="p-6 rounded-xl shadow-lg text-white  m-5 bg-[rgb(25,33,51)]"
          key={i}
        >
          <h2 className="text-[1.2rem] font-bold mb-2">{e.heading}</h2>
          <p className="text-base leading-relaxed">{e.subheading}</p>
        </div>
      ))}
    </>
  );
};

export default Services;
