import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountLayout from '../components/Account/AccountLayout';
import ProfileView from '../components/Account/ProfileView';
import SettingsView from '../components/Account/SettingsView';
import AdsView from '../components/Account/AdsView';
import NoAdsView from '../components/Account/NoAdsView';
import PrivateRoute from '../components/PrivateRoute.js';

const AccountPage = () => {
  return (
    <AccountLayout>
      <Routes>
        <Route path="profile" element={<ProfileView />} />
        <Route path="settings" element={<SettingsView />} />
        <Route
          path="my-ads"
          element={
            <PrivateRoute>
              {userHasAds ? <AdsView /> : <NoAdsView />}
            </PrivateRoute>
          }
        />
      </Routes>
    </AccountLayout>
  );
};

export default AccountPage;