import Link from "next/link";
import { House } from "lucide-react";
import { FolderClosed } from "lucide-react";
export default function Sidebar() {
    return (
        <aside
            aria-label="Sidebar Navigation"
            className="pt-14 w-64 bg-white shadow-lg flex flex-col overflow-y-auto"
        >
            <nav className="flex-1 px-4 py-6 space-y-2">
                <Link
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    href="#"
                >
                    <House className="w-5" />
                    <span className="ml-3 font-medium">Trang chủ</span>
                </Link>
                <Link
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    href="/yourLibrary"
                >
                    <FolderClosed className="w-5" />
                    <span className="ml-3 font-medium">Thư viện của bạn</span>
                </Link>
            </nav>
            <div className="border-t border-gray-200 px-4 py-4">
                <button
                    className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    type="button"
                >
                    <i className="fas fa-sign-out-alt mr-2"></i>
                    Logout
                </button>
            </div>
        </aside>
    );
}
