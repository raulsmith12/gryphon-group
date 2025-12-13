import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Gryphon Group LLC</title>
        <meta name="description" content="The Gryphon Group LLC - Professional Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className={`${styles.hero} d-flex align-items-center justify-content-center`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center text-white">
                <div className={`mb-4 ${styles.heroTitle}`}>
                  <Image 
                    src="/img/The-Gryphon-Group-LLC-White.png" 
                    alt="The Gryphon Group LLC" 
                    width={800}
                    height={300}
                    className="img-fluid"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    priority
                  />
                </div>
                <p className="lead fs-4 mb-4">
                  Navigating Risk with Nobility
                </p>
                <div className="mt-5">
                  <a href="#projects" className="btn btn-primary btn-lg me-3">
                    Our Projects
                  </a>
                  <a href="#about" className="btn btn-outline-light btn-lg">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-4 fw-bold text-primary">Our Projects</h2>
              </div>
            </div>
            <div className="row g-4">
              {/* South Carolina Project */}
              <div className="col-lg-6">
                <div className={`card shadow-sm h-100 ${styles.projectCard} ${styles.projectSouthCarolina}`}>
                  <div className={styles.projectHeader}>
                    <h3>South Carolina</h3>
                  </div>
                  <div className="card-body p-4">
                    <p className="card-text">
                      This project is based in the Upstate region of South Carolina, in one of the fastest growing cities in the country. Short term, it involves the purchase of a stabilized commercial building with the intent of supporting the current lease holders by adding a professional coffee and pastry kiosk to the layout, which will immediately increase foot traffic. Long term, leases will be re-negotiated to expand the kiosk into a full coffee roastery and pastry bakery, which the building is already zoned for, thus maintaining the stabilized status of the building for many years to come.
                    </p>
                  </div>
                </div>
              </div>

              {/* Washington Project */}
              <div className="col-lg-6">
                <div className={`card shadow-sm h-100 ${styles.projectCard} ${styles.projectWashington}`}>
                  <div className={styles.projectHeader}>
                    <h3>Washington</h3>
                  </div>
                  <div className="card-body p-4">
                    <p className="card-text">
                      This project is based in the scenic Puget Sound region of Washington state, where our founder is originally from. Short term, it involves the purchase of both residential and commercial properties to facilitate the development of a prototype competitive ballroom dance training center, which will be leased to small or medium sized schools who are in need of state of the art facilities to train their students. It will also be leased to independent instructors and competition couples in need of dedicated training space. Long term, the other two thirds of the property will be converted into business space for lease to high end, consumer based developers for business placement, and additional foot traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Team Section */}
        <section id="about" className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-4 fw-bold text-primary">About The Team</h2>
                <p className="lead text-muted">
                  Meet the professionals behind The Gryphon Group LLC
                </p>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {/* David Green Profile */}
              <div className="col-lg-4 col-md-6">
                <div className={`card shadow-sm h-100 ${styles.teamCard}`}>
                  <div className="card-body p-4 text-center">
                    <a 
                      href="https://www.linkedin.com/in/david-green-06707a180/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div className={styles.teamImageWrapper}>
                        <img 
                          src="https://media.licdn.com/dms/image/v2/D4E03AQHHx9tHxBuvrA/profile-displayphoto-shrink_800_800/B4EZaSBUN9HIAg-/0/1746206541132?e=1767225600&v=beta&t=sIfOXIPUzKMtcv45T4eqSKUrGbT7gTaxVmRPc18ubBo" 
                          alt="David Green" 
                          className={styles.teamImage}
                        />
                      </div>
                    </a>
                    <h3 className="card-title mt-4 mb-2">
                      <a 
                        href="https://www.linkedin.com/in/david-green-06707a180/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none text-primary"
                      >
                        David Green
                      </a>
                    </h3>
                    <p className="text-muted mb-3">
                      <small>Founder and Owner<br />The Gryphon Group LLC</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

