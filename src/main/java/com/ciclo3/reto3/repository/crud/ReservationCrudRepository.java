package com.ciclo3.reto3.repository.crud;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ciclo3.reto3.model.Reservation;

public interface ReservationCrudRepository extends CrudRepository <Reservation, Integer> {
    @Query("SELECT c.client, COUNT(c.client) FROM Reservation AS c group by c.client ORDER BY COUNT(c.client) DESC")
    public List<Object[]> countTotalReservationsByClient();
    public List<Reservation> findAllByStatus(String status);
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);
}
