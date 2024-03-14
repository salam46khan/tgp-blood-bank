import PropTypes from 'prop-types'
const FaqItems = ({faq}) => {
    const {question, answer} = faq
    return (
        <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title bg-red-50 text-cyan-600 text-xl font-medium">
               <p> {question} </p>
            </div>
            <div className="collapse-content text-slate-400 bg-white">
               <p> {answer} </p>
            </div>
        </div>
    );
};

FaqItems.propTypes = {
    faq : PropTypes.object
}
export default FaqItems;