export default function Content(){

    return (
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">My favorite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">กิจกรรมยามว่าง</h3>
              <p className="text-gray-600">
                เล่นเกมส์ ดูหนัง ฟังเพลง
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p className="text-gray-600">
                Our team specializes in creating responsive and user-friendly mobile applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                We offer a wide range of digital marketing services to help grow your business online.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

  