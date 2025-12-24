import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/Carousel';
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
                  <div className={styles.projectImageWrapper}>
                    <Image 
                      src="https://lp-cms-production.imgix.net/2023-07/iStock-919005828.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75" 
                      alt="South Carolina Project" 
                      width={800}
                      height={400}
                      className={styles.projectImage}
                    />
                  </div>
                  <div className={styles.projectHeader}>
                    <h3>South Carolina</h3>
                  </div>
                  <div className="card-body p-4">
                    <p className="card-text">
                      This project is based in the Upstate region of South Carolina, in one of the fastest growing cities in the country. Short term, it involves the purchase of a stabilized commercial building with the intent of supporting the current lease holders by adding a professional European coffee shop and pastry bakery to the layout. The building is already zoned for this, thus maintaining the stabilized status of the building for many years to come.
                    </p>
                  </div>
                </div>
              </div>

              {/* Washington Project */}
              <div className="col-lg-6">
                <div className={`card shadow-sm h-100 ${styles.projectCard} ${styles.projectWashington}`}>
                  <div className={styles.projectImageWrapper}>
                    <Image 
                      src="https://www.windermerepugetsound.com/imager/amazons3/gig-harbor/733483/GH-16-of-28_2023-07-21-174112_nvql_6a5acb44b2d188e59e1f48dccc1f41ec.jpg" 
                      alt="Gig Harbor, Washington Project" 
                      width={800}
                      height={400}
                      className={styles.projectImage}
                    />
                  </div>
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

        {/* Call to Action Section */}
        {/* <section className="py-5" style={{ backgroundColor: 'var(--primary-blue)' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-white">
                <a href="mailto:thegryphon0412@gmail.com" className="text-decoration-none text-white">
                  <p className="lead fs-4 mb-0">
                    If you want to support these projects or others that will arrive later, please contact: thegryphon0412@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section> */}

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
                    <div className={styles.teamImageWrapper}>
                      <Image 
                        src="https://media.licdn.com/dms/image/v2/D4E03AQHHx9tHxBuvrA/profile-displayphoto-shrink_800_800/B4EZaSBUN9HIAg-/0/1746206541132?e=1767225600&v=beta&t=sIfOXIPUzKMtcv45T4eqSKUrGbT7gTaxVmRPc18ubBo" 
                        alt="David Green" 
                        width={800}
                        height={800}
                        className={styles.teamImage}
                      />
                    </div>
                    <h3 className="card-title mt-4 mb-2 text-primary">
                      David Green
                    </h3>
                    <p className="text-muted mb-3">
                      <small>Founder and President<br />The Gryphon Group LLC</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Group Members Section */}
        <section id="group-members" className="py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-4 fw-bold text-primary">Group Members</h2>
                <p className="lead text-muted">
                  Our trusted partners and affiliates
                </p>
              </div>
            </div>
            <Carousel autoPlay={true} autoPlayInterval={3000} wrapAround={true}>
              {/* Sirius Realty */}
              <div className="text-center">
                <a 
                  href="https://siriusrealtyservices.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <Image 
                      src="https://siriusrealtyservices.com/wp-content/themes/siriusrealty/inc/img/logo.png"
                      alt="Sirius Realty LLC"
                      width={200}
                      height={100}
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                </a>
              </div>
              {/* The Carver Group */}
              <div className="text-center">
                <a 
                  href="https://www.facebook.com/share/1FoMAiKTH3/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <div className={styles.logoPlaceholder}>
                      <h4 className="text-primary mb-0">The Carver Group</h4>
                    </div>
                  </div>
                </a>
              </div>
              {/* Galactic Digital Studios */}
              <div className="text-center">
                <a 
                  href="https://galacticdigitalstudios.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <Image 
                      src="https://galacticdigitalstudios.com/wp-content/uploads/2025/04/gds-logo-bnw-1-300x100.png"
                      alt="Galactic Digital Studios"
                      width={200}
                      height={100}
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                </a>
              </div>
              {/* First Choice Drywall */}
              <div className="text-center">
                <a 
                  href="https://www.facebook.com/share/1H9MDkHGTh/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <div className={styles.logoPlaceholder}>
                      <h4 className="text-primary mb-0">First Choice Drywall</h4>
                    </div>
                  </div>
                </a>
              </div>
              {/* The Wynn Group */}
              {/* <div className="text-center">
                <a 
                  href="https://twgcommercial.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <Image 
                      src="https://twgcommercial.com/wp-content/uploads/2022/05/logo-slant-1.png"
                      alt="The Wynn Group"
                      width={200}
                      height={100}
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                </a>
              </div> */}
              {/* Blackstream Commercial Real Estate */}
              {/* <div className="text-center">
                <a 
                  href="https://www.blackstreamcre.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <div className={styles.logoPlaceholder}>
                      <h4 className="text-primary mb-0">Blackstream Commercial Real Estate</h4>
                    </div>
                  </div>
                </a>
              </div> */}
              {/* Trowbridge Nieh LLP */}
              <div className="text-center">
                <a 
                  href="https://tnllp.com/attorney/gene-trowbridge/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <Image 
                      src="https://tnllp.com/wp-content/uploads/2023/02/TROWBRIDGE_NIEH_LLP.png"
                      alt="Trowbridge Nieh LLP"
                      width={200}
                      height={100}
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                </a>
              </div>
              {/* Moment Private Wealth */}
              {/* <div className="text-center">
                <a 
                  href="https://www.momentprivatewealth.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo}>
                    <div className={styles.logoPlaceholder}>
                      <h4 className="text-primary mb-0">Moment Private Wealth</h4>
                    </div>
                  </div>
                </a>
              </div> */}
              {/* Montgomery and Company, CPAs */}
              {/* <div className="text-center">
                <a 
                  href="https://montgomeryandco.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div className={styles.memberLogo} style={{ backgroundColor: '#c1c3c7' }}>
                    <Image 
                      src="https://montgomeryandco.com/wp-content/uploads/2019/09/MCO-Logo-White-3.svg"
                      alt="Montgomery & Company, CPAs"
                      width={200}
                      height={100}
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                </a>
              </div> */}
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}

