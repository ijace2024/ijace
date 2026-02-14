import './AsideBar.css';

import { Card, Form, ListGroup } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

import { CgNotes } from 'react-icons/cg';
import { IoNewspaperOutline } from 'react-icons/io5';
import React from 'react';
import SidePanel from './SidePanel';

const AsideBar = () => {
    const navigate = useNavigate();

    const handleChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <>
     <Card id='asidebar'>
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className=" mb-3 " id='hello'>
         
          <NavLink to="/CallForPapers" className="nav-link p-0">
              <IoNewspaperOutline className="me-2 icon" />
               Call for Papers
            </NavLink>

        </Card.Title>

        <ListGroup variant="flush">
          
          <ListGroup.Item>
            <NavLink to="/IndexList" className="nav-link p-0" id='hello1'>
              <IoNewspaperOutline className="me-2 icon" />
              {/* Publication Ethics */}
              Index List
            </NavLink>
          </ListGroup.Item>

          <ListGroup.Item>
            <NavLink to="/JournalPolicies" className="nav-link p-0" id='hello1'>
              <IoNewspaperOutline className="me-2 icon" />
              Ethics and Policies
            </NavLink>
          </ListGroup.Item>

          <ListGroup.Item>
            <NavLink to="/AuthorGuidelines" className="nav-link p-0" id='hello1'>
              <IoNewspaperOutline className="me-2 icon" />
              Author Guidelines
            </NavLink>
          </ListGroup.Item>

           {/* <ListGroup.Item>
            <NavLink to="/conferences" className="nav-link p-0" id='hello3'>
              <IoNewspaperOutline className="me-2 icon" />
              Conference
            </NavLink>
          </ListGroup.Item> */}

           <ListGroup.Item>
            <NavLink to="/Downloads" className="nav-link p-0" id='hello1'>
              <IoNewspaperOutline className="me-2 icon" />
              Downloads
            </NavLink>
          </ListGroup.Item>

          
          <ListGroup.Item className="p-0 mt-2 ps-2">
            
           {/* <h5> News and Events</h5> */}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>


</Card>

<Card>
  <Card.Body>
    <Card.Title className="mb-3" id='hello'>
      SUBJECT AREAS
    </Card.Title>
<ul type='none'>
  <li><NavLink to="/EEE" className=" p-0" > EEE</NavLink></li>
  <li><NavLink to="#" className=" p-0" > Computer Science</NavLink></li>
  <li><NavLink to="#" className=" p-0" > Mechaanical</NavLink></li>
  <li><NavLink to="#" className=" p-0" > Artificial Intelligence</NavLink></li>
  <li><NavLink to="#" className=" p-0" > Ece</NavLink></li>
</ul>

  </Card.Body>
</Card>





{/* /////////////////////////////////////////////////////////// */}

       {/* <Card className="text-center shadow-sm my-4" style={{ maxWidth: "300px", margin: "0 auto" }}>
            <Card.Body>
              <Card.Title className="mb-3">www.ijmsabc.org</Card.Title>
              <Card.Img 
                variant="top" 
                src="/ijmsabc_qr.png" 
                alt="IJMSABC QR Code" 
                style={{ width: "200px", height: "200px", objectFit: "contain", margin: "0 auto" }}
              />
            </Card.Body>
          </Card> */}

      {/* <Card.Footer className="bg-light p-2">
        <div className="scroller">
          <marquee behavior="scroll" direction="up" scrollamount="2" height="200px">
            <div id='marquee1'>
               */}
               
                
                 {/* <NavLink to="/ArticleProcessingCharges" className='news'>
                <div className='news1'><CgNotes id='notice'/>ArticleProcessingCharges</div> 
               
                </NavLink> */}
{/* 
                <NavLink to="/IndexList" className='news'>
                <div className='news1'><CgNotes id='notice'/>Index List</div> 
                
                </NavLink> */}
                
                 {/* <NavLink to="/Events2023" className='news'>
                <div className='news1'><CgNotes id='notice'/>On 2023</div> 
                <div className='news2'>Journal impact factor</div>
                </NavLink>
                 <NavLink to="/Events2022" className='news'>
                <div className='news1'><CgNotes id='notice'/>On 2022</div> 
                <div className='news2'>Journal impact factor</div>
                </NavLink>
              <NavLink to="/Events2021" className='news'>
                <div className='news1'><CgNotes id='notice'/>On 2021</div> 
                <div className='news2'>Journal impact factor</div>
                </NavLink> */}

            {/* </div>
          </marquee>
        </div>
      </Card.Footer> */}

    
    {/* <SidePanel/> */}

    </Card>
    </>
  );
};

export default AsideBar;