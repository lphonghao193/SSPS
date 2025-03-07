package com.software.ssps.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Staff {
    @Id
    String id;
    String name;
    String username;
    String password;
    String email;
    String address;
    String avatar;
    String role;

    public Staff(String id, String name, String username, String password, String email,
            String address, String avatar, String role) {
        this.name = name;
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.address = address;
        this.avatar = avatar;
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String Name) {
        this.name = Name;
    }

    public String getID() {
        return id;
    }

    public void setID(String ID) {
        this.id = ID;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String Email) {
        this.email = Email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String Address) {
        this.address = Address;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return " Staff [Name=" + name + ", ID=" + id + ", username=" + username
                + ", password=" + password + ", Email=" + email + ", Address=" + address
                + ", avatar=" + avatar + ", role=" + role + "]";
    }

}