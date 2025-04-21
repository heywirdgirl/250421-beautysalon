import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute w-full h-[86px] px-2 py-0 flex justify-between items-center z-50" >
        <a href="#" className="logo text-blue-700 no-underline font-semibold text-3xl font-sans text-shadow-custom transition-all duration-400 hover:scale-110">AK Beauty Salon</a>
        <nav>
            <ul className="relative flex">
                <li className="list-none relative"><a className="text-base px-5 py-5 no-underline text-red-700 flex justify-between font-medium transition-all duration-400 ease-in-out hover:text-primary" href="#">Home</a></li>
                <li className="list-none relative"><a className="text-base px-5 py-5 no-underline text-red-500 flex justify-between font-medium transition-all duration-400 ease-in-out hover:text-primary" href="#">Home</a></li>
                <li className="list-none relative"><a className="text-base px-5 py-5 no-underline text-red-500 flex justify-between font-medium transition-all duration-400 ease-in-out hover:text-primary" href="#">Home</a></li>

            </ul>
        </nav>
    </header>
  );
}