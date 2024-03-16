import AllUserICount from "../../Components/DashComponents/AllUserICount";
import AllUsersManz from "../../Components/DashComponents/AllUsersManz";

const DashUsers = () => {
    return (
        <div>
            <div>
                <p className="text-3xl font-bold text-center text-cyan-600">All Users</p>
                <div className="p-5">
                    <AllUserICount></AllUserICount>
                </div>
                <div className="md:p-5">
                    <AllUsersManz></AllUsersManz>
                </div>
            </div>
        </div>
    );
};

export default DashUsers;