import React, { Component } from "react";
import logo from "./Images/PlaceMint.png";
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="bd-footer py-5 mt-5 bg-light">
          <div class="container py-5">
            <div class="row justify-content-evenly">
              {/* <div class="col-lg-3 mb-3 align-self-center">
                <h1>INTCDB-DX-019</h1>
              </div> */}
              <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                <h5>Links</h5>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="/" target="_blank">Home</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.0/" target="_blank">Docs</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.0/examples/" target="_blank">Examples</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://themes.getbootstrap.com/" target="_blank">Themes</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://blog.getbootstrap.com/" target="_blank">Blog</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://cottonbureau.com/people/bootstrap" target="_blank">
                      Swag Store
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg-2 mb-3">
                <h5>Guides</h5>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="/docs/5.0/getting-started/" target="_blank">Getting started</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.0/examples/starter-template/" target="_blank">
                      Starter template
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.0/getting-started/webpack/" target="_blank">Webpack</a>
                  </li>
                  <li class="mb-2">
                    <a href="/docs/5.0/getting-started/parcel/" target="_blank">Parcel</a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg-2 mb-3">
                <h5>Projects</h5>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="https://github.com/twbs/bootstrap" target="_blank">Bootstrap 5</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank">
                      Bootstrap 4
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://github.com/twbs/icons" target="_blank">Icons</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://github.com/twbs/rfs" target="_blank">RFS</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://github.com/twbs/bootstrap-npm-starter" target="_blank">
                      npm starter
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-lg-2 mb-3">
                <h5>Community</h5>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="https://github.com/twbs/bootstrap/issues" target="_blank">
                      Issues
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://github.com/twbs/bootstrap/discussions" target="_blank">
                      Discussions
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://github.com/sponsors/twbs" target="_blank">
                      Corporate sponsors
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://opencollective.com/bootstrap" target="_blank">
                      Open Collective
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="https://bootstrap-slack.herokuapp.com/" target="_blank">Slack</a>
                  </li>
                  <li class="mb-2">
                    <a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank">
                      Stack Overflow
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="text-center">
                <h3>Copyright &#169; by Project Team_Magenta</h3>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
