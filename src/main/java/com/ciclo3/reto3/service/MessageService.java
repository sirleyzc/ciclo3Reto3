package com.ciclo3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.reto3.model.Message;
import com.ciclo3.reto3.repository.MessageRepository;

@Service
public class MessageService {
    
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll() {
        return messageRepository.getAll();
    }    

    public Optional<Message> getMessage(int id) {
        return messageRepository.getMessage(id);
    }

    public Message save(Message message) {
        if (message.getIdMessage() == null) {
            return messageRepository.save(message);
        } else {
            Optional<Message> e = messageRepository.getMessage(message.getIdMessage());
            if (e.isEmpty()) {
                return messageRepository.save(message);
            } else {
                return message;
            }
        }
    }

    public Message update(Message message) {
        if(message.getIdMessage() != null) {
            Optional<Message> e = messageRepository.getMessage(message.getIdMessage());
             if (!e.isEmpty()) {
                if (message.getMessageText() != null) {
                    e.get().setMessageText(message.getMessageText());
                }
                return messageRepository.save(e.get());
             }
        }
        return message;
    }

    public boolean deleteMessage(int id) {
        Boolean del = getMessage(id).map(message -> {
            messageRepository.delete(message);
            return true;
        }).orElse(false);
        return del;
    }
}
