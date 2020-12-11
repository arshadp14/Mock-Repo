import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 ">
          @All rights reserved
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item">
              <i class="fa fa-facebook"></i>
            </li>
            <li class="list-inline-item">
              <i class="fa fa-twitter"></i>
            </li>
            <li class="list-inline-item">
              <i class="fa fa-instagram"></i>
            </li>
            <li class="list-inline-item">
              <i class="fa fa-google-plus"></i>
            </li>
            <li class="list-inline-item">
              <i class="fa fa-envelope"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
