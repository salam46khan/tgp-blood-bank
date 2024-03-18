import ValidReqCard from "../../Components/ValidReqCard";
import PagesBg from "../../Shared/PagesBg";
import useValidRequest from "../../hooks/useValidRequest";

const DonationReq = () => {
    const [validReq] = useValidRequest()
    return (
        <div>
            <PagesBg title={'Donation Request'}></PagesBg>
            <div className="py-14 px-3 mb-14">
                <div className="container mx-auto">
                    <div className="flex justify-center items-stretch flex-wrap gap-5">
                        {
                            validReq?.map(req => <ValidReqCard key={req._id} req={req}></ValidReqCard>)
                        }
                        {/* <ValidReqCard></ValidReqCard> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationReq;