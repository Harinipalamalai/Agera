package com.example.springapp.dto;

public class UpdateStatusRequest {
    private Long id;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    private String action;
    public String getAction() {
        return action;
    }
    public void setAction(String action) {
        this.action = action;
    }

    // getters and setters

    // constructors (default and parameterized) if needed
}

