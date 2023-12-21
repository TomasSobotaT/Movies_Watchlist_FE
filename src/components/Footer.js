import './Footer.css';




const Footer = (props) => {



    return (
        <div className='mt-5 w-100'>
            <hr className={`hr-${props.darkMode}`} />

            <div className={`text-center footer-text-${props.darkMode}`}>
                <p>Líbí se vám aplikace? Kupte mi kávu!</p>
                <div className='d-flex justify-content-center align-items-center gap-1'>


                    <div>
                        <img className="pay-csob" src="https://tsobota.cz/img/csob_qr_code.png" alt="Kupte mi kávu!" />
                    </div>

                    <form action="https://www.paypal.com/donate" method="post" target="_top" className=''>
                        <input type="hidden" name="hosted_button_id" value="6KLDFEHWC7CXU" />
                        <input className='pay-paypal' type="image" src="https://oralcancermi.org/wp-content/uploads/2018/11/paypal-donate-button-high-quality-png-300x171.png" name="submit" title="Přispět s PayPal" alt="Přispět s PayPal" />
                        {/* <img alt="paypal_image" src="https://www.paypal.com/en_CZ/i/scr/pixel.gif" /> */}
                    </form>
                </div>
            </div>


            <div className='mt-3 footer-text-info'>
                <a href='https://www.tsobota.cz' target='_blank' rel="noreferrer" >
                    <p className={`text-center footer-text-${props.darkMode}`}>© Design and code by Tomas Sobota</p>
                </a>
            </div>
        </div>


    );

}

export default Footer;

