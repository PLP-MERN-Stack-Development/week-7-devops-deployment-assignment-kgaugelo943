export default function Footer() {
    return (
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600 mt-10">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    );
  }