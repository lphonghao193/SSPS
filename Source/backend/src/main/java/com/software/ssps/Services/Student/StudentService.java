package com.software.ssps.Services.Student;

import java.util.List;

import org.springframework.stereotype.Service;

import com.software.ssps.Entity.Student;

@Service
public class StudentService {
    public Student findById(String studentID, List<Student> studentList) {
        Student foundStudent = null;
        for (Student currentStudent : studentList) {
            if (currentStudent.getStudentID().equals(studentID)) {
                foundStudent = currentStudent;
                break;
            }
        }

        return foundStudent;
    }

}