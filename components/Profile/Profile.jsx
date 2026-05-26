import { useState } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  // const { user, loading } = useSelector(state);
  // const [editData, setEditData] = useState({
  //   name: user?.name || "",
  //   email: user?.email || "",
  // });

  const [avatar, setAvatar] = useState(null);
  const [updatingSection, setUpdatingSection] = useState("");

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleProfileChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const updateProfile = () => {
    const formData = new FormData();
    formData.append("name", editData.name);
    formData.append("name", editData.email);
    formData.append("name", avatar);
    setUpdatingSection("Profile");
    // dispatch(updateAdminProfile(formData));
  };

  return (
    <div className="profile__container">
      <h1 className="profile__container-title">Profile</h1>
      <p className="profile__container-subtitle">Manage your profile</p>
    </div>
  );
};

export default Profile;
