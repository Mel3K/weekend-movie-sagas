import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";




function GenreList() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
  
    useEffect(() => {
      dispatch({ type: 'SET_GENRES' });
    }, []);
  
    return (
      <main>
        <h1>GenreList</h1>
        <section className="genres">
          {genres.map(genres => {
            return (
              <div data-testid='movieItem' key={genres.id}>
                <h3>{genres.name}</h3>
               
              </div>
            );
          })}
        </section>
      </main>
    );
  }
  
  export default GenreList;