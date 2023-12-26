import React from "react";
import resume from "../../Resume/AryanshResume.pdf";
import "./ResumeModal.css";

const ResumeModal = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <div className="resumeModalBackdrop" onClick={close}>
      <div className="resumeModalContent" onClick={(e) => e.stopPropagation()}>
        <iframe
          className="resumeModalIframe"
          src={resume}
          title="Aryansh's Resume"
          frameBorder="0"
        />
        <button className="resumeModalClose" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
