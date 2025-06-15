export default function HomePage() {
  return (
    <>
      <section style={styles.heroSection}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heading}>HELPING YOU SAVE MORE ON MEDICATIONS</h1>
        </div>
        <div style={styles.heroRight}>
          <img
            src="/images/Hero.svg"
            alt="hero"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      <section style={styles.aboutSection}>
        <h2 style={styles.aboutHeading}>About Us</h2>
        <p style={styles.aboutText}>
          Welcome to <span style={{ color: 'green' }}>Oxy</span><span style={{ color: '#1E3A8A' }}>Pharmacy</span>, your go-to destination for quality medications, healthcare products, and professional pharmacy services. We are committed to providing safe, reliable, and affordable healthcare solutions to support your well-being.
        </p>
      </section>

      <section style={styles.cardSection}>
        <h3 style={styles.sectionTitle}>Why Choose Us?</h3>
        <div style={styles.cardGrid}>
          {[
            ['High-Quality & Comprehensive Products', '/images/HighQuality.svg'],
            ['Professional & Reliable Service', '/images/ProffesionalReliable.svg'],
            ['Fast & Convenient', '/images/Fast.svg'],
            ['Affordable Prices & Great Deals', '/images/Affordable.svg'],
          ].map(([label, img], idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.cardImageWrapper}>
                <img src={img} alt={label} style={styles.cardImage} />
              </div>
              <p style={styles.cardText}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.cardSection}>
        <h3 style={styles.sectionTitle}>Our Services</h3>
        <div style={styles.cardGrid}>
          {[
            ['Pharmacy Consultation', '/images/Consultation.svg'],
            ['Prescription Medications', '/images/Prescription.svg'],
            ['Medical Devices & Equipment', '/images/Equipment.svg'],
            ['Home Delivery Service', '/images/Delivery.svg'],
          ].map(([label, img], idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.cardImageWrapper}>
                <img src={img} alt={label} style={styles.cardImage} />
              </div>
              <p style={styles.cardText}>{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    padding: '40px',
    background: '#CADBF4',
  },
  heroLeft: {
    flex: 1,
    paddingRight: '30px',
  },
  heroRight: {
    flex: 1,
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '12px 20px',
    border: 'none',
    fontSize: '16px',
    outline: 'none',
  },
  searchButton: {
    padding: '12px 20px',
    backgroundColor: '#34A853',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  aboutSection: {
    padding: '50px 40px 30px',
    textAlign: 'center',
  },
  aboutHeading: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  aboutText: {
    fontSize: '16px',
    maxWidth: '800px',
    margin: '20px auto 0',
    lineHeight: '1.6',
  },
  cardSection: {
    padding: '40px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: '30px',
    textAlign: 'center',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    width: '100%', 
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '0 20px', 
  },
  card: {
    backgroundColor: '#D2E1F6',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    width: '100%',
    height: '260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    },
  cardImageWrapper: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  cardImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    minHeight: '80px',
  },
  cardText: {
    fontWeight: '500',
    fontSize: '17px',
    marginTop: '5px',
    textAlign: 'center',
    lineHeight: '1.0',
  },

};