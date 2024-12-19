# Alcohol Detector

An integrated system designed to detect alcohol levels using IoT devices, process data through a backend server, and present results via a mobile application.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Alcohol Detector project aims to provide a comprehensive solution for monitoring and detecting alcohol levels. It integrates hardware sensors, a backend server, and a mobile application to deliver real-time alcohol detection and alerts.

## Features

- **Real-time Alcohol Detection**: Utilizes sensors to detect alcohol levels accurately.
- **Data Processing**: Processes sensor data through a robust backend server.
- **Mobile Application**: Displays real-time results and alerts to users.
- **User Authentication**: Ensures secure access to the application.
- **Historical Data**: Stores and displays past alcohol level readings.

## Architecture

The system comprises three main components:

1. **IoT Device**: Equipped with alcohol sensors to detect and transmit data.
2. **Backend Server**: Handles data processing, storage, and user authentication.
3. **Mobile Application**: Provides an interface for users to view real-time and historical data.

## Technologies Used

- **IoT Device**: Arduino/C++
- **Backend**: Java (Spring Boot)
- **Mobile App**: Ionic Framework with Angular
- **Database**: MySQL
- **Communication**: HTTP/REST APIs

## Setup and Installation

### Prerequisites

- Node.js and npm
- Java Development Kit (JDK)
- MySQL Server
- Arduino IDE

### Backend Server

1. **Clone the repository**:
   ```bash
   git clone https://github.com/FongFox/alcohol-detector.git
   ```

2. **Navigate to the backend directory**:
   ```bash
   cd alcohol-detector/back-end
   ```

3. **Build the project**:
   ```bash
   ./mvnw clean install
   ```

4. **Run the server**:
   ```bash
   ./mvnw spring-boot:run
   ```

### Mobile Application

1. **Navigate to the mobile app directory**:
   ```bash
   cd alcohol-detector/ionic-ng-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   ionic serve
   ```

### IoT Device

1. **Open the Arduino IDE**.
2. **Load the sketch from `iot/alcohol_detector.ino`**.
3. **Upload the code to the Arduino device**.

## Usage

1. **Start the backend server**.
2. **Launch the mobile application**.
3. **Power on the IoT device**.
4. **Monitor real-time alcohol levels via the mobile app**.

## Contributing

Contributions are welcome! Please fork this repository and submit pull requests with improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This `README.md` provides a clear overview of your project, guiding users through setup, installation, and usage. 
