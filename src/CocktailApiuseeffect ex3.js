import React, { useEffect, useState } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailApi = () => {
    const [data, setdata] = useState([]);
    const [searchdrink, setSearchdrink] = useState('');

    const fetchDrinks = async (apiURL) => {
        const response = await fetch(apiURL);
        const { drinks } = await response.json();
        setdata(drinks);
    }; 

    const handlechange = (e) => {
        e.preventDefault();
        let event = e.target.value;
        setSearchdrink(event);
    }

    useEffect(() => {
        const correctURL = `${URL}${searchdrink}`
        fetchDrinks(correctURL);
    }, [searchdrink])
    return (
        <div>
            <center>
                <form>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="search drink"
                        value={searchdrink}
                        onChange={handlechange}
                    />
                </form>
                <hr />
                <ul className="cocktail-data">
                    {
                        data.map((eachobj) => {
                            const { idDrink, strDrink, strDrinkThumb } = eachobj
                            return (
                                <li key={idDrink}>
                                    <div>
                                        <img src={strDrinkThumb} alt={strDrink} />
                                    </div>
                                    <div className="text">
                                        {strDrink}
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>
            </center>
        </div >
    );
};
export default CocktailApi;
