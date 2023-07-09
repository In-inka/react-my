import { Component } from 'react';
import EditMaterialModal from './EditmaterialModal';

class MaterialsList extends Component {
  state = {
    isModal: false,
  };

  openModal = () => {
    this.setState({ isModal: true });
  };
  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { items, onDelete, onUpdate } = this.props;
    const { isModal } = this.state;
    return (
      <ol>
        {items.map(item => (
          <li key={item.id}>
            <p>
              <b>Link:</b> {item.title}
            </p>
            <p>
              <b>Url:</b> {item.link}
            </p>
            <button type="button" onClick={() => onDelete(item.id)}>
              Delete
            </button>
            <button type="button" onClick={this.openModal}>
              Edit
            </button>
            {isModal && (
              <EditMaterialModal
                onClose={this.closeModal}
                onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
              />
            )}
          </li>
        ))}
      </ol>
    );
  }
}

export default MaterialsList;
