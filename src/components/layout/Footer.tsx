export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-[#6390FA] mb-4 md:mb-0 transition-colors">Home</a>
          <a href="#" className="hover:text-[#6390FA] mb-4 md:mb-0 transition-colors">About Us</a>
          <a href="#" className="hover:text-[#6390FA] mb-4 md:mb-0 transition-colors">Verify Certificate</a>
          <a href="#" className="hover:text-[#6390FA] mb-4 md:mb-0 transition-colors">Blog</a>
          <a href="#" className="hover:text-[#6390FA] mb-4 md:mb-0 transition-colors">Privacy Policies</a>
          <a href="#" className="hover:text-[#6390FA] mb-4 md:mb-0 transition-colors">Contact Us</a>
        </div>
      </div>
      <div className="bg-[#6390FA] py-6 px-6 text-white text-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p>© TalentFlow 2026. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24h-3.31l7.739-8.848L.53 2.25h6.814l4.747 6.275 6.153-8.275zM17.15 21.056h1.831L7.26 4.025H5.29l9.86 17.031z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
