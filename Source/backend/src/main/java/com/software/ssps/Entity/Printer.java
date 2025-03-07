package com.software.ssps.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Printer {

    @Id
    private String printerID;
    private String brand;
    private String location;
    private String status;

    // Default constructor
    public Printer() {
    }

    // Parameterized constructor
    public Printer(String printerID, String brand, String location, String status) {
        this.printerID = printerID;
        this.brand = brand;
        this.location = location;
        this.status = status;
    }

    // Getters and Setters
    public String getPrinterID() {
        return printerID;
    }

    public void setPrinterID(String printerID) {
        this.printerID = printerID;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return " [Printer ID=" + printerID + ", Brand=" + brand + ", Location=" + location
                + ", Status=" + status + "]";
    }

}