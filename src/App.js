import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <div class="container">
        <div class="row header">
          <div class="col logo">
            <h1><a href="#">TOTTENHAM HOTSPUR</a></h1>
          </div>
        </div>
        <div class="row">
          <div class="col-5 pitch">
            <div class="squad">
              <div class="fw">
                <div class="profile st">ST</div>
              </div>
              <div class="mf">
                <div class="mf_second">
                  <div class="profile lm">LM</div>
                  <div class="profile cam">CAM</div>
                  <div class="profile rm">RM</div>
                </div>
                <div class="mf_third">
                  <div class="profile cm left">CM</div>
                  <div class="profile cm right">CM</div>
                </div>
              </div>
              <div class="df">
                <div class="profile lb">LB</div>
                <div class="profile cb left">CB</div>
                <div class="profile cb right">CB</div>
                <div class="profile rb">RB</div>
              </div>
              <div class="gk">
                <div class="profile">GK</div>
              </div>
            </div>
          </div>
          <div class="col info">
            <div class="row">
              <div class="col infoCont">
                <h3>INFO</h3><hr />
                <div class="row">
                  <div class="col-7">
                    <ul>
                      <li>Age</li>
                      <li>Nation</li>
                      <li>Height</li>
                      <li>Position</li>
                      <li>Preferred foot</li>
                      <li>Career</li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul>
                      <li>26</li>
                      <li>Brazil<img src="http://localhost:3000/images/brazil.png" /></li>
                      <li>183cm</li>
                      <li>Striker</li>
                      <li>Right</li>
                      <ul class="career">
                        <li>America MG<br /><span>(Jun 2015 - Dec 2015)</span></li>
                        <li>Fluminese<br /><span>(Jan 2016 - Aug 2017)</span></li>
                        <li>Watford<br /><span>(Aug 2017 - Jul 2018)</span></li>
                        <li>Everton<br /><span>(Jul 2018 - Jul 2022)</span></li>
                        <li>Tottenham<br /><span>(Jul 2022 - now)</span></li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-6 infoPic">
                <span>9</span>
                <img src="http://localhost:3000/images/히샬리송1.webp" alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col uniforms">
            <div class="card" style={{ width: '18rem' }}>
              <img src="http://localhost:3000/images/home-kit.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mens Elite Tottenham Hotspur Home Shirt 2023/24</h5>
                <p class="card-text">₩187,500</p>
                <a href="https://shop.tottenhamhotspur.com/mens-elite-tottenham-hotspur-home-shirt-2023-24/EMHSS23" class="btn btn-primary" target='blank'>Spurs Shop</a>
              </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
              <img src="http://localhost:3000/images/away-kit.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mens Elite Tottenham Hotspur Away Shirt 2023/24</h5>
                <p class="card-text">₩187,500</p>
                <a href="https://shop.tottenhamhotspur.com/mens-elite-tottenham-hotspur-away-shirt-2023-24/emass23" class="btn btn-primary" target='blank'>Spurs Shop</a>
              </div>
            </div>
          </div>
          <div class="col matches">
            <h1>MATCHES</h1><hr />
            <div class="result everton">
              <h6>Sat, Feb 3</h6>
              <div class="home">
                <h5>Everton</h5><img src="http://localhost:3000/images/everton.webp" />
              </div>
              <span>2 - 2</span>
              <div class="away">
                <img src="http://localhost:3000/images/tottenham.png" /><h5>Tottenham</h5>
              </div>
            </div>
            <div class="result brentford">
              <h6>Thu, Feb 1</h6>
              <div class="home">
                <h5>Tottenham</h5><img src="http://localhost:3000/images/tottenham.png" />
              </div>
              <span>3 - 2</span>
              <div class="away">
                <img src="http://localhost:3000/images/brentford.webp" /><h5>Brentford</h5>
              </div>
            </div>
            <div class="result mancity">
              <h6>Sat, Jan 27</h6>
              <div class="home">
                <h5>Tottenham</h5><img src="http://localhost:3000/images/tottenham.png" />
              </div>
              <span>0 - 1</span>
              <div class="away">
                <img src="http://localhost:3000/images/mancity.webp" /><h5>Man City</h5>
              </div>
            </div>
            <div class="result manunited">
              <h6>Mon, Jan 15</h6>
              <div class="home">
                <h5>Man United</h5><img src="http://localhost:3000/images/manunited.png" />
              </div>
              <span>2 - 2</span>
              <div class="away">
                <img src="http://localhost:3000/images/tottenham.png" /><h5>Tottenham</h5>
              </div>
            </div>
            <div class="result burnley">
              <h6>Sat, Jan 6</h6>
              <div class="home">
                <h5>Tottenham</h5><img src="http://localhost:3000/images/tottenham.png" />
              </div>
              <span>1 - 0</span>
              <div class="away">
                <img src="http://localhost:3000/images/burnley.png" /><h5>Burnley</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
