package com.software.ssps.Entity;

import jakarta.persistence.Entity;
import java.util.Date;
import jakarta.persistence.Id;

@Entity
public class SystemSetting {

    @Id
    private String id;
    private int pageNumber;
    private Date dateAdded;
    private boolean pdf;
    private boolean docx;
    private boolean doc;
    private boolean png;    
    private boolean iepg;
    private boolean jpg;
    private boolean text;

    // Constructors
    public SystemSetting() {
    }

    public SystemSetting(String id, int pageNumber, Date dateAdded, boolean pdf, boolean docx, boolean doc, boolean png,
            boolean iepg, boolean jpg, boolean text) {
        this.id = id;
        this.pageNumber = pageNumber;
        this.dateAdded = dateAdded;
        this.pdf = pdf;
        this.docx = docx;
        this.doc = doc;
        this.png = png;
        this.iepg = iepg;
        this.jpg = jpg;
        this.text = text;
    }

    // Getters and Setters

    public String getID() {
        return id;
    }

    public void setID(String id) {
        this.id = id;
    }

    public int getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public Date getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(Date dateAdded) {
        this.dateAdded = dateAdded;
    }

    public boolean getPdf() {
        return pdf;
    }

    public void setPdf(boolean pdf) {
        this.pdf = pdf;
    }

    public boolean getDocx() {
        return docx;
    }

    public void setDocx(boolean docx) {
        this.docx = docx;
    }

    public boolean getDoc() {
        return doc;
    }

    public void setDoc(boolean doc) {
        this.doc = doc;
    }

    public boolean getPng() {
        return png;
    }

    public void setPng(boolean png) {
        this.png = png;
    }

    public boolean getIepg() {
        return iepg;
    }

    public void setIepg(boolean iepg) {
        this.iepg = iepg;
    }

    public boolean getJpg() {
        return jpg;
    }

    public void setJpg(boolean jpg) {
        this.jpg = jpg;
    }

    public boolean getText() {
        return text;

    }

    public void setText(boolean text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "SystemSetting[ pageNumber=" + pageNumber + ", dateAdded=" + dateAdded + ", pdf=" + pdf + ", docx="
                + docx + ", doc=" + doc + ", png=" + png + ", iepg=" + iepg + ", jpg=" + jpg + ", text=" + text + ']';
    }
}