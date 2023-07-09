const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        100% Edit
      </button>
      <button type="button" onClick={onClose}>
        xxx
      </button>
    </div>
  );
};

export default EditMaterialModal;
