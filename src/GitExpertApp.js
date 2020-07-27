import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
   
    const [categories, setCategories] = useState(['Samurai X']);

    return (
        <div>
            <h2>GitExpertApp</h2>            
            <AddCategory setCategories = {setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => {
                    return <GifGrid 
                        category = {category}
                        key = {category}
                        />
                    })
                }
            </ol>

        </div>
    )
}
