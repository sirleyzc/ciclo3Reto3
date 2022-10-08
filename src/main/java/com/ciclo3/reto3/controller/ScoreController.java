package com.ciclo3.reto3.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ciclo3.reto3.model.Score;
import com.ciclo3.reto3.service.ScoreService;

@RestController
public class ScoreController {

    @Autowired
    private ScoreService scoreService;
    
    public List<Score> getAll(){
        return scoreService.getAll();
    }

    public Optional<Score> getSScore(@PathVariable("id") int id) {
        return scoreService.getScore(id);
    }

    public Score save(@RequestBody Score score) {
        return scoreService.save(score);
    }

}
