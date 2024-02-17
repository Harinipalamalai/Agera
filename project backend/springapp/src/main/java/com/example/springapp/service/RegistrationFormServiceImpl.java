package com.example.springapp.service;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.RegistrationFormEntity;
import com.example.springapp.repository.RegistrationFormRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationFormServiceImpl implements RegistrationFormService {

    private final RegistrationFormRepository registrationFormRepository;

    // @Autowired
    public RegistrationFormServiceImpl(RegistrationFormRepository registrationFormRepository) {
        this.registrationFormRepository = registrationFormRepository;
    }

    @Override
    public RegistrationFormEntity saveRegistrationForm(RegistrationFormEntity registrationFormEntity) {
        // Add any business logic if needed
        return registrationFormRepository.save(registrationFormEntity);
    }

    @Override
    public List<RegistrationFormEntity> getAllRegistrationForms() {
        return registrationFormRepository.findAll();
    }
    
    @Override
    public RegistrationFormEntity updateRegistrationFormById(Long id, RegistrationFormEntity updatedEntity) {
        Optional<RegistrationFormEntity> optionalEntity = registrationFormRepository.findById(id);

        if (optionalEntity.isPresent()) {
            RegistrationFormEntity existingEntity = optionalEntity.get();

            
            existingEntity.setEmail(updatedEntity.getEmail());
            existingEntity.setLoanName(updatedEntity.getLoanName());
            existingEntity.setPhoneNumber(updatedEntity.getPhoneNumber());
            existingEntity.setBirthDate(updatedEntity.getBirthDate());
            existingEntity.setGender(updatedEntity.getGender());
            existingEntity.setStreetAddress(updatedEntity.getStreetAddress());
            existingEntity.setAadhaarNumber(updatedEntity.getAadhaarNumber());
            existingEntity.setPanNumber(updatedEntity.getPanNumber());
            existingEntity.setApplicantSalary(updatedEntity.getApplicantSalary());
            existingEntity.setLoanAmountRequired(updatedEntity.getLoanAmountRequired());
           
            return registrationFormRepository.save(existingEntity);
        }

        return null; // Handle the case where the entity with the given ID is not found
    }

    @Override
    public void deleteRegistrationFormById(Long id) {
        registrationFormRepository.deleteById(id);
    }
    @Override
public RegistrationFormEntity updateStatus(Long id, String action) {
    Optional<RegistrationFormEntity> optionalEntity = registrationFormRepository.findById(id);

    if (optionalEntity.isPresent()) {
        RegistrationFormEntity existingEntity = optionalEntity.get();

        // Update status based on the action parameter
        // You can customize this based on your business logic
        if ("approve".equalsIgnoreCase(action)) {
            existingEntity.setStatus("APPROVED");
        } else if ("reject".equalsIgnoreCase(action)) {
            existingEntity.setStatus("REJECTED");
        }

        return registrationFormRepository.save(existingEntity);
    }

    return null; // Handle the case where the entity with the given ID is not found
}
@Override
public List<RegistrationFormEntity> getApprovedRegistrationForms() {
    // Assuming 'APPROVED' is the status for approved forms
    return registrationFormRepository.findByStatus("APPROVED");
}
    
    // Add other service methods as needed
}
