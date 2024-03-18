import PropTypes from 'prop-types'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useMyRequest from '../../hooks/useMyRequest';
const MyRequestCard = ({ req }) => {
    const { message, photo, distic, upozila, hospital, bloodGroup, donationDate, patient, status, _id} = req;

    const [refetch] = useMyRequest()
    const axiosPublic = useAxiosPublic()

    const handleStatusChange = (event) => {
        event.preventDefault()
        const form = event.target
        const status = form.value;
        const id = form.id;
        const post = { status }

        console.log(post);
        axiosPublic.put(`/request-state/${id}`, post)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    };
    return (
        <div className="w-full border rounded-md shadow-md shadow-[#0002] overflow-hidden">
            <div className='flex flex-col md:flex-row gap-4 items-center'>
                <div className='w-full md:w-2/5'>
                    <div className='w-full min-h-full'>
                        <img className='min-w-full min-h-full object-cover' src={photo} alt="" />
                    </div>
                </div>

                <div className='w-full md:w-3/5 p-2 text-slate-400'>
                    <p className='text-xl font-bold text-cyan-600'>{message}</p>
                    <p>Donation Date: <span className='font-bold'>{donationDate}</span></p>
                    <p>Patient Name : {patient}</p>
                    <p>Address: {hospital}, {upozila}, {distic}</p>
                    <p>Blood Group : <span className='font-bold'>{bloodGroup}</span> </p>
                    <div>
                        <hr />
                        <div className='mt-3'>
                            <select name="category" value={status} onChange={handleStatusChange} className="select select-bordered shadow appearance-none border rounded-full  select-sm bg-red-500 text-white leading-tight focus:outline-none caption-bottom focus:shadow-outline" id={_id}>
                                <option value="Pending">Pending</option>
                                <option value="Inprogress">Inprogress</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

MyRequestCard.propTypes = {
    req: PropTypes.object
}
export default MyRequestCard;