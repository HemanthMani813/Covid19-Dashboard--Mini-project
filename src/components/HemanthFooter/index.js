import React from 'react'
import "./index.css"

function HemanthFooter() {
  return (
    
    <footer id='Footer' className="footer ">
            <div className="footer__container ">
                <div>
                    <h1 class="footer__title">H e m a n t h &nbsp;&nbsp; M a n i</h1>
                    <p class="footer__description">I am Hemanth this is my personal website, Let's Connect here.</p>
                </div>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/hemanthmani" className="footer__link"><i className="fa-brands fa-linkedin fa-bounce"></i></a>
                    <a href="https://www.instagram.com/weird0__813?igsh=bDRucG1xb3pzNmlp" class="footer__link"><i className="fa-brands fa-instagram fa-bounce"></i></a>
                    <a href="https://github.com/HemanthMani813" className="footer__link"><i class="fa-brands fa-github fa-bounce"></i></a>
                </div>
                <div>
                    <p className="footer__copy"><i class="fa-regular fa-copyright fa-beat"></i>&nbsp; All right reserved by H e m a n t h &nbsp;&nbsp; M a n i - 2024</p>
                </div>
            </div>
            
        </footer>
  )
}

export default HemanthFooter