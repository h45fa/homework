import CategoryItem from "../components/CategoryItem";
import ProductComponent from "../components/Product";
import Header from "../components/Header";
import Footer from "../components//Footer";
import "../../css/home.css"
const Home = () => {
  return (
    <body>
        <Header/>
        <main>
          <section class="banner">
            <div class="container">
              <div class="banner__wrapper">
                <img src="img/image-home-07.jpg" alt="" />
                <div class="banner__overlay">
                  <div>
                    <h1 class="banner__title">Waffle Hooded Coat</h1>
                    <a href="/" class="btn btn-dark">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="category">
            <div class="container">
              <h2 class="category__title">This Season Collection</h2>
              <div class="category__grid">
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
              </div>
            </div>
          </section>
          <section class="products">
            <div class="container">
              <h2 class="products__title">This Week's Highlights</h2>
              <div class="products__grid">
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
              </div>

              <div class="products__bottom">
                <a href="/" class="btn btn-outline-primary">
                  {" "}
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </body>
  )
}

export default Home