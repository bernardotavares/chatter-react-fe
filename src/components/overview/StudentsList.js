import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudents } from '../../actions/students';

export class StudentsList extends Component {
    static propTypes = {
        students: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getStudents();
    }

    render() {
        return (
            <div>
                <h3 className="mt-3">Students List</h3>
                <Fragment>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Email</th>
                                <th>Course</th>
                                <th>Remaining Credits</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.student}</td>
                                    <td>{student.student_email}</td>
                                    <td>{student.course}</td>
                                    <td>{student.remaining_credits}</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </Fragment>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    students: state.students.students
});

export default connect(mapStateToProps, { getStudents })(StudentsList);