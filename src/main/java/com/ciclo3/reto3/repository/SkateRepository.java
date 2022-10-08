package com.ciclo3.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ciclo3.reto3.model.Skate;
import com.ciclo3.reto3.repository.crud.SkateCrudRepository;

@Repository
public class SkateRepository {
    @Autowired
    private SkateCrudRepository skateCrudRepository;

    public List<Skate> getAll() {
        return (List<Skate>) skateCrudRepository.findAll();
    }

    public Optional<Skate> getSkate(int id) {
        return skateCrudRepository.findById(id);
    }

    public Skate save(Skate skate) {
        return skateCrudRepository.save(skate);
    }
}
