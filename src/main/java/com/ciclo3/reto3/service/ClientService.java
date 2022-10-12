package com.ciclo3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.reto3.model.Client;
import com.ciclo3.reto3.repository.ClientRepository;

@Service
public class ClientService {
    
    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAll() {
        return clientRepository.getAll();
    }

    public Optional<Client> getClient(int id) {
        return clientRepository.getClient(id);
    }

    public Client save(Client client) {
        if (client.getIdClient() == null) {
            return clientRepository.save(client);
        } else {
            Optional<Client> e = clientRepository.getClient(client.getIdClient());
            if (e.isEmpty()) {
                return clientRepository.save(client);
            } else {
                return client;
            }
        }
    }

    public Client update(Client client) {
        if(client.getIdClient() != null) {
            Optional<Client> e = clientRepository.getClient(client.getIdClient());
             if (!e.isEmpty()) {
                if (client.getEmail() != null) {
                    e.get().setEmail(client.getEmail());
                }
                if (client.getPassword() != null) {
                    e.get().setPassword(client.getPassword());
                }
                if (client.getName() != null) {
                    e.get().setName(client.getName());
                }
                if (client.getAge() != null) {
                    e.get().setAge(client.getAge());
                }
                return clientRepository.save(e.get());
             }
        }
        return client;
    }

    public boolean deleteClient(int id) {
        Boolean del = getClient(id).map(client -> {
            clientRepository.delete(client);
            return true;
        }).orElse(false);
        return del;
    }

}
