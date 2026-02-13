import About from '../Header/About'
import AboutTheJournal from '../Header/AboutTheJournal'
import AdminDashBoard from '../Pdfs/AdminDashBoard/AdminDashBoard'
import AdminRouting from './AdminRouting'
import Announcement from '../Announcement/Announcement'
import AnnouncementInput from '../Announcement/AnnouncementInput'
import Archives from '../Pdfs/Archives'
import ArticleProcessingCharges from '../News and events/ArticleProcessingCharges'
import AuthorGuidelines from '../Header/AuthorGuidelines'
import CallForPapers from '../Components/CallForPapers'
import Conferences from '../Header/Conferences'
import Contact from '../Header/Contact'
import ContactList from '../Pdfs/AdminDashBoard/ContactList'
import Current_Issues from '../Pdfs/AdminDashBoard/Current_Issues'
import Downloads from '../Header/Downloads'
import EditorialBoard from '../Header/EditorialBoard'
import EditorialBoardList from '../Pdfs/AdminDashBoard/EditorialBoardList'
import EditorialboardUpload from '../Header/EditorialboardUpload'
import ErrorPage from './ErrorPage'
import ForgotPassword from '../services/ForgotPassword'
import Home from '../Components/Home'
import IndexList from '../News and events/IndexList'
import IssueView from '../Pdfs/AdminDashBoard/IssueView'
import IssueViewPrevious from '../Pdfs/AdminDashBoard/IssueViewPrevious'
import JournalPolicies from '../Header/JournalPolicies'
import Layout from './Layout'
import Login from '../services/Login'
import ManuscriptList from '../Header/ManuscriptList'
import Membership from '../Header/Membership'
import MembershipList from '../Pdfs/MembershipList'
import PdfList from '../Pdfs/AdminDashBoard/PdfList'
import PdfProviderAll from '../Pdfs/AdminDashBoard/PdfProviderAll'
import PreviousIssues from '../Pdfs/AdminDashBoard/Previous_Issues'
import Previous_Issues from '../Pdfs/AdminDashBoard/Previous_Issues'
import PublicationEthics from '../Header/PublicationEthics'
import React from 'react'
import Register from '../services/Register'
import Reviewers from '../Header/Reviewers'
import ReviewersList from '../Pdfs/AdminDashBoard/ReviewersList'
import SubmitManuscript from '../Header/SubmitManuscript'
import UploadPdf from '../Pdfs/AdminDashBoard/UploadPdf'
import UserInfoPortal from '../services/UserInfoPortal'
import VisitorsStats from '../Pdfs/AdminDashBoard/VisitorsStats'
import { createBrowserRouter } from 'react-router-dom'

// import VisitorStats from '../Pdfs/AdminDashBoard/VisitorStats'


// import { PdfProviderAll } from '../Pdfs/AdminDashBoard/PdfContextAll'













const Routing = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {index:true, element:<Home/>},
      { path:"*", element:<ErrorPage/>},
        
      {path:"/About",element:<About/>},
      {path:"/Contact",element:<Contact/>},
   
      {path:"/PublicationEthics",element:<PublicationEthics/>},
      {path:"/SubmitManuscript",element:<SubmitManuscript/>},
     
      {path:"/AuthorGuidelines",element:<AuthorGuidelines/>},
      {path:"/JournalPolicies",element:<JournalPolicies/>},
      {path:"/EditorialBoard",element:<EditorialBoard/>},
  
   {path:"/UserInfoPortal",element:<UserInfoPortal/>},
   {path:"/ArticleProcessingCharges",element:<ArticleProcessingCharges/>},
   {path:"/IndexList",element:<IndexList/>},
   {path:"/CallForPapers",element:< CallForPapers/>},

   {path:"/Archives",element:<Archives/>},
   {path:"/Current_Issues",element:< Current_Issues/>},
   {path:"/Previous_Issues",element:<PreviousIssues />},
    {path:"/previous-issue/:year/:volume/:issueNo", element: <IssueViewPrevious />},
   {path:"/AdminDashBoard",element:<AdminDashBoard/>},
   {path:"/Register",element:<Register/>},
   {path:"/Login",element:<Login/>},
   {path:"/forgotpassword", element:<ForgotPassword/>} ,
   
   {path:"/Conferences",element:<Conferences/>},
   {path:"/Downloads",element:<Downloads/>},
   {path:"/Reviewers",element:<Reviewers/>},
   {path:"/editorial-board",element:<EditorialboardUpload/>},
   {path:"/membership",element:<Membership/>},

   {path:"/ReviewersList",element:<ReviewersList/>},
   {path:"/EditorialBordList",element:<EditorialBoardList/>},
   {path:"/MembershipList",element:<MembershipList/>},
     {path:"/AboutTheJournal",element:<AboutTheJournal/>},


  
{path:"/uploadpdf", element:(<AdminRouting><UploadPdf/></AdminRouting>)},

{path:"/VisitorStats", element:(<AdminRouting><VisitorsStats/></AdminRouting>)},

{path:"/PdfList",element:(<AdminRouting>
  <PdfProviderAll>
    <PdfList /></PdfProviderAll></AdminRouting>)},

     
    

{path:"/uploadAnnouncement",element:(<AdminRouting><Announcement /></AdminRouting>)},

{ path:"/issue/:year/:volume/:issueNo", element:<IssueView /> },


{path:"/contactlist",element:(<AdminRouting><ContactList /></AdminRouting>)},


{path:"/Manuscripts",element:(<AdminRouting><ManuscriptList/></AdminRouting>)},

{path:"/Announcement",element:(<AdminRouting><Announcement/></AdminRouting>)},

{path:"/AnnouncementInput",element:(<AdminRouting><AnnouncementInput/></AdminRouting>)},


    ]
  },
  
])

export default Routing