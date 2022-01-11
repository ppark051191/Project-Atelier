import React from 'react';
import AddQuestionForm from './AddQuestionForm.jsx';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      isAddButtonShown: true,
      productId: this.props.productId
    };
    this.clickOnAddQuestion = this.clickOnAddQuestion.bind(this);
    this.closeForm = this.closeForm.bind(this);

  }

  clickOnAddQuestion() {
    this.setState({
      isModalShown: true,
      isAddButtonShown: false
    });
  }

  closeForm() {
    console.log('close form is triggered');
    this.setState({
      isModalShown: false,
      isAddButtonShown: true
    });
  }


  render() {
    let modal,
      questionButton;
    if (this.state.isModalShown) {
      modal = <div><AddQuestionForm
        name={this.props.name}
        productId={this.props.productId}
        addQuestion={this.props.addQuestion}
        closeForm={this.closeForm}
      /></div>;
    } else {
      modal = <div></div>;
    }
    if (this.state.isAddButtonShown) {
      questionButton = <button onClick={()=>this.clickOnAddQuestion()}>Add a new question</button>;
    } else {
      questionButton = <div></div>;
    }
    return (
      <div className='add-question-parent'>
        {questionButton}
        {modal}
      </div>
    );
  }
}

export default AddQuestion;