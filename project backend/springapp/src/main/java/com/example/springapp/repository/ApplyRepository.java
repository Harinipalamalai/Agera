package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springapp.entity.ApplyEntity;

@Repository
public interface ApplyRepository extends JpaRepository<ApplyEntity, Long> {

    ApplyEntity findBydescription(String description);
    // You can add custom queries if needed
}
