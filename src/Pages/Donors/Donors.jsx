import { useState } from "react";
import PagesBg from "../../Shared/PagesBg";
import useReadyDonor from "../../hooks/useReadyDonor";
import DonorCard from "../../Components/DonorCard";

const Donors = () => {
    const [readyDonor] = useReadyDonor();
    const [donor, setDonor] = useState(readyDonor)
    return (
        <div>
            <PagesBg title={'All Donors'}></PagesBg>
            <div className="py-14 px-3 mb-14">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-center gap-5 items-center flex-wrap">
                        {
                            donor?.map(donor => <DonorCard key={donor._id} donor={donor}></DonorCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donors;