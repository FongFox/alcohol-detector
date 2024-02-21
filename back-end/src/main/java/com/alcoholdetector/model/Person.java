package com.alcoholdetector.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "person")
@NoArgsConstructor
@Getter @Setter
@ToString
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "id_card", unique = true)
    private int idCard;
    @Column(name = "driver_license", unique = true)
    private int driverLicense;
    @Column(name = "full_name")
    private String fullName;

    @Column(name = "alcohol_value")
    private Double alcoholValue;
    @Column(name = "is_drunk")
    private Boolean isDrunk;

    public Person(int idCard, int driverLicense, String fullName) {
        this.idCard = idCard;
        this.driverLicense = driverLicense;
        this.fullName = fullName;
    }
}
