package com.example.springapp.service;

import org.springframework.stereotype.Service;

import com.example.springapp.entity.ContactEntity;
import com.example.springapp.repository.ContactRepository;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public ContactEntity saveContact(ContactEntity contactEntity) {
        // Add any business logic if needed
        return contactRepository.save(contactEntity);
    }

    @Override
    public List<ContactEntity> getAllContacts() {
        return contactRepository.findAll();
    }
}
