import { connect } from 'react-redux'; 
import QuizForm from './quiz_form'
import { fetchQuestion} from '../../actions/quiz_actions'; 
import {updateQuizQuestion}  from '../../util/quiz_api_util';

 const mSTP = (state, ownProps) => ({
     user: state.session.user,
     functions: ["","","","","","","","","","",],
     question1: state.questions[1] || {},
     question2: state.questions[2] || {}, 
     question3: state.questions[3] || {},
     question4: state.questions[4] || {},
     question5: state.questions[5] || {},
     question6: state.questions[6] || {},
     question7: state.questions[7] || {},
     question8: state.questions[8] || {},
     question9: state.questions[9] || {},
     question10: state.questions[10] || {}

 })

 const mDTP = dispatch => ({
     fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)), 
     updateQuizQuestion: (choice, quizNum, questionId, age, Education, PoliticalLeaning, ReligiousAffilation, Gender, Ethnicity, PetChoice, location) => (updateQuizQuestion(choice, quizNum, questionId, age, Education, PoliticalLeaning, ReligiousAffilation, Gender, Ethnicity, PetChoice, location))
 })

 export default connect(mSTP, mDTP)(QuizForm); 