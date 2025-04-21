export default function Herosection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white flex items-center justify-center px-4"
      style={{ backgroundImage: `url('/images/home-model4.jpg')` }}
    >
      <div className="text-center z-10 max-w-3xl">
        <div className="text-sm text-gray-200 mb-2">123, Central Square, New York</div>
        <h2 className="text-5xl font-bold text-white mb-4">AK Beauty Salon</h2>
        <p className="text-lg text-gray-100 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam aliquid eaque,
          quaerat obcaecati enim placeat earum qui illum distinctio!
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
            Get Gorgeous
          </a>
          <a href="#" className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-pink-600 transition">
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
};