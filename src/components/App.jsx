import Video from './Video';
import Layot from './Layot';
import GlobalStyle from './GlobalStyle';
import MaterialEditirForm from './MaterialEditirForm';
import * as API from '../services/api.js';
import { Component } from 'react';
import Example from './Player/Example';
import MaterialsList from './MaterialsList';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
      console.log(material);
    } catch (error) {
      this.setState({ error: true });
    }
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true });
    }
  }
  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(state => ({
        materials: state.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
    }
  };

  editMaterial = async fields => {
    try {
      const updateMaterials = await API.updateMaterial(fields);
      this.setState(state => ({
        materials: state.materials.map(material =>
          material.id === fields.id ? updateMaterials : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    const { isLoading, materials } = this.state;
    return (
      <>
        <MaterialEditirForm onSubmit={this.addMaterial} />
        {isLoading ? (
          <div>
            <Example />
          </div>
        ) : (
          <MaterialsList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.editMaterial}
          />
        )}

        <Video />
        <Layot>
          <GlobalStyle />
        </Layot>
      </>
    );
  }
}
