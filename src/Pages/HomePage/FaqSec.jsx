import FaqItems from '../../Components/FaqItems';
import faqPic from '../../assets/pic/FAQs-rafiki.png';
import useFaq from '../../hooks/useFaq';

const FaqSec = () => {
    const [faq] = useFaq()
    // console.log(faq);
    return (
        <div className="py-14 px-3 faq-bg">
            <div className="container mx-auto flex flex-col items-center md:flex-row gap-4">
                <div className='w-full md:w-1/2 '  
                    
                    data-aos="zoom-in-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <img className='w-3/4 mx-auto' src={faqPic} alt="" />
                </div>
                <div className='h-full md:w-1/2' 
                    
                    data-aos="zoom-in-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                >
                    <p className='text-4xl font-bold text-cyan-600'>FAQ </p>
                    <hr className='border-2 border-red-500 w-1/3 my-2' />
                    <div className='mt-6'>
                        <div className="join join-vertical w-full">
                            {
                                faq?.map(faq => <FaqItems key={faq._id} faq={faq}></FaqItems>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSec;