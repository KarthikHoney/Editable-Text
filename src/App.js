import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {inputContent: '', buttonText: 'Save', status: false}

  changeInputField = event => {
    this.setState({inputContent: event.target.value})
  }

  clickSaveButton = () => {
    this.setState({buttonText: 'Edit', status: true})
  }

  clickEditButton = () => {
    this.setState({buttonText: 'Save', status: false})
  }

  render() {
    const {buttonText, inputContent, status} = this.state
    return (
      <div className="EditableContainer">
        <div className="containerBox">
          <h1 className="editHead">Editable Text Input</h1>
          <div className="inputAndButton">
            {!status && (
              <>
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
              </>
            )}
            {status && (
              <>
                <p className="input">{inputContent}</p>
                <button
                  type="button"
                  className="button"
                  onClick={this.clickEditButton}
                >
                  {buttonText}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
