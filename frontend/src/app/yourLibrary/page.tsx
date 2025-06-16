import { Trash } from "lucide-react";
export default function YourLibraryPage() {
    return (
        <div className="">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-[#1E2A4D] font-semibold text-xl leading-6">
                    Tạo một học phần mới
                </h1>
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="text-[#1E2A4D] text-sm font-normal leading-5 border border-[#D6DCEE] rounded-full px-5 py-2 hover:bg-[#E6E9F2] transition"
                    >
                        Tạo
                    </button>
                    <button
                        type="button"
                        className="bg-[#3B5AFE] text-white text-sm font-semibold leading-5 rounded-full px-5 py-2 hover:bg-[#2A45CB] transition"
                    >
                        Tạo và ôn luyện
                    </button>
                </div>
            </header>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder='Nhập tiêu đề, ví dụ "Sinh học - Chương 22: Tiến hóa"'
                    className="w-full rounded-lg border border-transparent bg-white px-4 py-3 text-[#9AA5B1] text-sm placeholder-[#9AA5B1] focus:outline-none focus:ring-2 focus:ring-[#3B5AFE] focus:border-transparent"
                />
                <textarea
                    rows={2}
                    placeholder="Thêm mô tả..."
                    className="w-full rounded-lg border border-transparent bg-white px-4 py-3 text-[#9AA5B1] text-sm placeholder-[#9AA5B1] resize-none focus:outline-none focus:ring-2 focus:ring-[#3B5AFE] focus:border-transparent"
                ></textarea>

                <section className="space-y-4 mt-6">
                    <article className="bg-white rounded-lg p-4 border border-transparent hover:border-[#D6DCEE] transition">
                        <div className="flex justify-between text-[#9AA5B1] text-xs font-normal leading-4 mb-3 select-none">
                            <span className="text-[#939bb4] font-bold text-base">
                                1
                            </span>
                            <div className="">
                                <button
                                    type="button"
                                    className="text-[#D6DCEE] hover:text-[#9AA5B1] transition"
                                    aria-label="Delete"
                                >
                                    <Trash className="h-4 w-4 cursor-pointer" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="pb-1 w-full border-b border-[#1E2A4D] border-opacity-50 text-[#1E2A4D] text-sm font-normal leading-5 focus:outline-none focus:border-yellow-400 focus:border-b-2"
                                    aria-label="Thuật ngữ"
                                />
                                <label className="block mt-1 text-[#9AA5B1] text-[10px] font-semibold leading-3 uppercase select-none">
                                    Thuật ngữ
                                </label>
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="pb-1 w-full border-b border-[#1E2A4D] border-opacity-50 text-[#1E2A4D] text-sm font-normal leading-5 focus:outline-none focus:border-yellow-400 focus:border-b-2"
                                    aria-label="Định nghĩa"
                                />
                                <label className="block mt-1 text-[#9AA5B1] text-[10px] font-semibold leading-3 uppercase select-none">
                                    Định nghĩa
                                </label>
                            </div>
                            <button
                                type="button"
                                className="flex flex-col items-center justify-center border border-[#D6DCEE] border-dashed rounded-md w-20 h-16 text-[#1E2A4D] text-xs font-semibold leading-4 hover:bg-[#E6E9F2] transition"
                            >
                                <i className="fas fa-image text-lg mb-1"></i>
                                Hình ảnh
                            </button>
                        </div>
                    </article>

                    <article className="bg-white rounded-lg p-4 border border-transparent hover:border-[#D6DCEE] transition">
                        <header className="flex justify-between text-[#9AA5B1] text-xs font-normal leading-4 mb-3 select-none">
                            <span className="text-[#939bb4] font-bold text-base">
                                2
                            </span>
                            <div className="">
                                <button
                                    type="button"
                                    className="text-[#D6DCEE] hover:text-[#9AA5B1] transition text-xs"
                                    aria-label="Delete"
                                >
                                    <Trash className="h-4 w-4 cursor-pointer" />
                                </button>
                            </div>
                        </header>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="pb-1 w-full border-b border-[#1E2A4D] border-opacity-50 text-[#1E2A4D] text-sm font-normal leading-5 focus:outline-none focus:border-yellow-400 focus:border-b-2"
                                    aria-label="Thuật ngữ"
                                />
                                <label className="block mt-1 text-[#9AA5B1] text-[10px] font-semibold leading-3 uppercase select-none">
                                    Thuật ngữ
                                </label>
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="pb-1 w-full border-b border-[#1E2A4D] border-opacity-50 text-[#1E2A4D] text-sm font-normal leading-5 focus:outline-none focus:border-yellow-400 focus:border-b-2"
                                    aria-label="Định nghĩa"
                                />
                                <label className="block mt-1 text-[#9AA5B1] text-[10px] font-semibold leading-3 uppercase select-none">
                                    Định nghĩa
                                </label>
                            </div>
                            <button
                                type="button"
                                className="flex flex-col items-center justify-center border border-[#D6DCEE] border-dashed rounded-md w-20 h-16 text-[#1E2A4D] text-xs font-semibold leading-4 hover:bg-[#E6E9F2] transition"
                            >
                                <i className="fas fa-image text-lg mb-1"></i>
                                Hình ảnh
                            </button>
                        </div>
                    </article>
                </section>

                <button
                    type="button"
                    className="w-full mt-6 bg-white border border-transparent rounded-lg py-6 text-[#1E2A4D] text-xs font-semibold leading-4 uppercase tracking-wider hover:border-[#3BC9DB] hover:text-[#3BC9DB] transition cursor-pointer"
                    style={{ boxShadow: "inset 0 -3px 0 #3BC9DB" }}
                >
                    Thêm thẻ
                </button>
            </form>
        </div>
    );
}
