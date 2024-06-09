import React from 'react'

function Fillter() {
    return (
        <div className="shadow-md h-[88vh] p-4 overflow-y-scroll">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <ul className='text-sm'>
                    <li>
                        <input type="checkbox" id="category1" className="mr-2" />
                        <label htmlFor="category1">Category 1</label>
                    </li>
                    <li>
                        <input type="checkbox" id="category2" className="mr-2" />
                        <label htmlFor="category2">Category 2</label>
                    </li>
                    <li>
                        <input type="checkbox" id="category3" className="mr-2" />
                        <label htmlFor="category3">Category 3</label>
                    </li>
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Price Range</h3>
                <input type="range" min="0" max="1000" step="50" className="w-full bg-primary" />
                <div className="flex justify-between mt-2">
                    <span>$0</span>
                    <span>$1000</span>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Attributes</h3>
                <ul className='text-sm'>
                    <li>
                        <input type="checkbox" id="attribute1" className="mr-2" />
                        <label htmlFor="attribute1">Attribute 1</label>
                    </li>
                    <li>
                        <input type="checkbox" id="attribute2" className="mr-2" />
                        <label htmlFor="attribute2">Attribute 2</label>
                    </li>
                    <li>
                        <input type="checkbox" id="attribute3" className="mr-2" />
                        <label htmlFor="attribute3">Attribute 3</label>
                    </li>
                </ul>
            </div>

            <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600">
                Apply Filters
            </button>
            
            <p className='text-xs font-light mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat fugit exercitationem cum molestias rerum error voluptatum. Nemo labore quo sequi hic fugit, ex doloremque maiores pariatur, eum dolorem, sit vel maxime consectetur ad quae dicta praesentium quos aut. Esse assumenda eos autem! Illo, eveniet?</p>
        </div>
    )
}

export default Fillter