package com.software.ssps.Entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {
    String studentName;
    @Id
    String studentID;
    String username;
    String password;
    String studentEmail;
    String studentAddress;
    String avatar;
    Integer pageNumber;
    List<String> uploadedFiles;

    public Student(String studentName, String studentID, String username, String password, String studentEmail,
            String studentAddress, String avatar, Integer pageNumber, List<String> uploadedFiles) {
        this.studentName = studentName;
        this.studentID = studentID;
        this.username = username;
        this.password = password;
        this.studentEmail = studentEmail;
        this.studentAddress = studentAddress;
        this.avatar = avatar;
        this.pageNumber = pageNumber;
        this.uploadedFiles = uploadedFiles;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }

    public String getStudentAddress() {
        return studentAddress;
    }

    public void setStudentAddress(String studentAddress) {
        this.studentAddress = studentAddress;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
    }

    public List<String> getUploadedFiles() {
        return uploadedFiles;
    }

    public void setUploadedFiles(List<String> uploadedFiles) {
        this.uploadedFiles = uploadedFiles;
    }

    @Override
    public String toString() {
        return "Student [studentName=" + studentName + ", studentID=" + studentID + ", username=" + username
                + ", password=" + password + ", studentEmail=" + studentEmail + ", studentAddress=" + studentAddress
                + ", avatar=" + avatar + ", pageNumber=" + pageNumber + ", uploadedFiles=" + uploadedFiles + "]";
    }

}
