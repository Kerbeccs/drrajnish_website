import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function HospitalWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#e2e8f0' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        width: '100%',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 50,
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
        padding: '1rem 0'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="fas fa-heartbeat" style={{ fontSize: '1.5rem', color: 'white' }}></i>
              </div>
              <div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#06b6d4', margin: 0 }}>
                  Dr. Rajnish Chaudhary
                </h1>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Kilkari Bachchon Ka Aspataal </p>
              </div>
            </div>
            
            <div style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem' }}>
              <a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a>
              <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About</a>
              <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Services</a>
              <a href="#health" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Health Tips</a>
              <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact</a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: window.innerWidth <= 768 ? 'block' : 'none',
                background: 'none',
                border: 'none',
                color: '#06b6d4',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div style={{ background: '#1e293b', borderTop: '1px solid rgba(6, 182, 212, 0.2)', padding: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#home" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a>
              <a href="#about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About</a>
              <a href="#services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Services</a>
              <a href="#health" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Health Tips</a>
              <a href="#contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        padding: '8rem 1rem 5rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
        backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
        }}></div>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '50px',
                color: '#06b6d4',
                fontSize: '0.9rem',
                marginBottom: '1.5rem'
              }}>
                Trusted Pediatric Care
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                <span style={{ color: 'white' }}>Expert Care for</span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Your Children
                </span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '1rem' }}>
                Dr. Rajnish Kilkari Bachchon Ka Aspataal
              </p>
              <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: 1.6 }}>
                Providing comprehensive pediatric healthcare with compassion, expertise, and state-of-the-art facilities in Sant Kabir Nagar, Uttar Pradesh.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <button style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                  transition: 'transform 0.2s'
                }}>
                  Book Appointment
                </button>
                <button style={{
                  padding: '1rem 2rem',
                  background: '#1e293b',
                  color: '#06b6d4',
                  fontWeight: 600,
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}>
                  Learn More
                </button>
              </div>
            </div>

            {/* Doctor Photo */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', width: '20rem', height: '20rem', margin: '0 auto' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  opacity: 0.2,
                  animation: 'pulse 3s ease-in-out infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  inset: '1rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  opacity: 0.3,
                  filter: 'blur(40px)'
                }}></div>
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '4px solid rgba(6, 182, 212, 0.5)',
                  boxShadow: '0 20px 60px rgba(6, 182, 212, 0.5)',
                  overflow: 'hidden',
                  background: '#1e293b'
                }}>
                  { <img src="WhatsApp Image 2025-02-26 at 18.38.55_d416aa12.jpg" alt="Dr. Rajnish Chaudhary" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> }
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                  }}>
                    <i className="fas fa-user-md" style={{ fontSize: '8rem', color: 'rgba(6, 182, 212, 0.3)' }}></i>
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '2.5rem',
                  left: '-1rem',
                  background: 'rgba(15, 23, 42, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>10+</div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Years Experience</div>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '2.5rem',
                  right: '-1rem',
                  background: 'rgba(15, 23, 42, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#06b6d4' }}>5000+</div>
                  <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Happy Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '5rem 1rem', background: 'rgba(30, 41, 59, 0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              Our Medical Services
            </h2>
            <div style={{
              width: '6rem',
              height: '4px',
              background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
              margin: '0 auto'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '1.5rem'
          }}>
            {[
              { icon: 'fa-stethoscope', title: 'General Pediatrics', desc: 'Comprehensive healthcare for infants, children, and adolescents including routine check-ups and illness management.', img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80' },
              { icon: 'fa-syringe', title: 'Vaccination Programs', desc: 'Complete immunization services following national and international guidelines for preventable diseases.', img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80' },
              { icon: 'fa-heartbeat', title: 'Emergency Care', desc: '24/7 emergency pediatric care for acute illnesses, injuries, and medical emergencies.', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80' },
              { icon: 'fa-baby', title: 'Newborn Care', desc: 'Specialized care for newborns including neonatal screening and developmental monitoring.', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80' },
              { icon: 'fa-lungs', title: 'Respiratory Care', desc: 'Treatment for asthma, bronchitis, pneumonia, and other respiratory conditions.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80' },
              { icon: 'fa-child', title: 'Growth Monitoring', desc: 'Regular assessment of physical growth, developmental milestones, and nutritional status.', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80' }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: '#0f172a',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ 
                  height: '180px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                }}>
                  <img 
                    src={service.img} 
                    alt={service.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      opacity: 0.7,
                      transition: 'transform 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    width: '3rem',
                    height: '3rem',
                    background: 'rgba(6, 182, 212, 0.9)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)'
                  }}>
                    <i className={`fas ${service.icon}`} style={{ fontSize: '1.5rem', color: 'white' }}></i>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section style={{ padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
            gap: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '1rem',
              padding: '2rem'
            }}>
              <i className="fas fa-calendar-check" style={{ fontSize: '3rem', color: '#06b6d4', marginBottom: '1.5rem', display: 'block' }}></i>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
                Book Your Appointment
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
                Schedule your child's consultation easily through:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', marginBottom: '0.75rem' }}>
                  <i className="fas fa-phone" style={{ color: '#06b6d4', marginRight: '0.75rem' }}></i>
                  Call us directly
                </li>
                <li style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', marginBottom: '0.75rem' }}>
                  <i className="fas fa-mobile-alt" style={{ color: '#06b6d4', marginRight: '0.75rem' }}></i>
                  Download our Android Application
                </li>
                <li style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1' }}>
                  <i className="fas fa-clock" style={{ color: '#06b6d4', marginRight: '0.75rem' }}></i>
                  Available Monday to Saturday
                </li>
              </ul>
              <button style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                color: 'white',
                fontWeight: 600,
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
              }}>
                Book Now
              </button>
            </div>

            <div style={{
              background: '#1e293b',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              borderRadius: '1rem',
              padding: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                Why Choose Us?
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Experienced Pediatric Care',
                  'Child-Friendly Environment',
                  'Modern Medical Equipment',
                  'Affordable Healthcare',
                  'Convenient Location'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1', marginBottom: '1rem' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '0.75rem', fontSize: '1.25rem' }}></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section id="health" style={{ padding: '5rem 1rem', background: 'rgba(30, 41, 59, 0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              Children's Health Tips
            </h2>
            <div style={{
              width: '6rem',
              height: '4px',
              background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
              margin: '0 auto'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '1.5rem'
          }}>
            {[
              { title: 'Balanced Nutrition', desc: 'Ensure your child gets a variety of fruits, vegetables, whole grains, and proteins for healthy growth and immunity.', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80', icon: 'fa-apple-alt' },
              { title: 'Regular Exercise', desc: 'Children need at least 60 minutes of physical activity daily for healthy weight and strong bones.', img: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&q=80', icon: 'fa-running' },
              { title: 'Adequate Sleep', desc: 'Good sleep is crucial for growth, learning, and emotional regulation. Maintain consistent sleep schedules.', img: 'https://images.unsplash.com/photo-1541480551145-2370a440d585?w=400&q=80', icon: 'fa-bed' },
              { title: 'Hand Hygiene', desc: 'Teach proper handwashing with soap for 20 seconds to prevent common infections.', img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80', icon: 'fa-hands-wash' },
              { title: 'Vaccination', desc: 'Keep immunizations up to date to protect against serious diseases and contribute to community health.', img: 'https://images.unsplash.com/photo-1632053002972-9d6888750425?w=400&q=80', icon: 'fa-shield-virus' },
              { title: 'Hydration', desc: 'Ensure children drink plenty of water throughout the day for proper digestion and concentration.', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80', icon: 'fa-tint' }
            ].map((tip, idx) => (
              <div key={idx} style={{
                background: '#0f172a',
                borderLeft: '4px solid #06b6d4',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.2)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  height: '140px', 
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                }}>
                  <img 
                    src={tip.img} 
                    alt={tip.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      opacity: 0.6
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                    width: '2.5rem',
                    height: '2.5rem',
                    background: 'rgba(6, 182, 212, 0.9)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className={`fas ${tip.icon}`} style={{ fontSize: '1.25rem', color: 'white' }}></i>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#06b6d4', marginBottom: '0.75rem' }}>
                    {tip.title}
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              Visit Us
            </h2>
            <div style={{
              width: '6rem',
              height: '4px',
              background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
              margin: '0 auto'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
            gap: '2rem'
          }}>
            <div style={{
              background: '#1e293b',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              borderRadius: '1rem',
              padding: '2rem'
            }}>
              <i className="fas fa-map-marker-alt" style={{ fontSize: '2.5rem', color: '#06b6d4', marginBottom: '1.5rem', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                Our Location
              </h3>
              <div style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                <p style={{ fontWeight: 600, color: '#06b6d4', marginBottom: '0.5rem' }}>
                  Dr. Rajnish Kilkari Bachchon Ka Aspataal Private Limited
                </p>
                <p>Floor No.: 00, Building No./Flat No.: 00</p>
                <p>Road/Street: Sabrchak Road</p>
                <p>Nearby Landmark: Shyam Grocery Shop</p>
                <p>Locality: KHALILABAD</p>
                <p>City: Sarraiya</p>
                <p>District: Sant Kabir Nagar</p>
                <p>State: Uttar Pradesh</p>
                <p style={{ fontWeight: 'bold', color: '#06b6d4' }}>PIN Code: 272175</p>
              </div>
            </div>

            <div style={{
              background: '#1e293b',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              borderRadius: '1rem',
              padding: '2rem'
            }}>
              <i className="fas fa-phone" style={{ fontSize: '2.5rem', color: '#06b6d4', marginBottom: '1.5rem', display: 'block' }}></i>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
                Get In Touch
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>For appointments and consultations:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <i className="fas fa-phone-alt"></i>
                  Call for Appointment
                </button>
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: '#10b981',
                  color: 'white',
                  fontWeight: 600,
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <i className="fas fa-mobile-alt"></i>
                  Download Android App
                </button>
              </div>
              <div style={{
                padding: '1.5rem',
                background: '#0f172a',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: '0.5rem'
              }}>
                <i className="fas fa-clock" style={{ fontSize: '1.5rem', color: '#06b6d4', marginBottom: '0.75rem', display: 'block' }}></i>
                <h4 style={{ fontWeight: 600, color: '#06b6d4', marginBottom: '0.75rem' }}>Clinic Hours</h4>
                <p style={{ color: '#cbd5e1', marginBottom: '0.25rem' }}>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p style={{ color: '#cbd5e1' }}>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0f172a',
        borderTop: '1px solid rgba(6, 182, 212, 0.2)',
        padding: '3rem 1rem 2rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#06b6d4', marginBottom: '1rem' }}>
                Dr. Rajnish Chaudhary
              </h4>
              <p style={{ color: '#94a3b8' }}>
                Providing quality pediatric care with compassion and dedication.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Services</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#health" style={{ color: '#94a3b8', textDecoration: 'none' }}>Health Tips</a>
                </li>
                <li>
                  <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>
                Contact Info
              </h4>
              <p style={{ color: '#94a3b8' }}>Sarraiya, Sant Kabir Nagar</p>
              <p style={{ color: '#94a3b8' }}>Uttar Pradesh - 272175</p>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(6, 182, 212, 0.2)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <p>&copy; 2024 Dr. Rajnish Kilkari Bachchon Ka Aspataal Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<HospitalWebsite />);