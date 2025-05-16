import barChartImage from "../../assets/bbar.jpg";
import zoneChartImage from "../../assets/zone.jpg";
import smallBarChartImage from "../../assets/sbar.jpg";

export default function Charts() {
  return (
    <section className="bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
          Analysis on Forest Loss
        </h2>
        <p className="text-sm text-[#555] mt-2">
          Deforestation trends based on regions
        </p>
      </div>

      {/* Chart 1 */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto mb-10">
        <img
          src={barChartImage}
          alt="Deforestation Trends Chart"
          className="w-full h-auto rounded"
        />
        <p className="text-xs text-center text-gray-500 mt-4">
          This information is obtained in the first bar chart was obtained from World RainForest on tree cover loss based on regions in Ghana between the year 2001 - 2020
        </p>
      </div>

      

      {/* Chart 3 */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto mb-10">
        <img
          src={smallBarChartImage}
          alt="Forest Type Loss Summary"
          className="w-full h-auto rounded"
        />
        <p className="text-xs text-center text-gray-500 mt-4">
          Summary of deforestation by forest type categorized across forest reserves, wetlands, and protected zones.
        </p>
      </div>

        {/* Chart 2 */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto ">
        <img
          src={zoneChartImage}
          alt="Forest Alert Zones"
          className="w-full h-auto rounded"
        />
        <p className="text-xs text-center text-gray-500 mt-4">
          This chart shows alert zones identified through satellite image detection and AI-based monitoring of illegal forest activities in Ghana.
        </p>
      </div>

    </section>
  );
}
