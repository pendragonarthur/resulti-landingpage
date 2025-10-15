export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2B4F] text-white ">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>
            &copy; {currentYear} Resulti Compressores. Todos os direitos
            reservados.
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
