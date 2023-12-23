import "./OptionsForm.css";
import { useState, useEffect } from "react";




const OptionsForm = (props) => {

  const checkRadioStart = localStorage.getItem('saveCheckRadio')?.split(',').map((item) => item === 'true');
  const [checkRadio, setCheckRadio] = useState(checkRadioStart ?? [true, false, false]);

  useEffect(() => {
    localStorage.setItem('saveCheckRadio', checkRadio.join(','));

  }, [checkRadio]);

  // const cardSizeLabel = props.cardSize === 'big' ? 'Malé náhledy' : 'Velké náhledy';
  // const darkModeLabel = props.darkMode === 'dark' ? 'Světlý režim' : 'Tmavý režim';

  const switchLang = () => {
    console.log("a");
    if (props.language === 'EN') {
      localStorage.setItem('language', 'CZ');
      props.setLanguage('CZ');
    } else {
      localStorage.setItem('language', 'EN');
      props.setLanguage('EN');
    }

  }


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

      <div className="dropdown dropdown1">

        <button className="btn dropdown-toggle optionsForm-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {
            (props.language === "EN") ?
              <span>Options</span>
              :
              <span>Nastavení</span>
          }

        </button>
        <div className="dropdown-menu options-container p-3 d-startfex justify-content-end">

          <div className="form-check form-switch d-flex justify-content-start ps-0">
            <label htmlFor="sizeCardSwitch" id="label">
              {props.language}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="languageSwitch"
              onChange={switchLang}
              checked={props.language === 'EN' ? false : true}
            />
          </div>

          <div className="form-check form-switch d-flex justify-content-start ps-0">
            <label htmlFor="sizeCardSwitch" id="label">
            {
                props.cardSize === 'big'
                  ? props.language === "EN"
                    ? <span>Small view</span>
                    : <span>Malé náhledy</span>
                  : props.language === "EN"
                    ? <span>Big view</span>
                    : <span>Velké náhledy</span>
              }
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
              {
                props.darkMode === 'dark'
                  ? props.language === "EN"
                    ? <span>Light mode</span>
                    : <span>Světlý režim</span>
                  : props.language === "EN"
                    ? <span>Dark mode</span>
                    : <span>Tmavý režim</span>
              }
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
          <p className='mb-0 mt-2'>
            {
              (props.language === "EN") ?
                <span>Sort:</span>
                :
                <span>Řazení:</span>
            }

          </p>
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
              {
                (props.language === "EN") ?
                  <span>Random</span>
                  :
                  <span>Náhodně</span>
              }
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
              {
                (props.language === "EN") ?
                  <span>Added</span>
                  :
                  <span>Podle přidání</span>
              }
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
              {
                (props.language === "EN") ?
                  <span>Name</span>
                  :
                  <span>Podle jména</span>
              }
            </label>
          </div>
        </div>
      </div>



    </div>
  );



}
export default OptionsForm;