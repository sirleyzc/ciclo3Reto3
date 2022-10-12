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

    public Skate update(Skate skate) {
        if(skate.getId() != null) {
            Optional<Skate> e = skateRepository.getSkate(skate.getId());
             if (!e.isEmpty()) {
                if (skate.getName() != null) {
                    e.get().setName(skate.getName());
                }
                if (skate.getBrand() != null) {
                    e.get().setBrand(skate.getBrand());
                }
                if (skate.getYear() != null) {
                    e.get().setYear(skate.getYear());
                }
                if (skate.getDescription() != null) {
                    e.get().setDescription(skate.getDescription());
                }
                if (skate.getCategory() != null) {
                    e.get().setCategory(skate.getCategory());
                }
                return skateRepository.save(e.get());
             }
        }
        return skate;
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
    
    public boolean deleteSkate(int id) {
        Boolean del = getSkate(id).map(skate -> {
            skateRepository.delete(skate);
            return true;
        }).orElse(false);
        return del;
    }
}

