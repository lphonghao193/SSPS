package com.software.ssps.Entity;

import java.time.LocalDate;

public class printHistory {
    public enum PrintStatus {
        CANCELLED,
        COMPLETED,
        PRINTING;
    }

    PrintStatus PrintStatus;
    String printID;
    String StudentID;
    String fileName;
    LocalDate printDate;
    String Note;

    public printHistory(com.software.ssps.Entity.printHistory.PrintStatus printStatus, String printID, String studentID,
            String fileName, LocalDate printDate, String note) {
        PrintStatus = printStatus;
        this.printID = printID;
        StudentID = studentID;
        this.fileName = fileName;
        this.printDate = printDate;
        Note = note;
    }

    public PrintStatus getPrintStatus() {
        return PrintStatus;
    }

    public void setPrintStatus(PrintStatus printStatus) {
        PrintStatus = printStatus;
    }

    public String getPrintID() {
        return printID;
    }

    public void setPrintID(String printID) {
        this.printID = printID;
    }

    public String getStudentID() {
        return StudentID;
    }

    public void setStudentID(String studentID) {
        StudentID = studentID;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public LocalDate getPrintDate() {
        return printDate;
    }

    public void setPrintDate(LocalDate printDate) {
        this.printDate = printDate;
    }

    public String getNote() {
        return Note;
    }

    public void setNote(String note) {
        Note = note;
    }

    @Override
    public String toString() {
        return "printHistory [PrintStatus=" + PrintStatus + ", printID=" + printID + ", StudentID=" + StudentID
                + ", fileName=" + fileName + ", printDate=" + printDate + ", Note=" + Note + "]";
    }

}
