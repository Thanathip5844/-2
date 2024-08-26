export default function Footer(){

    return (
      <footer className="bg-orange-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              &copy; 2024 My Website. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

  