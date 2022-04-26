import React, { useMemo } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getVtubersByName } from '../../helpers/getVtubersByName';
import { queryString } from '../../helpers/queryString';
import { useForm } from '../../hooks/useForm';
import { VtuberCard } from '../Vtuber/VtuberCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q } = queryString(location.search);

  const [formValues, handleInputChange, reset] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const vtubersFilter = useMemo(() => getVtubersByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`); //Navegar en la misma ruta, es decir, ese string se mostrará en la url dentro de la misma página que estamos
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <form onSubmit={handleSearch} className="container">

        <div className="row mb-3">
          <div className="col-9 col-lg-10">
            <input
              type="text"
              className="form-control"
              name="searchText"
              autoComplete="off"
              id="searchInput"
              value={searchText}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-3 col-lg-2">
            <button type="submit" className="btn btn-primary w-100">Search</button>
          </div>
        </div>

        <div className="row">
          <h4>Results</h4>
          <hr />

          {
            (q === "")
                ? <div className="alert alert-info text-center">Search a vtuber!</div>
                : (vtubersFilter.length === 0) 
                    && <div className="alert alert-danger text-center">No results: {q}</div>
          }

          {
            vtubersFilter.map(vtuber => (
              <VtuberCard
                key={vtuber.id}
                {...vtuber}
              />
            ))
          }
        </div>

      </form>

    </>
  )
}