import { AiOutlinePlus } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { useActions } from "src/hooks/useActions";
import { useTypedSelector } from "src/hooks/useTypedSelector";

export const UserProfileButton = ({ userName }: { userName: string }) => {
  const { profile, authProfile }: any = useTypedSelector(({ user }) => user);
  const { follow, unfollow } = useActions();
  return (
    <button
      className="user-info__btn-follow"
      onClick={() => {
        profile.following
          ? unfollow(profile.username)
          : follow(profile.username);
      }}
    >
      {authProfile.username === userName ? (
        <>
          <IoIosSettings className="user-info__btn-follow--icon" />
          {`Edit Profile Settings`}
        </>
      ) : (
        <>
          <AiOutlinePlus className="user-info__btn-follow--icon" />
          {profile.following
            ? `Unfollow ${profile.username}`
            : `Follow ${profile.username}`}
        </>
      )}
    </button>
  );
};
