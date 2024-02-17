package com.example.springapp.service;

import java.util.List;

import com.example.springapp.entity.ContactEntity;

public interface ContactService {

    ContactEntity saveContact(ContactEntity contactEntity);

    List<ContactEntity> getAllContacts();

}
