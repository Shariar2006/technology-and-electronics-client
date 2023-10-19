/* eslint-disable react/jsx-key */
import swal from 'sweetalert';


const AddProduct = () => {

    const addProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name= form.name.value;
        const brand= form.brand.value;
        const type= form.type.value;
        const price= form.price.value;
        const rating= form.rating.value;
        const photo= form.photo.value;
        const description= form.description.value;
        const newProduct = {name, brand, type, photo, price, rating, description}
        console.log(newProduct)
        fetch(`http://localhost:5000/${brand}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                swal("Good job!", "You clicked the button!", "success");
                e.target.reset()
            }
        })
    }


    const brands = ['Select Brand Name', 'Apple', 'Google', 'Intel', 'Samsung', 'Sony', 'Vivo']
    return (
        <div>
            <form onSubmit={addProduct} className="mt-5 card-body w-full lg:w-1/4 rounded-lg mx-auto h-full bg-gradient-to-tr from-cyan-500 to-blue-500">
                <h1 className="text-2xl font-bold text-white text-center">Add Product</h1>

                <div className="mx-auto">
                    <h1 className="text-white font-semibold">Product Name</h1>
                    <input className="p-2 w-72 mt-2 rounded-md" type="text" placeholder="Product Name" name="name" id="" />
                </div>
                <div className="mx-auto">
                    <h1 className="text-white font-semibold">Brand Name</h1>
                    <select className="p-2 w-72 mt-2 rounded-md" name="brand" id="">
                        {
                            brands.map(brand => {
                                return <option>{brand}</option>
                            })
                        }
                    </select>
                </div>


                <div className="mx-auto">
                    <h1 className="text-white font-semibold">Product Type</h1>
                    <input className="p-2 w-72 mt-2 rounded-md" type="text" placeholder="Product Type" name="type" id="" />
                </div>
                <div className="mx-auto">
                    <h1 className="text-white font-semibold">Price</h1>
                    <input className="p-2 w-72 mt-2 rounded-md" type="text" placeholder="Price" name="price" id="" />
                </div>


                <div className="mx-auto">
                    <h1 className="text-white font-semibold">Rating</h1>
                    <input className="p-2 w-72 mt-2 rounded-md" type="text" placeholder="Rating" name="rating" id="" />
                </div>
                <div className="mx-auto">
                    <h1 className="text-white font-semibold">Short Description</h1>
                    <textarea name="description" id="" cols="37" rows="3"></textarea>
                </div>
                <div className="mx-auto">
                    <h1 className="text-white font-semibold">Photo URL</h1>
                    <input className="p-2 w-72 mt-2 rounded-md" type="text" placeholder="Photo URL" name="photo" id="" />
                </div>
                <input type="submit"  value="Add Product" className="btn btn-block bg-white text-blue-500 text-sm font-bold mt-3" />

            </form>
        </div>
    );
};

export default AddProduct;