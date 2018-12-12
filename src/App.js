import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContext from './utils/authContext';
// import Homepage from './screens/Homepage';
// import BlogPost from './screens/BlogPost';
//import Login from './screens/Login';
//import Profile from './screens/Profile';
//import AboutUni from './screens/AboutUni';
//import Branches from './screens/Branches';
//import Payments from './screens/Payments';
//import OrganizationalChart from './screens/OrganizationalChart';
//import FinancialReport from './screens/FinancialReport';
//import DonationsReport from './screens/DonationsReport';
//import OperationReport from './screens/OperationReport';
//import InspectorsReport from './screens/InspectorsReport';
//import GoalsandGuidelines from './screens/GoalsandGuidelines';
//import BoardofTrustees from './screens/BoardofTrustees';
//import Inspector from './screens/Inspector';
//import FAQ from './screens/FAQ';
//import CEO from './screens/CEO';
//import SupportSus from './screens/SupportSus';
//import HelpActionProjs from './screens/HelpActionProjs';
//import JoinDonators from './screens/JoinDonators';
//import SupportInt from './screens/SupportInt';
//import BecomeaDonator from './screens/BecomeaDonator';
//import DonateviaTime from './screens/DonateviaTime';
//import DonateEdu from './screens/DonateEdu';
//import ContactUs from './screens/ContactUs';
//import Donator from './screens/Donator';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import withScripts from './utils/withScripts';
import AuthProvider from './components/AuthProvider';

const Homepage = lazy(() => import('./screens/Homepage'));
const BlogPost = lazy(() => import('./screens/BlogPost'));
const Login = lazy(() => import('./screens/Login'));
const Profile = lazy(() => import('./screens/Profile'));
const AboutUni = lazy(() => import('./screens/AboutUni'));
const Branches = lazy(() => import('./screens/Branches'));
const Payments = lazy(() => import('./screens/Payments'));
const OrganizationalChart = lazy(() => import('./screens/OrganizationalChart'));
const FinancialReport = lazy(() => import('./screens/FinancialReport'));
const DonationsReport = lazy(() => import('./screens/DonationsReport'));
const OperationReport = lazy(() => import('./screens/OperationReport'));
const InspectorsReport = lazy(() => import('./screens/InspectorsReport'));
const GoalsandGuidelines = lazy(() => import('./screens/GoalsandGuidelines'));
const BoardofTrustees = lazy(() => import('./screens/BoardofTrustees'));
const Inspector = lazy(() => import('./screens/Inspector'));
const FAQ = lazy(() => import('./screens/FAQ'));
const CEO = lazy(() => import('./screens/CEO'));
const SupportSus = lazy(() => import('./screens/SupportSus'));
const HelpActionProjs = lazy(() => import('./screens/HelpActionProjs'));
const JoinDonators = lazy(() => import('./screens/JoinDonators'));
const SupportInt = lazy(() => import('./screens/SupportInt'));
const BecomeaDonator = lazy(() => import('./screens/BecomeaDonator'));
const DonateviaTime = lazy(() => import('./screens/DonateviaTime'));
const DonateEdu = lazy(() => import('./screens/DonateEdu'));
const ContactUs = lazy(() => import('./screens/ContactUs'));
const Donator = lazy(() => import('./screens/Donator'));
const BenefactorDetail = lazy(() => import('./screens/BenefactorDetail'));
const SupporterDetail = lazy(() => import('./screens/SupporterDetail'));





class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Header />
            <Suspense
              fallback={() => <div style={{ height: '100%' }}>Loading</div>}>
              <Switch>
                <Route path="/" exact component={withScripts(Homepage)} />
                <Route path="/blog/:id" component={withScripts(BlogPost)} />
                <Route path="/login" component={withScripts(Login)} />
                <Route path="/AboutUni" component={AboutUni} />
                <Route path="/Donator" component={Donator} />
                <Route path="/Branches" component={Branches} />
                <Route path="/Payments" component={Payments} />
                <Route path="/OperationReport" component={OperationReport} />
                <Route path="/DonationsReport" component={DonationsReport} />
                <Route path="/FinancialReport" component={FinancialReport} />
                <Route
                  path="/OrganizationalChart"
                  component={OrganizationalChart}
                />
                <Route path="/BoardofTrustees" component={BoardofTrustees} />
                <Route path="/BenefactorDetail" component={BenefactorDetail} />
                <Route path="/SupporterDetail" component={SupporterDetail} />
                <Route path="/Inspector" component={Inspector} />
                <Route path="/ContactUs" component={ContactUs} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/CEO" component={CEO} />
                <Route path="/JoinDonators" component={JoinDonators} />
                <Route path="/DonateEdu" component={DonateEdu} />
                <Route path="/SupportInt" component={SupportInt} />
                <Route path="/DonateviaTime" component={DonateviaTime} />
                <Route path="/HelpActionProjs" component={HelpActionProjs} />
                <Route path="/SupportSus" component={SupportSus} />
                <Route path="/BecomeaDonator" component={BecomeaDonator} />
                <Route
                  path="/GoalsandGuidelines"
                  component={GoalsandGuidelines}
                />
                <Route path="/InspectorsReport" component={InspectorsReport} />
                <PrivateRoute path="/profile" component={Profile} />
              </Switch>
            </Suspense>
            <Footer />
          </ScrollToTop>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
