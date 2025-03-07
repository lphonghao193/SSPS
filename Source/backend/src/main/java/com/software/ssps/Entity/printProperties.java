package com.software.ssps.Entity;

import java.util.List;

public class printProperties {
    public enum pageType {
        A5,
        A4,
        A3,
        A2,
        A1,
    }

    pageType pageType;
    String printerID;
    String fileName;
    Boolean twoFace;
    Boolean color;
    List<Integer> pageToPrint;
    Integer numberOfCopy;

    public printProperties(com.software.ssps.Entity.printProperties.pageType pageType, String printerID,
            String fileName, Boolean twoFace, Boolean color, List<Integer> pageToPrint, Integer numberOfCopy) {
        this.pageType = pageType;
        this.printerID = printerID;
        this.fileName = fileName;
        this.twoFace = twoFace;
        this.color = color;
        this.pageToPrint = pageToPrint;
        this.numberOfCopy = numberOfCopy;
    }

    public pageType getPageType() {
        return pageType;
    }

    public void setPageType(pageType pageType) {
        this.pageType = pageType;
    }

    public String getPrinterID() {
        return printerID;
    }

    public void setPrinterID(String printerID) {
        this.printerID = printerID;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Boolean getTwoFace() {
        return twoFace;
    }

    public void setTwoFace(Boolean twoFace) {
        this.twoFace = twoFace;
    }

    public Boolean getColor() {
        return color;
    }

    public void setColor(Boolean color) {
        this.color = color;
    }

    public List<Integer> getPageToPrint() {
        return pageToPrint;
    }

    public void setPageToPrint(List<Integer> pageToPrint) {
        this.pageToPrint = pageToPrint;
    }

    public Integer getNumberOfCopy() {
        return numberOfCopy;
    }

    public void setNumberOfCopy(Integer numberOfCopy) {
        this.numberOfCopy = numberOfCopy;
    }

    @Override
    public String toString() {
        return "printProperties [pageType=" + pageType + ", printerID=" + printerID + ", fileName=" + fileName
                + ", twoFace=" + twoFace + ", color=" + color + ", pageToPrint=" + pageToPrint + ", numberOfCopy="
                + numberOfCopy + "]";
    }

}
