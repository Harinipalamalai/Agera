package com.example.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.entity.RegistrationFormEntity;

@Repository
public interface RegistrationFormRepository extends JpaRepository<RegistrationFormEntity, Long> {

    RegistrationFormEntity findByFullName(String fullName);
    // You can add custom queries if needed
    List<RegistrationFormEntity> findByStatus(String status);

}
