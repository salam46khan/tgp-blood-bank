import MyRequestCard from "../../Components/DashComponents/MyRequestCard";
import useMyRequest from "../../hooks/useMyRequest";

const DashMyRequest = () => {
    const [myRequest] = useMyRequest()
    console.log(myRequest);
    return (
        <div>
            <p className="text-3xl font-bold text-center text-cyan-600">My Request</p>
            <div className="pt-8 p-5 flex justify-center">
                <div className="w-full max-w-3xl rounded-lg shadow-lg shadow-[#0003] p-5 bg-white flex flex-col gap-5">
                    {
                        myRequest?.map(req => <MyRequestCard key={req._id} req={req}></MyRequestCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DashMyRequest;