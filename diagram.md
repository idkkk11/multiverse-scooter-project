```mermaid
classDiagram

    class ScooterApp {
        +stations: array~object~
        +registeredUsers: object 
        +registerUser(username: string, password: string, age: number): void
        +loginUser(username: string, password: string): void
        +logoutUser(username: string): void
        +createScooter(station: string): void
        +rentScooter(scooter: Scooter): void
        +dockScooter(scooter: Scooter, station: string): void
        +print(): void
    }
    class Scooter {
        <<static>> nextSerial: number
        +station: string
        +user: string | null
        +charge: number
        +isBroken: boolean
        +serial: number
        +rent(user: string): void
        +dock(station: string): void
    }

    class User {
        +username: string
        +password: string 
        +age: number
        +login(username: string, password: string): void
        +logout(): void
    }

    %% Define Relationships
    ScooterApp "1" --> "*" Scooter : manages
    ScooterApp "1" --> "*" User : registers