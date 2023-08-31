import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import DeletModaul from "../DeletModul/DeletModal";
import EditModal from "../EditModal/EditModal";
import InfoModal from "../InfoMoudal/InfoModal";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isShowDeletModul, setIsShowDeletModul] = useState(false);
  const [mainUserID, setMainUserID] = useState(null);
  const [isShowEditMoudal, setIsShowEditMoudal] = useState(false);
  const [isShowInfoMoudal, setIsShowInfoMoudal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [newFirsname, setnewFirsname] = useState("");
  const [newlastname, setnewlastname] = useState("");
  const [newUsername, setnewUsername] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [newphone, setnewphone] = useState("");
  const [newcity, setnewcity] = useState("");
  const [newemail, setnewemail] = useState("");
  const [newaddress, setnewaddress] = useState("");
  const [newScore, setnewScore] = useState("");
  const [newBuy, setnewBuy] = useState("");

  const onHideModulInfo = () => {
    setIsShowInfoMoudal(false);
  };

  const onClose = () => {
    setIsShowEditMoudal(false);
  };

  const onsubmit = (event) => {
    const newUser = {
      firsname: newFirsname,
      lastname: newlastname,
      username: newUsername,
      password: newpassword,
      phone: newphone,
      city: newcity,
      email: newemail,
      address: newaddress,
      score: newScore,
      buy: newBuy,
    };

    fetch(`http://localhost:8000/api/users/${mainUserID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((result) => {
        event.preventDefault();

        setIsShowEditMoudal(false);
        alluser();
      });
  };

  const alluser = () => {
    fetch(`http://localhost:8000/api/users/`)
      .then((res) => res.json())
      .then((user) => setUsers(user));
  };

  const closeModal = () => {
    setIsShowDeletModul(false);
  };
  const submitModal = () => {
    console.log(mainUserID);
    fetch(`http://localhost:8000/api/users/${mainUserID}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowDeletModul(false);
        alluser();
      });
  };

  useEffect(() => {
    alluser();
  }, []);

  return (
    <>
      {users.length ? (
        <div className="cms-main">
          <h1>List Users</h1>
          {users.map((user) => (
            <table key={user.id} className="cms-table">
              <thead>
                <tr>
                  <th>Name & Family</th>
                  <th>UserName</th>
                  <th>Password</th>
                  <th>Telephon</th>
                  <th>Email Addres</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {user.firsname}-{user.lastname}
                  </td>
                  <td>{user.username} </td>
                  <td>{user.password} </td>
                  <td>{user.phone}</td>
                  <td>{user.email} </td>
                  <td>
                    <button
                      onClick={() => {
                        setIsShowDeletModul(true);
                        setMainUserID(user.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setUserInfo(user)
                        setIsShowInfoMoudal(true);
                      }}
                    >
                      Details
                    </button>
                    <button
                      onClick={() => {
                        setIsShowEditMoudal(true);
                        setMainUserID(user.id);
                        setnewFirsname(user.firsname);
                        setnewlastname(user.lastname);
                        setnewUsername(user.username);
                        setnewpassword(user.password);
                        setnewphone(user.phone);
                        setnewcity(user.city);
                        setnewemail(user.email);
                        setnewaddress(user.address);
                        setnewScore(user.score);
                        setnewBuy(user.buy);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ) : (
        <ErrorBox msg="is not Massage" />
      )}
      {isShowDeletModul && (
        <DeletModaul
          closeModal={closeModal}
          submitModal={submitModal}
          title="Do you want delete user?"
        />
      )}

      {isShowEditMoudal && (
        <EditModal onClose={onClose} onsubmit={onsubmit}>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newFirsname}
              onChange={(e) => setnewFirsname(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newlastname}
              onChange={(e) => setnewlastname(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newUsername}
              onChange={(e) => setnewUsername(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newpassword}
              onChange={(e) => setnewpassword(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newphone}
              onChange={(e) => setnewphone(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newcity}
              onChange={(e) => setnewcity(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newemail}
              onChange={(e) => setnewemail(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <textarea
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newaddress}
              onChange={(e) => setnewaddress(e.target.value)}
            ></textarea>
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newScore}
              onChange={(e) => setnewScore(e.target.value)}
            />
          </div>
          <div className="edit-product-form-group">
            <input
              className="edit-prodact-input"
              type="text"
              placeholder="Enter new titel"
              value={newBuy}
              onChange={(e) => setnewBuy(e.target.value)}
            />
          </div>
        </EditModal>
      )}

      {isShowInfoMoudal && (
        <InfoModal onHide={onHideModulInfo}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>city</th>
                <th>Addres</th>
                <th>Score</th>
                <th>buy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userInfo.city}</td>
                <td>{userInfo.address}</td>
                <td>{userInfo.score}</td>
                <td>{userInfo.buy.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </InfoModal>
      )}
    </>
  );
}
