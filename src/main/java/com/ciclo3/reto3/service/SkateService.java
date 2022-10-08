package com.ciclo3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.reto3.model.Skate;
import com.ciclo3.reto3.repository.SkateRepository;



@Service
public class SkateService {

    @Autowired
    private SkateRepository skateRepository;

    public List<Skate> getAll() {
        return skateRepository.getAll();
    }

    public Optional<Skate> getSkate(int id) {
        return skateRepository.getSkate(id);
    }

    public Skate save(Skate skate) {
        if (skate.getId() == null) {
            return skateRepository.save(skate);
        } else {
            Optional<Skate> e= skateRepository.getSkate(skate.getId());
            if (e.isEmpty()) {
                return skateRepository.save(skate);
            } else {
                return skate;
            }
        }
    }       
}

