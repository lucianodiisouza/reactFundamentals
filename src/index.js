import React from 'react';
import ReactDOM from 'react-dom';

const useHackerNewsAPI = () => {
    const [query, setQuery] = React.useState('');
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(false);


    React.useEffect(() => {
        if (!query) {
            return;
        }
        const search = async () => {
            const result = await fetch(
                `https://hn.algolia.com/api/v1/search_by_date?query=${query}`
            );
            const data = await result.json();
            setItems(data.hits);
            setLoading(false);
        };
        search();
    }, [query]);
    return {
        setQuery,
        items,
        loading
    };
};

const App = () => {
    const [
        searchValue,
        setSearchValue
    ] = React.useState('');

    const { setQuery, items, loading } = useHackerNewsAPI();

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setQuery(searchValue);
                }}>
                <input
                    type="text"
                    value={searchValue}
                    onChange={e =>
                        setSearchValue(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </form>
            {loading && <h1>Carregando</h1>}
            {!loading && items.length > 0 && (
                <ul>
                    {
                        items.map(i => (
                            <li key={i.objectID}> {i.title} </li>
                        ))
                    }
                </ul>
            )}

        </div>

    )
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
);
