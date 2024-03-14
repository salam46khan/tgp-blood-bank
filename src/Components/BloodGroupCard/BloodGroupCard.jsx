import './BloodGroupCard.css';
import PropTypes from 'prop-types';
import { MdBloodtype } from "react-icons/md";

const BloodGroupCard = ({ group }) => {
    const { bloodGroup, donorQuantity } = group;
    return (
        <div className=" blood-flip-card">
            <div className='face front'>
                <div className='h-[150px] w-[150px] rounded-full flex justify-center items-center relative border-4 border-red-500 card-content'>
                    <div className='absolute bottom-0 right-0 h-[50px] w-[50px] rounded-full border-2 border-red-500 bg-[#fee] flex justify-center items-center'>
                        <MdBloodtype className='text-3xl text-red-500' />
                    </div>
                    <p className='text-5xl text-cyan-600 font-bold'>{bloodGroup}</p>
                </div>
            </div>
            <div className='face back flex flex-col'>

                <div className='text-center'>
                    <MdBloodtype className='text-5xl mx-auto text-red-500' />
                </div>
                <p className='text-white font-bold text-4xl'>{donorQuantity}</p>
                <p className='text-slate-200 font-semibold text-xl'>Donors</p>
            </div>
        </div>
    );
};
BloodGroupCard.propTypes = {
    group: PropTypes.object
}

export default BloodGroupCard;