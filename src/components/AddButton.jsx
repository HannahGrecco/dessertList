import cartIcon from '../assets/images/icon-add-to-cart.svg';

function AddButton (){
    return(
        <>
        <button className="flex rounded-[20px]"><img src={cartIcon} alt="Cart Icon" />Add to Cart</button>
        </>
    )
}
export default AddButton