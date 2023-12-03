import React, { useState, useEffect } from 'react';
import './Title.css';

const Title = (props) => {
  const checkRadioStart = localStorage.getItem('saveCheckRadio')?.split(',').map((item) => item === 'true');
  const [checkRadio, setCheckRadio] = useState(checkRadioStart ?? [true, false, false]);

  useEffect(() => {
    localStorage.setItem('saveCheckRadio', checkRadio.join(','));

  }, [checkRadio]);

  const cardSizeLabel = props.cardSize === 'big' ? 'Malé náhledy' : 'Velké náhledy';
  const darkModeLabel = props.darkMode === 'dark' ? 'Světlý režim' : 'Tmavý režim';

  const switchSize = () => {
    if (props.cardSize === 'big') {
      props.setCardSize('small');
      localStorage.setItem('saveCardSize', 'small');
    } else {
      localStorage.setItem('saveCardSize', 'big');
      props.setCardSize('big');
    }
  };

  const switchDarkMode = () => {
    if (props.darkMode === 'dark') {
      document.body.style.backgroundColor = 'white';
      localStorage.setItem('saveDarkMode', 'light');
      props.setDarkMode('light');
    } else {
      document.body.style.backgroundColor = '#141414';
      localStorage.setItem('saveDarkMode', 'dark');
      props.setDarkMode('dark');
    }
  };

  const switchOrder = (e) => {
    console.log(e + "Before switchOrder:", checkRadio);

    if (e === 'random') {
      setCheckRadio([true, false, false]);
      localStorage.setItem("saveCheckRadio", [true, false, false]);
      props.setOrder('random');
      localStorage.setItem('saveOrder', 'random');
    } else if (e === 'id') {
      setCheckRadio([false, true, false]);
      localStorage.setItem("saveCheckRadio", [false, true, false]);
      props.setOrder('id');
      localStorage.setItem('saveOrder', 'id');
    } else {
      setCheckRadio([false, false, true]);
      localStorage.setItem("saveCheckRadio", [false, false, true]);
      props.setOrder('name');
      localStorage.setItem('saveOrder', 'name');
    }

    console.log("After switchOrder:", checkRadio);
  };

  return (
    <div className={`mt-3 title-container title-container-${props.darkMode}`}>

      <div className="dropdown d-flex justify-content-end mb-4 mb-md-1">
        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Nastavení
        </button>
        <div className="dropdown-menu options-container p-3 d-startfex justify-content-">
          <div className="form-check form-switch d-flex justify-content-start ps-0">
            <label htmlFor="sizeCardSwitch" id="label">
              {cardSizeLabel}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="sizeCardSwitch"
              onChange={switchSize}
              checked={props.cardSize === 'small' ? true : false}
            />
          </div>

          <div className="form-check form-switch d-flex justify-content-end ps-0 text-start">
            <label htmlFor="darkModeSwitch" id="label-2">
              {darkModeLabel}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="darkModeSwitch"
              onChange={switchDarkMode}
              checked={props.darkMode === 'light' ? true : false}
            />
          </div>
          <p className='mb-0 mt-2'>Řazení:</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="random"
              checked={checkRadio[0]}
              onChange={(e) => switchOrder(e.target.value)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Náhodně
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="id"
              checked={checkRadio[1]}
              onChange={(e) => switchOrder(e.target.value)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Podle přidání
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              value="name"
              checked={checkRadio[2]}
              onChange={(e) => switchOrder(e.target.value)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Podle názvu
            </label>
          </div>
        </div>
      </div>

      <h1>Movies Watchlist</h1>
    </div>
  );
};

export default Title;