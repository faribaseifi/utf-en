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
const MyInfo = lazy(() => import('./screens/MyInfo'));
const PaymentsHis = lazy(() => import('./screens/PaymentsHis'));
const PaymentsRem = lazy(() => import('./screens/PaymentsRem'));
const StudentFunds = lazy(() => import('./screens/StudentFunds'));
const ClickForRes = lazy(() => import('./screens/ClickForRes'));
const SupportOrg = lazy(() => import('./screens/SupportOrg'));
const Need = lazy(() => import('./screens/Need'));
const ReportIndex = lazy(() => import('./screens/ReportIndex'));
const Report1 = lazy(() => import('./screens/Report1'));
const Report2 = lazy(() => import('./screens/Report2'));
const Rep3 = lazy(() => import('./screens/Rep3'));
const Rep4 = lazy(() => import('./screens/Rep4'));
const Repo5 = lazy(() => import('./screens/Repo5'));
const Repo6 = lazy(() => import('./screens/Repo6'));








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
                <Route path="/BlogPost/:id" component={withScripts(BlogPost)} />
                <Route path="/login" component={withScripts(Login)} />
                <Route path="/AboutUni" component={AboutUni} />
                <Route path="/Donator" component={Donator} />
                <Route path="/Branches" component={Branches} />
                <PrivateRoute path="/Payments" component={Payments} />
                <Route path="/OperationReport" component={OperationReport} />
                <Route path="/DonationsReport" component={DonationsReport} />
                <Route path="/FinancialReport" component={FinancialReport} />
                <Route path="/ReportIndex" component={ReportIndex} />
                <Route path="/Report1" component={Report1} />
                <Route path="/Report2" component={Report2} />
                <Route path="/Rep3" component={Rep3} />
                <Route path="/Rep4" component={Rep4} />
                <Route path="/Repo5" component={Repo5} />
                <Route path="/Repo6" component={Repo6} />






                <Route path="/Need" component={Need} />




                <Route
                  path="/OrganizationalChart"
                  component={OrganizationalChart}
                />
                <Route path="/BoardofTrustees" component={BoardofTrustees} />
                <Route path="/BenefactorDetail/:benefactor_id" component={BenefactorDetail} />
                <Route path="/SupporterDetail/:supporter_id" component={SupporterDetail} />
                <Route path="/Inspector" component={Inspector} />
                <Route path="/ContactUs" component={ContactUs} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/CEO" component={CEO} />
                <PrivateRoute path="/MyInfo" component={MyInfo} />
                <Route path="/StudentFunds" component={StudentFunds} />
                <PrivateRoute path="/PaymentsRem" component={PaymentsRem} />
                <PrivateRoute path="/PaymentsHis" component={PaymentsHis} />
                <Route path="/ClickForRes" component={ClickForRes} />
                <Route path="/SupportOrg" component={SupportOrg} />

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
