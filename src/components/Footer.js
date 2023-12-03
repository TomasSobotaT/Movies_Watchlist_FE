import './Footer.css';




const Footer = (props) => {



    return(
        <div> 
          <a href='https://www.tsobota.cz' target='_blank' rel="noreferrer" >
            <p className={`text-center text-muted footer-text-${props.darkMode}`}>© Design and code by Tomas Sobota</p>
            </a> 
        </div>

    );

}

export default Footer;

