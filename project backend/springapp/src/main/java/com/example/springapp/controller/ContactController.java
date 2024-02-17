package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.entity.ContactEntity;
import com.example.springapp.service.ContactService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/contacts")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/add")
    public ResponseEntity<ContactEntity> saveContact(@RequestBody ContactEntity contactEntity) {
        ContactEntity savedEntity = contactService.saveContact(contactEntity);
        return ResponseEntity.ok(savedEntity);
    }

    @GetMapping("/gety")
    public ResponseEntity<List<ContactEntity>> getAllContacts() {
        List<ContactEntity> contacts = contactService.getAllContacts();
        return ResponseEntity.ok(contacts);
    }
}
