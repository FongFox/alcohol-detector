package com.alcoholdetector.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fazecast.jSerialComm.SerialPort;

@Configuration
public class GatewayConfiguration {
	@Value("${serial.port}")
	private String portName;
	@Value("${serial.baudRate}")
	private int baudRate;

    @Bean
    SerialPort openConnection() {
		SerialPort serialPort = SerialPort.getCommPort(portName);
		serialPort.setBaudRate(baudRate);

		// open connection
		int retryCount = 0;
		boolean connectionSuccessful = false;
		serialPort = SerialPort.getCommPort(portName);
		serialPort.setBaudRate(baudRate);
		while (!connectionSuccessful) {
			if (serialPort.openPort()) {
				System.out.println("Connection open successfully !!!");
				connectionSuccessful = true;
			} else {
				System.err.println("Failed to open the connection !!! Retrying..." + retryCount++);
				// Thời gian đợi giữa các lần thử lại (có thể điều chỉnh)
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}

		return serialPort;
	}
}
