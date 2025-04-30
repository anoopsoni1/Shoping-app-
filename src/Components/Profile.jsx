import { auth } from '../Firebase';

const Profile = () => {
  const user = auth.currentUser;

  return (
    <div>
      <h2>User Logged In Successfully</h2>
      {user && <p>Welcome, {user.email}</p>}
    </div>
  );
};

export default Profile;
