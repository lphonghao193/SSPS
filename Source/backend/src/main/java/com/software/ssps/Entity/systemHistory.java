package com.software.ssps.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class systemHistory {
    @Id
    String timeStamp;
    String ID; // the person make the change
    String action; // the change
    String detail; // detail of the change

    public systemHistory(String ID, String action, String detail) {
        this.timeStamp = LocalDateTime.now().toString();
        this.ID = ID;
        this.action = action;
        this.detail = detail;
    }

    @Override
    public String toString() {
        return timeStamp + "_Admin: " + ID + "_" + action + "_" + detail;
    }

}