import { MdBloodtype } from "react-icons/md";
const PagesBg = () => {
    return (
        <div className="page-bg h-[200px] overflow-hidden">
            <div className="h-full w-full container mx-auto flex justify-center items-end">
                <div className="px-24 py-6 bg-cyan-600 relative rounded-t-[80%] shadow-inner shadow-slate-100">
                    <p className="text-3xl font-bold text-white">My Profile</p>
                    <div className="h-12 w-12 absolute left-1/2 rounded-full top-0 bg-cyan-600 shadow-inner shadow-slate-200 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center">
                        <MdBloodtype className="text-2xl text-red-400"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PagesBg;