package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.springapp.entity.ApplyEntity;
import com.example.springapp.service.ApplyService;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/applies")
public class ApplyController {
    private final ApplyService applyService;

    public ApplyController(ApplyService applyService) {
        this.applyService = applyService;
    }

    @PostMapping("/add")
    public ResponseEntity<ApplyEntity> saveApply(@RequestBody ApplyEntity applyEntity) {
        ApplyEntity savedEntity = applyService.saveApply(applyEntity);
        return ResponseEntity.ok(savedEntity);
    }

    @GetMapping("/gety")
    public ResponseEntity<List<ApplyEntity>> getAllApplies() {
        List<ApplyEntity> applies = applyService.getAllApplies();
        return ResponseEntity.ok(applies);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteApply(@PathVariable Long id) {
        applyService.deleteApply(id);
        return ResponseEntity.noContent().build();
    }
}
