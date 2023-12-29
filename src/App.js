import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {inputContent: '', buttonText: 'Save'}

  changeInputField = event => {
    this.setState({inputContent: event.target.value})
  }

  clickSaveButton = () => {
    this.setState({buttonText: 'Edit'})
  }

  render() {
    const {buttonText, inputContent} = this.state
    return (
      <div className="EditableContainer">
        <div className="containerBox">
          <h1 className="editHead">Editable Text Input</h1>
          <div className="inputAndButton">
            <input
              type="text"
              value={inputContent}
              className="input"
              placeholder="Enter the Text"
              onChange={this.changeInputField}
            />
            <button
              type="button"
              className="button"
              onClick={this.clickSaveButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
