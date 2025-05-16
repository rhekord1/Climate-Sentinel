import galamseyImage from "../../assets/ar1.jpg";
import galamseyImage1 from "../../assets/ar2.jpg";
import galamseyImage2 from "../../assets/ar3.jpg";

const articles = [
  {
    title: "Ghana Gold Mining Disaster",
    image: galamseyImage,
    content: `The widespread illegal gold mining, known locally as "galamsey," has escalated into a severe environmental crisis in Ghana, employing sophisticated methods and involving foreign actors who disregard environmental regulations. This has resulted in the alarming pollution of major rivers with toxic mercury, rendering them unusable and threatening the health of communities and ecosystems, a situation WaterAid has grimly labeled "ecocide." The relentless pursuit of gold has also encroached upon vital forests and cocoa farms, causing extensive land degradation and jeopardizing Ghana's significant cocoa production. Despite growing public outcry and governmental pledges to address the issue, the illegal mining persists, allegedly due to the entanglement of influential figures and the dire economic circumstances that compel many to engage in this destructive yet profitable activity. Fueled by increasing global gold prices and Ghana's economic challenges, this gold rush presents a grave danger of long-term water scarcity and irreversible environmental damage if decisive action is not taken.`,
    citation: `Wilberforce, M. & Nunoo, F. (2024, October 20). We are poisoning ourselves': Ghana gold rush sparks environmental disaster. BBC News.`
  },
  {
    title: "Human Rights and Illegal Mining Concerns Across Africa",
    image: galamseyImage1,
    content: `A recent report identified the Democratic Republic of Congo and Zambia as the African countries with the most mineral mining abuses between 2010 and 2024, with copper extraction being a major driver of intimidation, beatings, and arbitrary detentions; alarmingly, these two nations, along with Guinea, accounted for 40% of mining-related deaths in 2024. In Nigeria, the burgeoning lithium mining sector, largely comprised of illegal operations, has led to the exploitation of child labor. Meanwhile, in Ghana, illegal miners have persistently invaded established mining sites, disrupting operations and posing risks to workers, resulting in numerous arrests. Across these instances, a concerning trend emerges where the growing global demand for minerals, crucial for clean energy technologies, is linked to increased human rights violations, environmental harm, and deepening inequalities within vulnerable African communities.`,
    citation: `Taiwo Adebayo. In Nigeria’s lithium boom, many mines are illegal and children do much of the work. AP News. DRC, Zambia Top Mining Abuse Cases In Africa. Black Star News`
  },
  {
    title: "Dangerous Effects of Illegal Mining",
    image: galamseyImage2,
    content: `Illegal mining, conducted without regulations and permits, generates severe environmental and health hazards far surpassing those of legal operations. This illicit activity leads to sinkholes, long-lasting soil and groundwater contamination, chemical spills, and a significant decline in biodiversity. Moreover, illegal mining exacerbates climate change through deforestation and the emission of greenhouse gases. Workers face heightened risks from toxic substances and unsafe conditions due to the lack of safety protocols.`,
    citation: `Greentumble. (2017, April 4). The Dangerous Effects of Illegal Mining. Greentumble Environmental Awareness.`
  }
];

export default function ArticleSection() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#333]">
          Welcome to Climate Sentinel
        </h2>
        <p className="text-sm text-green-600 mt-1">
          What would you like to know?
        </p>
      </div>

      {/* Article List */}
      <div className="max-w-5xl mx-auto space-y-16">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-6">
            {/* Image */}
            <div className="w-full sm:w-48 flex-shrink-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-bold text-lg sm:text-xl text-[#1A1A1A] mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-[#4d4d4d] leading-relaxed mb-4 whitespace-pre-line">
                {article.content}
              </p>
              <p className="text-sm italic text-[#717171]">{article.citation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
