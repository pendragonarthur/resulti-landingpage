import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function TopBar() {
  const companyAddress = "Rua Exemplo, 123, Bairro, Cidade - SC";
  const companyHours = "Seg - Sex | 08:00 - 18:00";
  const companyPhone = "47 9999-9999";
  const companyEmail = "contato@resulti.com.br";

  return (
    <div className="bg-[#0D2B4F] text-[#F0F4F8] text-sm py-3 font-lato">
      <div className="flex items-center justify-evenly">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-resoluti-accent mt-0.5" />
            {companyAddress}
          </span>
          <span className="hidden md:flex items-center">
            <FaClock className="mr-2 text-resoluti-accent mt-0.5" />
            {companyHours}
          </span>
        </div>

        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <a
            href={`tel:${companyPhone.replace(/\s/g, "")}`}
            className="flex items-center hover:text-resoluti-accent transition-colors"
          >
            <FaPhoneAlt className="mr-2 text-resoluti-accent mt-0.5" />
            {companyPhone}
          </a>
          <a
            href={`mailto:${companyEmail}`}
            className="hidden sm:flex items-center hover:text-resoluti-accent transition-colors"
          >
            <FaEnvelope className="mr-2 text-resoluti-accent mt-0.5" />
            {companyEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
