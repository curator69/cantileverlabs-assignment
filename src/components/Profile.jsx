const Profile = () => {
  return (
    <div className="flex items-center gap-8">
      <img src="/assets/icons/title/email.svg" alt="email" />
      <img src="/assets/icons/title/notification.svg" alt="notification" />

      <div className="flex items-center gap-4">
        <img
          src="/assets/icons/title/profile.svg"
          alt="profile"
          className="bg-[#FFC145] rounded-full"
        />
        <div>
          <p>Andrew</p>
          <p className="text-[#AEAEAE]">Admin account</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
