package com.software.ssps.Entity;

import java.time.LocalDate;
import com.software.ssps.Entity.paymentProperties.paymentStatus;

public class paymentHistory {

    paymentStatus paymentStatus;
    String paymentID;
    String StudentID;
    LocalDate paymentDate;
    Integer pageBought;
    Integer paymentAmount;
    String receipt; // Link to the receipt image
    String Note;

    public paymentHistory(com.software.ssps.Entity.paymentProperties.paymentStatus paymentStatus, String paymentID,
            String studentID, LocalDate paymentDate, Integer pageBought, Integer paymentAmount, String receipt,
            String note) {
        this.paymentStatus = paymentStatus;
        this.paymentID = paymentID;
        StudentID = studentID;
        this.paymentDate = paymentDate;
        this.pageBought = pageBought;
        this.paymentAmount = paymentAmount;
        this.receipt = receipt;
        Note = note;
    }

    public paymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(paymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getPaymentID() {
        return paymentID;
    }

    public void setPaymentID(String paymentID) {
        this.paymentID = paymentID;
    }

    public String getStudentID() {
        return StudentID;
    }

    public void setStudentID(String studentID) {
        StudentID = studentID;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }

    public Integer getPageBought() {
        return pageBought;
    }

    public void setPageBought(Integer pageBought) {
        this.pageBought = pageBought;
    }

    public Integer getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(Integer paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public String getReceipt() {
        return receipt;
    }

    public void setReceipt(String receipt) {
        this.receipt = receipt;
    }

    public String getNote() {
        return Note;
    }

    public void setNote(String note) {
        Note = note;
    }

    @Override
    public String toString() {
        return "paymentHistory [paymentStatus=" + paymentStatus + ", paymentID=" + paymentID + ", StudentID="
                + StudentID + ", paymentDate=" + paymentDate + ", pageBought=" + pageBought + ", paymentAmount="
                + paymentAmount + ", receipt=" + receipt + ", Note=" + Note + "]";
    }

}
