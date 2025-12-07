import { IoStarSharp } from "react-icons/io5";


export default function TopSection() {
    return (
        <div>
            <div className="imageGrid">
                <div className="left">
                    <div className="relatedimages">
                        <div><img src="/Images/collections/Rectangle 3608.png" alt="" /></div>
                    </div>
                    <div className="relatedimages">
                        <div><img src="/Images/collections/Rectangle 3608.png" alt="" /></div>
                    </div>
                    <div className="relatedimages">
                        <div><img src="/Images/collections/Rectangle 3608.png" alt="" /></div>
                    </div>
                    <div className="relatedimages">
                        <div><img src="/Images/collections/Rectangle 3608.png" alt="" /></div>
                    </div>
                    <div className="productImage">
                        <img src="/Images/collections/Rectangle 3608.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>Men Round Neck Pure Cotton T-Shirt</h1>
                    <div className="ratings">
                        <span><IoStarSharp /></span>
                        <span><IoStarSharp /></span>
                        <span><IoStarSharp /></span>
                        <span><IoStarSharp /></span>
                        <span><IoStarSharp /></span>
                        <span>(122)</span>
                    </div>
                    <div>
                        <h1>$149</h1>
                        <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                    </div>
                    <div>
                        <h3>Select Size</h3>
                        <div className="size">
                            <input type="text" value="S" />
                            <input type="text" value="M" />
                            <input type="text" value="L" />
                            <input type="text" value="XL" />
                            <input type="text" value="XXL" />
                        </div>
                        <button>Add to cart</button>
                    </div>
                    <ul>
                        <li>100% Original product.</li>
                        <li>Cash on delivery is available on this product.</li>
                        <li>Easy return and exchange policy within 7 days.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
