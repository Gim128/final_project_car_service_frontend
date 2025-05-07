import React, { useState, useEffect } from 'react';
// import { getUserProfile, updateProfile } from '../../services/userService';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { toast } from 'react-toastify';
import {getUserProfile} from "@/utils/api";

const ProfileView = () => {
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    mobile: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        toast.error('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    console.log("inside profile");
  },[])

  const handleSave = async () => {
    try {
      await updateProfile(profile);
      toast.success('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
      
      {isEditing ? (
        <div className="space-y-4">
          <InputField
            label="Name"
            value={profile?.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
          />
          <InputField
            label="Location"
            value={profile?.location}
            onChange={(e) => setProfile({...profile, location: e.target.value})}
          />
          <InputField
            label="Mobile"
            value={profile?.mobile}
            onChange={(e) => setProfile({...profile, mobile: e.target.value})}
          />
          <div className="flex space-x-4">
            <Button onClick={handleSave}>Save</Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </div>
      ) : (
          <div className="space-y-6">
            <div>
              <div>
                <h3 className="text-lg font-medium">Name</h3>
                <p>{profile?.name}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p>{profile?.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Mobile</h3>
                <p>{profile?.mobile}</p>
              </div>
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
            </div>
          </div>
      )}
    </div>
  );
};

export default ProfileView;