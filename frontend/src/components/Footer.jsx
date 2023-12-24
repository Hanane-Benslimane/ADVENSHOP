import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <>

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              voluptatibus exercitationem earum officia numquam unde laboriosam
              sint, labore mollitia ex. Minima possimus, labore maiores illo
              molestiae commodi esse alias qui.
            </p>
            </div>
            <div className="col-md-2">
            <h3>Links</h3>
                <li>
                  <a href="lien">Home</a>
                </li>
                <li>
                  <a href="lien">About us</a>
                </li>
                <li>
                  <a href="lien">Shop</a>
                </li>
                <li>
                  <a href="lien">Contact</a>
                </li>
            </div>
            <div className="col-md-3 footer-icones">
            <h3>Follow us</h3>
                <li className='social'>
                  <a href="lien">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className='social'>
                  <a href="lien">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className='social'>
                  <a href="lien">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
            </div>
            <div className="col-md-3 contact-footer footer-icones">
            <h3>Contact us</h3>
                <li>
                  <i className="bi bi-geo-alt-fill"></i> 123 rue de la paix
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i> 06 12 34 56 78
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i> contact@adenshop.com
                </li>
            </div>
        </div>
      </div>
      
    </footer>
    <div className="footer-bottom">
        <p>Copyright 2023 All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
