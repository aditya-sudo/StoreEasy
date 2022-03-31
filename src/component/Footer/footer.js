import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-2 bg-dark ">
        <div class="container">
            <div class="col-md-9">
            <h5 class="text-white">About Storekaro</h5>
            <p class="text-white pull-left">
You name it, we store it. 
Yes, whether it's your household goods, office furniture or inventory,motorbike or your car, we provide storage space for everything. 
</p>
<Link to='/about'><button type="button" class="btn btn-sm btn-outline-secondary">Read More</button></Link>
</div>
          <p class="m-0 text-right text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;