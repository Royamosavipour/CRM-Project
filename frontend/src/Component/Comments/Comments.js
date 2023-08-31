import React, { useEffect, useState } from "react";
import DeletModal from "../DeletModul/DeletModal";
import InfoModal from "../InfoMoudal/InfoModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import EditModal from "../EditModal/EditModal";
import "./Comments.css";

export default function Comments() {
  const [allComment, setAllComment] = useState([]);
  const [isShowInfoCommet, setIsShowInfoCommet] = useState(false);
  const [isShowDeleteCommet, setIsShowDeleteCommet] = useState(false);
  const [isShowEditCommet, setIsShowEditCommet] = useState(false);
  const [isShowAcceptComment, setIsShowAcceptComment] = useState(false);
  const [isShowRejectComment, setIsShowRejectComment] = useState(false);
  const [commentID, setCommentID] = useState(null);
  const [mainComment, setMainComment] = useState("");

  const closeRejectCommentModal = () => {
    setIsShowRejectComment(false);
  };
  const rejectCommentModal = () => {
    fetch(`http://localhost:8000/api/comments/reject/${commentID}`,{method:'POST'})
    .then(res=>res.json())
    .then(esult=>{
    setIsShowRejectComment(false);
    getAllComments()

    })


  };

  const closeAcceptModal = () => {
    setIsShowAcceptComment(false);
  };

  const acceptComment = () => {
    fetch(`http://localhost:8000/api/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowAcceptComment(false);
        getAllComments();
      });

    setIsShowAcceptComment(false);
  };

  const onHide = () => setIsShowInfoCommet(false);
  const closeDeletModal = () => setIsShowDeleteCommet(false);
  const closeEditMoudal = () => setIsShowEditCommet(false);

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setIsShowDeleteCommet(false);
        getAllComments();
      });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = () => {
    fetch("http://localhost:8000/api/comments/")
      .then((res) => res.json())
      .then((comment) => {
        setAllComment(comment);
      });
  };

  const submitEditComment = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: mainComment }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditCommet(false);
        getAllComments();
      });
  };

  return (
    <>
      {allComment.length ? (
        <div className="cms-main">
          <table className="cms-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Product</th>
                <th>Comment</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {allComment.map((comment) => (
                <tr>
                  <td>{comment.userID} </td>
                  <td>{comment.productID}</td>
                  <td>
                    <button
                      onClick={() => {
                        setMainComment(comment.body);
                        setIsShowInfoCommet(true);
                      }}
                    >
                      Show Comment
                    </button>
                  </td>
                  <td>{comment.date}</td>
                  <td>{comment.hour}</td>
                  <td>
                    <button
                      onClick={() => {
                        setIsShowDeleteCommet(true);
                        setCommentID(comment.id);
                      }}
                    >
                      Delet
                    </button>
                    <button
                      onClick={() => {
                        setIsShowEditCommet(true);
                        setMainComment(comment.body);
                        setCommentID(comment.id);
                      }}
                    >
                      Edit
                    </button>
                    <button>Reply</button>

                    {comment.isAccept === 0 ? (
                      <button
                        onClick={() => {
                          setIsShowAcceptComment(true);
                          setCommentID(comment.id);
                        }}
                      >
                        Accept
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setIsShowRejectComment(true);
                          setCommentID(comment.id);
                        }}
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorBox msg={"There is not comment"} />
      )}
      {isShowInfoCommet && (
        <InfoModal onHide={onHide}>
          <p className="text-moudal">{mainComment} </p>
          <div className="text-moudal">
            <button onClick={onHide}>Close</button>
          </div>
        </InfoModal>
      )}
      {isShowDeleteCommet && (
        <DeletModal
          closeModal={closeDeletModal}
          submitModal={deleteComment}
          title="Do you want delete comment?"
        />
      )}

      {isShowEditCommet && (
        <EditModal onClose={closeEditMoudal} onsubmit={submitEditComment}>
          <textarea
            value={mainComment}
            onChange={(e) => setMainComment(e.target.value)}
          ></textarea>
        </EditModal>
      )}
      {isShowAcceptComment && (
        <DeletModal
          closeModal={closeAcceptModal}
          submitModal={acceptComment}
          title="Do you want accept comment"
        />
      )}

      {isShowRejectComment && (
        <DeletModal
          closeModal={closeRejectCommentModal}
          submitModal={rejectCommentModal}
          title="Are you Sure for Reject Coment?"
        />
      )}
    </>
  );
}
