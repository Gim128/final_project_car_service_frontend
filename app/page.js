// 'use client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from '@/components/PrivateRoute';
// import dynamic from 'next/dynamic';
// import LoginForm from '@/app/auth/LoginForm';
// import SignupForm from '@/components/SignupForm';
// import AccountPage from '@/pages/AccountPage';
// // import ContactUsPage from '../pages/ContactUsPage';
// import BrokerDirectoryPage from '../pages/BrokerDirectoryPage';
// import ServiceCenterDirectoryPage from '@/pages/ServiceCenterDirectoryPage';
// import SparePartsDirectoryPage from '@/pages/SparePartsDirectoryPage';
// import AddVehiclePage from '@/pages/AddVehiclePage';
// import ProfileView from '@/components/Account/ProfileView';
//
//
// const HomePage = dynamic(() => import('../pages/HomePage'), { ssr: false });
// const ContactUsPage = dynamic(() => import('../pages/ContactUsPage'), { ssr: false });
//
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<HomePage />} />
//       {/* <Route path="/" element={<PostAd />} /> */}
//       <Route path="/contact" element={<ContactUsPage />} />
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/signup" element={<SignupForm />} />
//       <Route path="/brokers" element={<BrokerDirectoryPage />} />
//       <Route path="/service-centers" element={<ServiceCenterDirectoryPage />} />
//       <Route path="/spare-parts" element={<SparePartsDirectoryPage />} />
//       <Route path="/add-vehicle" element={<AddVehiclePage />} />
//       <Route path="/profile" element={<ProfileView/>} />
//
//       {/*<Route element={<PrivateRoute />}>*/}
//       {/*  <Route path="/profile" element={<ProfileView/>} />*/}
//       {/*</Route>*/}
//
//     </Routes>
//     </Router>
//
//   );
// }