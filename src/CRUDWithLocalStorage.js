import React from 'react';

class CRUDWithLocalStorage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem('userData')) || [],
      name: '',
      gender: '',
      editingIndex: null
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAdd = () => {
    const { name, gender, data, editingIndex } = this.state;
    if (editingIndex !== null) {
      const newData = [...data];
      newData[editingIndex] = { name, gender };
      localStorage.setItem('userData', JSON.stringify(newData));
      this.setState({ data: newData, name: '', gender: '', editingIndex: null });
    } else {
      const newData = [...data, { name, gender }];
      localStorage.setItem('userData', JSON.stringify(newData));
      this.setState({ data: newData, name: '', gender: '' });
    }
  };

  handleEdit = (index) => {
    const itemToEdit = this.state.data[index];
    this.setState({ name: itemToEdit.name, gender: itemToEdit.gender, editingIndex: index });
  };

  handleDelete = (index) => {
    const newData = this.state.data.filter((_, i) => i !== index);
    localStorage.setItem('userData', JSON.stringify(newData));
    this.setState({ data: newData });
  };

  render() {
    return (
      <>
      <h1>CRUD With Local Storage</h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Name"
        /><br/>
        <input
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
          placeholder="Enter Gender"
        /><br/>
        <button onClick={this.handleAdd}>{this.state.editingIndex !== null ? 'Update' : 'Add'}</button>
        
        <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black' }}>Name</th>
              <th style={{ border: '1px solid black' }}>Gender</th>
              <th style={{ border: '1px solid black' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black' }}>{item.name}</td>
                <td style={{ border: '1px solid black' }}>{item.gender}</td>
                <td style={{ border: '1px solid black' }}>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default CRUDWithLocalStorage;