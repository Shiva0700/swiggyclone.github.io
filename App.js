import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh5AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/20c5629a29.js" crossorigin="anonymous"></script>
</header>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container">
          <div class = "d-flex flex-row">
            <a href="#">
                <img src="https://i.pinimg.com/originals/14/54/38/14543825754df0537f343a069e48eeaa.png" class="food-munch-logo" />
            </a>
            <p class = "title-font">GoEatz</p>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <a class="nav-link active" id="navItem1">
                        Sign In
                        <span class="sr-only">(current)</span>
                    </a>
                    <a class="nav-link" href="#" id="navItem2">Help</a>
                    <a class="nav-link" href="#" id="navItem3">Cart</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="banner-section-bg-container banner-inside-margins d-flex justify-content-center flex-column">
            <h1 class="banner-heading mb-3">Great restaurants in Hyderabad, delivering to you </h1>
            <p class="banner-caption mb-4">Set exact location to find the right restaurants near you.</p>
            <div class = "d-flex" >
            <input type="text" placeholder="Enter street name, area etc..." class = "search-bar"></input>
            <button class="custom-button">FIND FOOD</button>
            </div>
    </div>
    <div class = "loc-banner d-flex flex-row">
        <p class = "loc-para1">Home</p>
        <p class = "loc-para2">/Hyderabad</p>
    </div>
   
    <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="menu-section-heading">Our picks for you</h1>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Offers near you</h1>
                        <a href="" class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Top Rated</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Super fast delivery</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Biryani</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">North Indian</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">South Indian</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Chinese</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Salads</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Desserts</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5h5.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="menu-section-heading">Popular Restaurants in and around Hyderabad</h1>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Aaha Food Village</h1>
                        <p>South Indian</p>
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">3.9</p>
                        <p class = "menu-text"> 35 MINS </p>
                        <p class = "menu-text"> 200 FOR TWO </p>
                        </div>
                        <i class="fa-sharp fa-solid fa-badge-percent percent-ico"></i>
                        <p class = "offer-text">Flat 100 off | Use FLATDEAL</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Bheemas</h1>
                        <p>South Indian</p>
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">4.3</p>
                        <p class = "menu-text"> 41 MINS </p>
                        <p class = "menu-text"> 150 FOR TWO </p>
                        </div>
                        <p class = "offer-text"> 40% Off | Use GUILTFREE</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Om Sai Ram Tiffins</h1>
                        <p>South Indian</p>
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">4.3</p>
                        <p class = "menu-text"> 46 MINS </p>
                        <p class = "menu-text"> 100 FOR TWO </p>
                        </div>
                        <p class = "offer-text">Free Delivery</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Third Wave Coffee</h1>
                        <p>Beverages, Bakery, Continental</p>
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">4.3</p>
                        <p class = "menu-text"> 41 MINS </p>
                        <p class = "menu-text"> 150 FOR TWO </p>
                        </div>
                        <p class = "offer-text"> 40% off | Use GUILTFREE</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Alankar</h1>
                        <p>South Indian</p>
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">4.0</p>
                        <p class = "menu-text"> 34 MINS </p>
                        <p class = "menu-text"> 180 FOR TWO </p>
                        </div>
                        <p class = "offer-text"> 50% Off | Use TRYNEW</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Varalakshmi Tiffins</h1>
                        <p>South Indian</p>
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">4.5</p>
                        <p class = "menu-text"> 31 MINS </p>
                        <p class = "menu-text"> 150 FOR TWO </p>
                        </div>
                        <p class = "offer-text"> 40% Off | Use TRYNEW</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Panchakattu Dosa</h1>
                        <p>South Indian</p>
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">4.5</p>
                        <p class = "menu-text"> 46 MINS </p>
                        <p class = "menu-text"> 200 FOR TWO </p>
                        </div>
                        <p class = "offer-text"> 20% Off | Use TRYNEW</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png" class="restaurant-image w-100" />
                        <h1 class="restaurant-card-title">Vasireddy Swagruha</h1>
                        <p>Sweets, Snacks</p>
                        <div class = "d-flex flex-row">
                        <div class = "d-flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-star-fill star-text" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <p class = "rating-text">4.0</p>
                        </div>
                        <p class = "menu-text"> 30 MINS </p>
                        <p class = "menu-text"> 300 FOR TWO </p>
                        </div>
                        <p class = "offer-text"> 50% Off | Use BFBINGE</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pagination d-flex justify-content-center">
        <a href="#">&laquo;</a>
        <a class = "active" href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">7</a>
        <a href="#">8</a>
        <a href="#">&raquo;</a>
    </div>
        <div class = "d-flex flex-row last-sec justify-content-center">
        <div class = "d-flex flex-column">
            <h5 class = "last-sec-head">COMPANY</h5>
            <dl class = "last-sec-para lisst">
            <dt>About us</dt>
            <dt>Team</dt>
            <dt>Careers</dt>
            <dt>Swiggy Blog</dt>
            <dt>Bug Bounty</dt>
            <dt>Swiggy One</dt>
            <dt>Swiggy Corporate</dt>
            <dt>Swiggy Instamart</dt>
            <dt>Swiggy Genie</dt>
            </dl>
        </div>
        <div class = "d-flex flex-column">
            <h5 class = "last-sec-head">CONTACT</h5>
            <dl class = "last-sec-para lisst">
            <dt>Help & Support</dt>
            <dt>Partner with us</dt>
            <dt>Ride with us</dt>
            </dl>
        </div>
        <div class ="d-flex flex-column">
            <h5 class = "last-sec-head">LEGAL</h5>
            <dl class = "last-sec-para lisst">
            <dt>Terms & Conditions</dt>
            <dt>Refund & Cancellation</dt>
            <dt>Privacy Policy</dt>
            <dt>Cookie Policy</dt>
            <dt>Offer Terms</dt>
            <dt>Phishing & Fraud</dt>
            <dt>Corporate - Swiggy Money Codes Terms and Conditions</dt>
            <dt>Corporate - Swiggy Discount Voucher Terms and Conditions</dt>
            </dl>
        </div>
        <div>
            <img src='https://i.pinimg.com/originals/e3/e1/fe/e3e1fe9bf0c1d73af6ae6cc614549f77.png' class = "play-image"></img>
        </div>
        </div>
      </body>
    </div>
  );
}

export default App;
