void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
pinMode(13,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
digitalWrite(13,HIGH);
Serial.println("Hello, world!");
delay(5);
digitalWrite(13,LOW);
delay(1000);
digitalWrite(13,HIGH);
Serial.println("test");
delay(5);
digitalWrite(13,LOW);
delay(1000);
}
