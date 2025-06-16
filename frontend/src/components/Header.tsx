import { Menu } from "lucide-react";
export default function Header() {
    return (
        <header className="bg-white shadow-md px-3 py-3 flex flex-col md:flex-row items-center justify-between z-10 fixed top-0 left-0 w-full">
            <div className="flex items-center space-x-3">
                <button className="flex items-center p-1 rounded-full hover:bg-gray-300 cursor-pointer">
                    <Menu />
                </button>
                <h1 className="text-black text-2xl font-extrabold tracking-wide select-none">
                    English Mastery
                </h1>
            </div>
            {/* <div className="flex-grow flex justify-center">
                <form
                    className="flex w-full max-w-md"
                    role="search"
                    aria-label="Search English learning content"
                >
                    <label className="sr-only" htmlFor="search-input">
                        Tìm kiếm
                    </label>
                    <input
                        aria-describedby="search-button"
                        className="flex-grow rounded-l-full px-4 py-2 text-indigo-900 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white transition-colors duration-300"
                        id="search-input"
                        name="search"
                        placeholder="Tìm kiếm..."
                        type="search"
                    />
                    <button
                        aria-label="Submit search"
                        className="bg-yellow-400 hover:bg-yellow-500 rounded-r-full px-5 py-2 text-indigo-900 font-bold transition-colors duration-300 flex items-center justify-center"
                        id="search-button"
                        type="submit"
                    >
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div> */}
        </header>
    );
}
