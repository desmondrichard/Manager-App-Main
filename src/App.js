import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accessories from './components/Accessories';
import PlayersAuctionList from './components/PlayersAuctionList';
import Fixtures from './components/Fixtures';
import ThingsTodo from './components/ThingsTodo';
import Accreditationcard from './components/Accreditationcard';
import PlayerRegistration from './components/offcanvas-body/Registration/PlayerRegistration';
import App1 from './components/App1';
import AccreditionForm from './components/AccreditionForm';
import ThingsTodoForm from './components/ThingsTodoForm';
import SupportStaffRegistration from './components/offcanvas-body/Registration/Support-Staff-Registration-Form/SupportStaffRegistration';
import DashboardCard from './components/DashboardCard';
import DashboardSupportStaffCard from './components/DashboardSupportStaffCard';
import ThingsToDoViewCard from './components/offcanvas-body/ThingsToDoViewCard';
import ThingsToDoAddList from './components/ThingsToDoAddList';
import PlayerRegistrationViewCard from './components/offcanvas-body/Registration/Player-Registration-Form/PlayerRegistrationViewCard';
import AccreadiationViewCard from './components/AccreadiationViewCard';
import DashboardPlayGroundViewCard from './components/DashboardPlayGroundViewCard';
import SponsorsViewCard from './components/SponsorsViewCard';
import PageNotFound from './components/Error404Page/PageNotFound';
import AdminDashboard from './components/AdminDashboard';
import StaffRegistrationViewCard from './components/offcanvas-body/Registration/Support-Staff-Registration-Form/Support-Staff-Modal-Forms/StaffRegistrationViewCard';
import SuperAdminLogin from './components/SuperAdmin/SuperAdminLogin';
import SuperAdminRegister from './components/SuperAdmin/SuperAdminRegister';
import { Navigate } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';


function App() {
  const getUserName = sessionStorage.getItem("userName");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LoginSignup />} />
            <Route path='/teamslogin' exact element={<Login />} />
            <Route path='teamssignup' exact element={<Register />} />
            <Route path='superadminsignup' exact element={<SuperAdminRegister />} />
            <Route path='accessories' exact element={<Accessories />} />
            <Route path='playersauctionlist' exact element={<PlayersAuctionList />} />
            <Route path='fixtures' exact element={<Fixtures />} />
            <Route path='admindashboard' exact element={<AdminDashboard />} />
          </Route>

          {/*  */}
          {/* <Route path='/teamssignup' exact element={<Register />} /> */}

          {/* <Route path='/' exact element={<SuperAdminLogin />} /> */}
          {/* <Route path='/superadminsignup' exact element={<SuperAdminRegister />} /> */}

          {/* Nested Routes for Dashboard: */}
          <Route path='dashboard'>
            <Route index element={<App1 />} />
            <Route path='dashboardplayerscard' exact element={<DashboardCard />} />
            <Route path='dashboardstaffcard' exact element={<DashboardSupportStaffCard />} />
            <Route path='playgroundcard' exact element={<DashboardPlayGroundViewCard />} />
            <Route path='sponsorscard' exact element={<SponsorsViewCard />} />
          </Route>

          <Route path='playerregister'>
            <Route index element={<PlayerRegistration />} />
            <Route path='playerdetails' exact element={<PlayerRegistrationViewCard />} />
          </Route>
          {/* <Route path='/playerregister' exact element={<PlayerRegistration />} /> */}

          <Route path='staffregister'>
            <Route index element={<SupportStaffRegistration />} />
            <Route path='staffdetails' exact element={<StaffRegistrationViewCard />} />
          </Route>


          {/* Nested Routes: */}
          <Route path='thingstodo'>
            <Route index element={<ThingsTodo />} />
            <Route path='thingstodoviewcard' exact element={<ThingsToDoViewCard />} />
            <Route path='thingstodoaddlist' exact element={<ThingsToDoAddList />} />
          </Route>

          {/* Nested Routes for Accreadiation: */}
          <Route path="accreadiationcards">
            <Route index element={<Accreditationcard />} />
            <Route path='accreadiationform' exact element={<AccreditionForm />} />
            <Route path='accreadiationViewCard' exact element={<AccreadiationViewCard />} />
          </Route>


          {/* <Route path='/thingstodoform' exact element={<ThingsTodoForm />} /> */}
          {/* Page Not Found: */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;