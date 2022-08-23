import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useDispatch, useSelector } from "react-redux";
import Uploadimg from "./Uploadimg";
import { updateBio } from "../../actions/user.actions";
import { dateParser } from "../Utils";
import FollowHandler from "./FollowHandler";
import { deleteUser } from "../../actions/user.actions";

const UpdateProfil = () => {
    const [bio, setBio] = useState("");
    const [userIdToDelete, setuserIdToDelete] = useState("");
    const [updateForm, setUpdateForm] = useState(false);
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const error = useSelector((state) => state.errorReducer.userError);
    const dispatch = useDispatch();
    const [followingPopup, setFollowingPopup] = useState(false);
    const [followersPopup, setFollowersPopup] = useState(false);


    const handleUpdate = () => {
        dispatch(updateBio(userData._id, bio));
        setUpdateForm(false);
    };

    const handleDelete = () => {
        dispatch(deleteUser(userData._id, userIdToDelete));
        Location.reload()
    };


    return (
        <div className="profil-container">
            <LeftNav />
            <h1> Profil de {userData.pseudo}</h1>
            <div className="update-container">
                <div className="left-part">
                    <h3>Photo de profil</h3>
                    <img src={userData.picture} alt="user-pic" />
                    <Uploadimg />
                    <p>{error.maxSize}</p>
                    <p>{error.format}</p>
                </div>
                <div className="right-part">
                    <div className="bio-update">
                        <h3>Bio</h3>
                        {updateForm === false && (
                            <>
                                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                                <button onClick={() => setUpdateForm(!updateForm)}>
                                    Modifier la bio
                                </button>
                            </>
                        )}
                        {updateForm && (
                            <>
                                <textarea
                                    type="text"
                                    defaultValue={userData.bio}
                                    onChange={(e) => setBio(e.target.value)}
                                ></textarea>
                                <button onClick={handleUpdate}>Valider modifications</button>
                            </>
                        )}
                    </div>
                    <h4>Membre depuis le : {dateParser(userData.createdAt)}</h4>
                    <h5 onClick={() => setFollowingPopup(true)}>
                        Abonnements : {userData.following ? userData.following.length : ""}
                    </h5>
                    <h5 onClick={() => setFollowersPopup(true)}>
                        Abonnés : {userData.followers ? userData.followers.length : ""}
                    </h5>
                </div>
                <button onClick={() => {
                    window.location.reload()
                    if (window.confirm("Voulez-vous supprimer ce profil , la suppression est definitive ?")) {
                        window.location.reload()
                        handleDelete()
                    }

                }}>supprimer le compte</button>
            </div>
            {
                followingPopup && (
                    <div className="popup-profil-container">
                        <div className="modal">
                            <h3>Abonnements</h3>
                            <span className="cross" onClick={() => setFollowingPopup(false)}>
                                &#10005;
                            </span>
                            <ul>
                                {usersData.map((user) => {
                                    for (let i = 0; i < userData.following.length; i++) {
                                        if (user._id === userData.following[i]) {
                                            return (
                                                <li key={user._id}>
                                                    <img src={user.picture} alt="user-pic" />
                                                    <h4>{user.pseudo}</h4>
                                                    <div className="follow-handler">
                                                        <FollowHandler idToFollow={user._id} type={'suggestion'} />
                                                    </div>


                                                </li>
                                            );
                                        }
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }
            {
                followersPopup && (
                    <div className="popup-profil-container">
                        <div className="modal">
                            <h3>Abonnés</h3>
                            <span className="cross" onClick={() => setFollowersPopup(false)}>
                                &#10005;
                            </span>
                            <ul>
                                {usersData.map((user) => {
                                    for (let i = 0; i < userData.followers.length; i++) {
                                        if (user._id === userData.followers[i]) {
                                            return (
                                                <li key={user._id}>
                                                    <img src={user.picture} alt="user-pic" />
                                                    <h4>{user.pseudo}</h4>
                                                    <div className="follow-handler">
                                                        <FollowHandler idToFollow={user._id} type={'suggestion'} />
                                                    </div>
                                                </li>
                                            );
                                        }
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }
        </div >
    );
};

export default UpdateProfil;