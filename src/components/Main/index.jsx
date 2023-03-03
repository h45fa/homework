import React from 'react'
import styles from './Main.module.scss';
import { Link } from "react-router-dom";
import banner20 from '../img/banner-20.jpg';
import banner21 from '../img/banner-21.jpg';
import banner22 from '../img/banner-22.jpg';
import product1 from '../img/product-01.jpg';
import product2 from '../img/product-02.jpg';
import product3 from '../img/product-03.jpg';
import product4 from '../img/product-04.jpg';
import product5 from '../img/product-05.jpg';
import product6 from '../img/product-06.jpg';
import product7 from '../img/product-07.jpg';
import product8 from '../img/product-08.jpg';

const Main = () => {
  return (
    <main>
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.banner__wrapper}>
          <img src="img/image-home-07.jpg" alt="" />
          <div className={styles.banner__overlay}>
            <div>
              <h1 className={styles.banner__title}>Waffle Hooded Coat</h1>
              <Link to="/" className={`${styles.btn} ${styles.btndark}`}>Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.category}>
      <div className={styles.container}>
        <h2 className={styles.category__title}>This Season Collection</h2>
        <div className={styles.category__grid}>
          <div className={styles.category__item}>
            <img src={banner20} alt="Glasses" />

            <div className={styles.category__overlay}>
              <Link to={'#'} className={`${styles.btn} ${styles.btndark}`}>Glasses</Link>
            </div>
          </div>

          <div className={styles.category__item}>
            <img src={banner21} alt="Sneakers" />

            <div className={styles.category__overlay}>
              <Link to={'#'} className={`${styles.btn} ${styles.btndark}`}>Sneakers</Link>
            </div>
          </div>

          <div className={styles.category__item}>
            <img src={banner22} alt="Handbags" />

            <div className={styles.category__overlay}>
              <Link to={'#'}className={`${styles.btn} ${styles.btndark}`}>Handbags</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.products__title}>This Week's Highlights</h2>

        <div className={styles.products__grid}>
          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product1} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${styles.w-6} ${styles.h-6}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product2} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${styles.w-6} ${styles.h-6}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Flowers cotton dress</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product3} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={{...styles.w-6,...styles.h-6}}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product4} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${styles.w-6} ${styles.h-6}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Oversize cotton sweatshirt</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product5} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${styles.w-6} ${styles.h-6}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Striped cotton-blend sweatshirt</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product6} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${styles.w-6} ${styles.h-6}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product7} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${styles.w-6} ${styles.h-6}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Flowers cotton dress</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>

          <div className={styles.products}>
            <div className={styles.products__image}>
              <Link to="/" className={styles.products__imageblock}>
                <img src={product8} alt="Product 01" />
              </Link>

              <Link to="/" className={styles.addtowishlist}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`${styles.w-6} ${styles.h-6}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.product__body}>
              <h3>
                <Link to="/">Hoodie with pocket</Link>
              </h3>
              <p>$79.00</p>
            </div>
          </div>
        </div>

        <div className={styles.products__bottom}>
          <Link to="/" className={`${styles.btn} ${styles.btnoutlineprimary}`}> Shop Now </Link>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Main;