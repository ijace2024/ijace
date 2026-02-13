import { Card, Col, Container, Row } from 'react-bootstrap'

import React from 'react'

const SidePanel = () => {
  const visitors = [
    { country: 'India', icon: '/ind.png', count: 954 },
    { country: 'America', icon: '/america.png', count: 185 },
    { country: 'England', icon: '/england.png', count: 78 },
    { country: 'Russia', icon: '/russia.png', count: 60 },
    { country: 'Italy', icon: '/italy.png', count: 99 },
    
    // { country: 'Total', icon: '', count: 1376 },

  ]

  const styles = {
    container: {
      padding: '1.5rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      color: '#333',
      textAlign: 'center',
    },
    visitorItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      borderRadius: '6px',
      border: '1px solid #e9ecef',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    visitorItemHover: {
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transform: 'translateY(-2px)',
    },
    img: {
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #007bff',
    },
    countBadge: {
      display: 'inline-block',
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginLeft: 'auto',
    },
  }

  const [hoveredIndex, setHoveredIndex] = React.useState(null)

  return (
    <Container fluid className="px-2 px-md-3"  id='asidebar'>

      
      <Card className="border-0 shadow-sm" style={styles.container}>

<Card className="text-center shadow-sm my-4" style={{ maxWidth: "300px", margin: "0 auto" }}>
            <Card.Body>
              <Card.Title className="mb-3">Website_Domain</Card.Title>
              <Card.Img 
                variant="top" 
                src="/ijace_qr.png" 
                alt="IJACE QR Code" 
                style={{ width: "200px", height: "200px", objectFit: "contain", margin: "0 auto" }}
              />
            </Card.Body>
          </Card>

        <h2 style={styles.title}>Visitors by Country</h2>

        <div>
          {visitors.map((visitor, index) => (
            <div
              key={index}
              style={{
                ...styles.visitorItem,
                ...(hoveredIndex === index ? styles.visitorItemHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={visitor.icon}
                alt={visitor.country}
                style={styles.img}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/40?text=Flag'
                }}
              />
              <div className="flex-grow-1">
                <p className="mb-0 fw-bold" style={{ fontSize: '0.95rem', color: '#333' }}>
                  {visitor.country}
                </p>
              </div>
              <div style={styles.countBadge}>
                {visitor.count.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
        <div>
            <h3>Total - 1376</h3>
        </div>
      </Card>
    </Container>
  )
}

export default SidePanel
