import img1 from "../assets/images/image-waffle-desktop.jpg";
import img2 from "../assets/images/image-creme-brulee-desktop.jpg"
import img3 from "../assets/images/image-macaron-desktop.jpg";
import img4 from "../assets/images/image-tiramisu-desktop.jpg";
import img5 from "../assets/images/image-baklava-desktop.jpg"
import img6 from "../assets/images/image-meringue-desktop.jpg"
import img7 from "../assets/images/image-cake-desktop.jpg"
import img8 from "../assets/images/image-brownie-desktop.jpg"
import img9 from "../assets/images/image-panna-cotta-desktop.jpg"

import AddButton from "./AddButton";



function Products(){

    const products = [{
         id: 1,
         name: "Waffle",
         description: "Waffle with Berries",
         image: img1, 
         price: 6.5,
    },

    {
         id: 2,
         name: "Crème Brûlée",
         description: "Vanilla Bean Crème Brûlée",
         image: img2, 
         price: 7.00,
    },
    
    {
         id: 3,
         name: "Macaron",
         description: "Macaron Mix of Five",
         image: img3, 
         price: 8.00,
    },
    {
         id: 4,
         name: "Tiramisu",
         description: "Classic Tiramisu",
         image: img4, 
         price: 5.50,
    },
    {
         id: 5,
         name: "Baklava",
         description: "Pistachio Baklava",
         image: img5, 
         price: 4.00,
    },
    {
         id: 6,
         name: "Pie",
         description: "Lemon Meringue Pie",
         image: img6, 
         price: 5.00,
    },
    {
         id: 7,
         name: "Cake",
         description: "Red Velvet Cake",
         image: img7, 
         price: 4.50,
    },
    {
         id: 8,
         name: "Brownie",
         description: "Salted Caramel Brownie",
         image: img8, 
         price: 5.50,
    },
    {
         id: 9,
         name: "Panna Cotta",
         description: "Vanilla Panna Cotta",
         image: img9, 
         price: 6.50,
    },
    ]

    return(
        <>
        <div className="grid grid-cols-3 container mx-auto p-10 gap-6">
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <AddButton product={product} />
          <sub>{product.name}</sub>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
            {/*<div className="grid grid-cols-3 container mx-auto p-10">
            <div><img src={img1} alt="Waffles with berries" /> <AddButton/>
            <sub>Waffle</sub>
            <p>Waffle with Berries</p>
            <p>$6.5</p>
            </div>
            <div><img src={img2} alt="Vanilla Bean" /><AddButton/></div>
            <div><img src={img3} alt="Macaron" /><AddButton/></div>
            <div><img src={img4} alt="Tiramisu" /><AddButton/></div>
            <div><img src={img5} alt="Baklava" /><AddButton/></div>
            <div><img src={img6} alt="Meringue" /><AddButton/></div>
            <div><img src={img7} alt="Cake" /><AddButton/></div>
            <div><img src={img8} alt="Brownie" /><AddButton/></div>
            <div><img src={img9} alt="Panna" /><AddButton/></div>


        </div>*/}
        </>
    )
}

export default Products;