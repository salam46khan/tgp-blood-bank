import BloodGroupCard from "../../Components/BloodGroupCard/BloodGroupCard";
import useBloodGroup from "../../hooks/useBloodGroup";



const BloodGroupSec = () => {
    const [bloodGroup] = useBloodGroup()
    return (
        <div className="py-14 px-3 blood-group-bg">
            <div className="container mx-auto">
                <div className="w-full max-w-2xl mx-auto py-3 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <p className="text-white font-bold text-4xl">Blood Group</p>
                    <hr className='border-2 border-red-500 w-1/3 my-2 mx-auto' />
                    <p className="text-slate-200 text-xl">Join hands with us to save lives through blood donation. Every drop counts, and your contribution can make a significant difference</p>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-3 w-full max-w-6xl mx-auto p-5">
                        {
                            bloodGroup?.map(group => <BloodGroupCard key={group._id} group={group}></BloodGroupCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodGroupSec;