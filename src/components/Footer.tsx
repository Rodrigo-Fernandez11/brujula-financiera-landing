import Image from "next/image";
import Logo from "../../public/Logo.webp";

export const Footer = () => {
  return (
    <footer className="rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center space-x-2 pb-5">
            <Image
              src={Logo}
              alt="Logo Brujula Financiera"
              width={50}
              height={50}
            />
            <div>
              <h2 className="text-lg font-bold">Brujula Financiera</h2>
              <p className="text-sm">+54 9 11 62092340</p>
            </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Brujula Financiera. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};
