export function Footer() {
    return (
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="mt-4">
            <a href="#" className="text-gray-300 hover:text-blue-400 mx-2 transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 mx-2 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-400 mx-2 transition-colors duration-300">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer