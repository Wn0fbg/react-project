import "./Profile.css";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile-header">
        <h1 className="profile-title">Profile</h1>
        <p className="profile-subtitle">Manage your profile.</p>
      </div>

      <div className="profile-content">
        <div className="profile__card">
          <div className="profile__card-image">
            <Image src={avatar} alt="Name" className="profile__card-img" />
            <div className="profile-left">
              <p className="profile-text">name: Artem</p>
              <p className="profile-text">email: wnfbg@gmail.com</p>
              <p className="profile-text">role: User</p>
            </div>
          </div>
        </div>

        <div className="product__update-profile">
          <h3 className="section-title">Update profile</h3>
          <div className="profile__update-inputs">
            <input
              type="text"
              className="update-input"
              placeholder="Your name"
            />
            <input
              type="email"
              className="update-input"
              placeholder="Your email address"
            />
            <input type="file" className="update-input" />
          </div>
        </div>

        <div className="product__update-password">
          <h3 className="section-title">Update password</h3>
          <div className="profile__update-inputs">
            <input
              type="text"
              className="update-input"
              placeholder="Current password"
            />
            <input
              type="text"
              className="update-input"
              placeholder="New password"
            />
            <input
              type="text"
              className="update-input"
              placeholder="Confirm new password"
            />
          </div>
        </div>
      </div>
      <button className="submit-btn" type="submit">
        Update profile
      </button>
    </div>
  );
};

export default Profile;
