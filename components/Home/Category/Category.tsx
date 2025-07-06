import React from 'react'
const categories = [
    { name: "Pizza" },
    { name: "Burger" },
    { name: "Sushi" },
    { name: "Salad" },
    { name: "Dessert" },
    { name: "Drinks" },
    { name: "Vegan" },
    { name: "Gluten-Free" },
    { name: "Seafood" },
    { name: "Steak" },
    { name: "Pasta" },
    { name: "Mexican" },
    { name: "Indian" },
    { name: "Chinese" },
    { name: "Thai" },
    { name: "Japanese" },
    { name: "Mediterranean" },
    { name: "Breakfast" },
    { name: "Brunch" },
    { name: "BBQ" },
    { name: "Sandwiches" },
    { name: "Wraps" },
    { name: "Beverages" },
    { name: "Ice Cream" },
    { name: "Smoothies" },
    { name: "Coffee" },
    { name: "Tea" },
    { name: "Bakery" },
    { name: "Catering" },

];
const Category = () => {

    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-xl sm:text-2xl text-center font-extrabold'>popular categories by food</h1>
            <div className='w-[80%] mx-auto mt-10'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {categories.map((categories, i) => {
                        return <span key={i} className='px-6 py-3 rounded-full cursor-pointer hover:bg-emerald-600 hover:text-white transition-all duration-300 bg-gray-100 dark:bg-gray-800 dark:text-white'>{categories.name}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category