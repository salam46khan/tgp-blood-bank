
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../Profider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxiosPublic';
const ValidReqCard = ({ req }) => {
    const { message, bloodGroup, donationDate, hospital, upozila, distic, patient, _id, reqName, reqEmail } = req;
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const handleInterested = id => {


        Swal.fire({
            title: "Submit your Phone Number",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Submit",
            showLoaderOnConfirm: true,

            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {

                const ReqId = id;
                const donorName = user?.displayName;
                const donorEmail = user?.email;
                const phone = result.value;
                const photo = req?.photo;

                const InterestedInfo = { phone, ReqId, reqName, reqEmail, patient, bloodGroup, photo, donationDate, donorName, donorEmail }

                console.log(InterestedInfo);
                axiosPublic.post('/interested', InterestedInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Your Interest submit Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });



        // const ReqId = id;
        // const donorName = user.displayName;
        // const donorEmail = user.email;
        // const phone = PhoneNumber;
        // const photo = req?.photo;

        // const InterestedInfo = { phone, ReqId, reqName, reqEmail, patient, bloodGroup, photo, donationDate, donorName, donorEmail }

        // console.log(InterestedInfo);
    }
    return (
        <div className="bg-white p-2 w-full max-w-xs overflow-hidden rounded-md shadow-lg shadow-[#0002] relative">
            <div className='absolute top-8 left-8 py-1 px-20 -rotate-45 -translate-y-1/2 -translate-x-1/2 bg-red-500 text-white text-center'>
                <p className='font-bold'>{bloodGroup}</p>
            </div>
            <div className='h-[200px] border overflow-hidden rounded-md'>
                <img className='min-h-full min-w-full object-cover' src={req?.photo} alt="" />
            </div>
            <div className='p-2  h-[190px]'>
                <p className='font-semibold text-xl'>{message}</p>
                <p className='text-red-500'>{donationDate}</p>
                <p>Patient Name: {patient}</p>
                <p >Hospital: {hospital}</p>
                <p>Address: {upozila}, {distic}</p>
            </div>
            <hr className='mb-2' />
            <div>
                <button onClick={() => handleInterested(_id)} className={`my-btn ${user ? '' : 'btn-disabled'}`}>Interested</button>
            </div>
        </div>
    );
};
ValidReqCard.propTypes = {
    req: PropTypes.object
}

export default ValidReqCard;