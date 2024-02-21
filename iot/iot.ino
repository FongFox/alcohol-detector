#include <SoftwareSerial.h>

#define txPin 7
#define rxPin 6
#define sensorAnalog A0
// #define buzzerPin 5
// #define led 4

// String data;
SoftwareSerial Bluetooth(rxPin, txPin);
double sensorValue;
double normalValue = 0.7;
// double airValue = 0.6;
// int state = 0; // 0 => READY || 1 => READ

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Bluetooth.begin(9600);
  delay(1000);
  Serial.println("=================== SET UP !!! ====================");
  pinMode(rxPin, INPUT);
  pinMode(txPin, OUTPUT);
  pinMode(sensorAnalog, INPUT);
  Serial.println("================ [SENSOR] SET UP !!! ==============");
  delay(5000);
  Serial.println("============= SET UP COMPLETE !!! ============");
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("============ DETECTING !!! ==============");

  sensorValue = analogRead(sensorAnalog) / 1000.00;
  Serial.print("Sensor value: ");
  Serial.println(sensorValue);
  Serial.print("Status: ");
  if (sensorValue > normalValue) {
    Serial.println("DRUNK !!!");
  } else Serial.println("NORMAL !!!");

  // Serial.println("============ WAIT TO READ IF HAVE (IN 10S) !!! ==============");
  // delay(10000);
  // if (Bluetooth.available() > 0) {
  //   delay(5000);
  //   if (Bluetooth.read() == '1') {
  //     Serial.println("send data ...");
  //     Bluetooth.print(sensorValue);
  //     delay(1000);
  //     Serial.println("send data complete !!!");
  //   }
  // }

  Serial.println("============ SEND DATA !!! ==============");
  Bluetooth.print("send:");
  Bluetooth.println(sensorValue);
  // delay(10000);
  Serial.println("======= SEND DATA COMPLETE !!! ==========");
  
  delay(2000);
  Serial.println("========== REFRESH IN 5S !!! =============");
  delay(5000);
  Serial.println("============ REFRESH COMPLETE !!! =========");
}
