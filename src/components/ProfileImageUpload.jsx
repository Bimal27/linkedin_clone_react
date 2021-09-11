import { Modal, Button, Col } from "react-bootstrap";
import { useState, useRef } from "react";
import { AiOutlineCamera } from "react-icons/ai";

const ProfileImageUpload = (props) => {
  const [lgShow, setLgShow] = useState(false);

const input = useRef()
const fileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("profile", file);
      console.log(formData)
      const userId = '6135e3407be6c10015f9dba5';
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU"       }
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        //alert('successfully updated')
        // props.fetch()
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Col
        className="flex-column mb-0 modal-edit col-3 d-flex second-svg align-items-center justify-content-center"
        onClick={() => setLgShow(true)}
      >
        <AiOutlineCamera className="mb-1 ml-1 mt-1" size="1x" />
        <span className="mb-0 text-white footer-span ml-1">Add Photo</span>
      </Col>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            className="profile-edit-title"
          >
            Change Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="upload-body modal-body-profile mb-5">
          <span className="d-flex justify-content-center text-dark mb-4 upload-body-span">
            {props.profile.name}, Keep your profile fresh!
          </span>
          <div className='d-flex justify-content-center'>
            <img
              src={props.profile.image}
              alt="#"
              className="profile-pic-upload rounded-circle img-fluid"
              onClick={() => setLgShow(true)}
            />
          </div>
          <span className="d-flex justify-content-center mt-3 modal-body-span">
            Take or upload a photo. Then crop, filter and adjust it to
            perfection.
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button className="footer-button">Use Camera</Button>
          {/*<input type="file"></input>*/}
          <input ref={input} hidden type="file" accept='image/png' onChange={fileUpload}></input>
          <Button onClick={() => {
          input.current.click();
        }}>Upload Photo</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileImageUpload;