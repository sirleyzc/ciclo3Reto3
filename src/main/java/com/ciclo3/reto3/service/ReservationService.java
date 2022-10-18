package com.ciclo3.reto3.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ciclo3.reto3.model.Reservation;
import com.ciclo3.reto3.model.custom.CountClient;
import com.ciclo3.reto3.model.custom.StatusAmount;
import com.ciclo3.reto3.repository.ReservationRepository;

@Service
public class ReservationService {
    
    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll() {
        return reservationRepository.getAll();
    }

    public Optional<Reservation> getReservation(int id) {
        return reservationRepository.getReservation(id);
    }

    public Reservation save(Reservation reservation) {
        if (reservation.getIdReservation() == null) {
            return reservationRepository.save(reservation);
        } else {
            Optional<Reservation> e = reservationRepository.getReservation(reservation.getIdReservation());
            if (e.isEmpty()) {
                return reservationRepository.save(reservation); 
            } else {
                return reservation;
            }
        }
    }

    public Reservation update(Reservation reservation) {
        if(reservation.getIdReservation() != null) {
            Optional<Reservation> e = reservationRepository.getReservation(reservation.getIdReservation());
             if (!e.isEmpty()) {
                if (reservation.getStartDate() != null) {
                    e.get().setStartDate(reservation.getStartDate());
                }
                if (reservation.getDevolutionDate() != null) {
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if (reservation.getStatus() != null) {
                    e.get().setStatus(reservation.getStatus());
                }
                return reservationRepository.save(e.get());
             }
        }
        return reservation;
    }

    public boolean deleteReservation(int id) {
        Boolean del = getReservation(id).map(reservation -> {
            reservationRepository.delete(reservation);
            return true;
        }).orElse(false);
        return del;
    }

    public List<CountClient> getTopClients() {
        return reservationRepository.getTopClients();
    }

    public StatusAmount getReservationStatusReport() {
        List<Reservation> completed = reservationRepository.getReservationByStatus("completed");
        List<Reservation> cancelled = reservationRepository.getReservationByStatus("cancelled");
        return new StatusAmount(completed.size(), cancelled.size());
    }

    public List<Reservation> getReservationPeriod(String dateA, String dateB) {
        SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd");
        Date a = new Date();
        Date b = new Date();
        try {
            a = parser.parse(dateA);
            b = parser.parse(dateB);
        } catch(ParseException e) {
            e.printStackTrace();            
        }
        if (a.before(b)) {
            return reservationRepository.getReservationPeriod(a, b);
        } else {
            return new ArrayList<>();
        }
    }
}
