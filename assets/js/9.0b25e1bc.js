(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{211:function(e,t,a){e.exports=a.p+"assets/img/breadboard.334058f7.png"},261:function(e,t,a){"use strict";a.r(t);var r=a(2),s=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"terminology"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#terminology","aria-hidden":"true"}},[e._v("#")]),e._v(" Terminology")]),e._v(" "),r("h4",{attrs:{id:"circuit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#circuit","aria-hidden":"true"}},[e._v("#")]),e._v(" Circuit")]),e._v(" "),r("p",[e._v("Your circuit is the collection of all the connections you’ve made, using wires, resistors, LEDs, buttons, GPIO and other pins, etc.")]),e._v(" "),r("p",[e._v("It can be closed (like when you press a button, and a signal is able to traverse from one end to the other), or it can be open (a button is not pressed, or there’s some other break in the circuit).")]),e._v(" "),r("p",[e._v("An open circuit is like a long train of dominos, where you've removed 4 or 5 from the middle. You can try sending a signal from one end, but it's never going to bridge the gap.")]),e._v(" "),r("h4",{attrs:{id:"firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware","aria-hidden":"true"}},[e._v("#")]),e._v(" Firmware")]),e._v(" "),r("p",[e._v("A set of programs and routines that are built into the device running them. They are typically essential for the basic operation of the device and are not usually accessible by the user.")]),e._v(" "),r("h4",{attrs:{id:"serial"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serial","aria-hidden":"true"}},[e._v("#")]),e._v(" Serial")]),e._v(" "),r("p",[e._v("Data sent over time, most often one single bit after another. All the protocols are serial protocols.")]),e._v(" "),r("h4",{attrs:{id:"bus"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bus","aria-hidden":"true"}},[e._v("#")]),e._v(" Bus")]),e._v(" "),r("p",[e._v("A set of wires which transfer data. One wire can carry one bit: a 0 (low voltage) or 1 (high voltage). A bus is just a collection of wires, so a 4-bit bus has four wires and can carry four bits.")]),e._v(" "),r("h4",{attrs:{id:"relay"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#relay","aria-hidden":"true"}},[e._v("#")]),e._v(" Relay")]),e._v(" "),r("p",[e._v("It's an electronic switch. Instead of manually flipping it, it's done via a 5V signal. It can be open (NO) or closed (NC) by default, so the signal would od the opposite. Ex. Arduino sends a signal to the relay to close the circuit for turning on a lamp.")]),e._v(" "),r("h4",{attrs:{id:"abbreviations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#abbreviations","aria-hidden":"true"}},[e._v("#")]),e._v(" Abbreviations")]),e._v(" "),r("p",[r("strong",[e._v("Baud")]),e._v(" - Measure for communication speed over a data channel. Equivalent to bits per second.")]),e._v(" "),r("p",[r("strong",[e._v("VIN")]),e._v(" - Voltage that is currently supplied to the board.")]),e._v(" "),r("p",[r("strong",[e._v("VCC")]),e._v(" - Input pin on the board if you want to power it from a pin instead of a port.")]),e._v(" "),r("p",[r("strong",[e._v("COM")]),e._v(" - Common connection for relay or transistor outputs. When the output is activated, the PLC will energize the relay or transistor, effectively connecting the NO (normally open) pin to the COM (common) pin.."),r("br"),e._v(" "),r("strong",[e._v("NO")]),e._v(" - Normally open relay."),r("br"),e._v(" "),r("strong",[e._v("NC")]),e._v(" - Normally closed relay.")]),e._v(" "),r("h4",{attrs:{id:"pwm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm","aria-hidden":"true"}},[e._v("#")]),e._v(" PWM")]),e._v(" "),r("p",[e._v("Pulse Width Modulation, or PWM, is a technique for getting analog results with digital means. Digital control is used to create a square wave, a signal switched between on and off. This on-off pattern can simulate voltages in between full on (5 Volts) and off (0 Volts) by changing the portion of the time the signal spends on versus the time that the signal spends off.")]),e._v(" "),r("h1",{attrs:{id:"gpio-general-purpose-input-output"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gpio-general-purpose-input-output","aria-hidden":"true"}},[e._v("#")]),e._v(" GPIO - General Purpose Input Output")]),e._v(" "),r("p",[e._v("Used to interact with the real world.")]),e._v(" "),r("p",[e._v('Each GPIO pin has two states. You can call them on or off, high or low, 1 or 0, etc. A pin is set "high" when it\'s outputting 3.3v or reading in 3.3v, and "low" when it\'s off.')]),e._v(" "),r("p",[e._v("Output pins are like switches that the Raspberry Pi can turn on or off (like turning on/off a LED light). But it can also send a signal to another device.")]),e._v(" "),r("p",[e._v("Input pins are like switches that you can turn on or off from the outside world (like a on/off light switch). But it can also be a data from a sensor, or a signal from another device.")]),e._v(" "),r("h2",{attrs:{id:"floating"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#floating","aria-hidden":"true"}},[e._v("#")]),e._v(" Floating")]),e._v(" "),r("p",[e._v("The pins receive surrounding noise from other electronic devices, which interferes with the regular signals. This is called a "),r("strong",[e._v("floating pin")]),e._v(".")]),e._v(" "),r("p",[e._v("This also happens with with other modules such as a switch on a breadboard.")]),e._v(" "),r("p",[e._v("To prevent this, we need to use a "),r("strong",[e._v("pull-up resistor")]),e._v(" i.e. pull the pin up to a voltage when nothing happens (switch is off)")]),e._v(" "),r("p",[e._v("Micro-controllers have built-in pull-up resistors.")]),e._v(" "),r("h3",{attrs:{id:"pull-down"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-down","aria-hidden":"true"}},[e._v("#")]),e._v(" Pull Down")]),e._v(" "),r("p",[e._v("When you have a circuit that connects 3.3v to a GPIO pin, it'll read HIGH when the circuit is closed. When it's open, it could read anything. You need a \"pull down\" resistor connecting your circuit to ground, so that it reads LOW when the circuit is open. (I'll show this in effect later.)")]),e._v(" "),r("h3",{attrs:{id:"pull-up"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-up","aria-hidden":"true"}},[e._v("#")]),e._v(" Pull Up")]),e._v(" "),r("p",[e._v("Similarly, if you have a circuit connecting your GPIO pin to ground when it's closed, it'll read LOW. You need a \"pull up\" resistor so that, when it's open, it defaults to the HIGH state.")]),e._v(" "),r("h1",{attrs:{id:"communication-protocols"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#communication-protocols","aria-hidden":"true"}},[e._v("#")]),e._v(" Communication Protocols")]),e._v(" "),r("p",[r("strong",[e._v("I2C")]),e._v(" - Easiest and most expandable bus. Raspberry has two I2C buses, bus 0 and bus 1. Capable of expanding the Rpi to thousands of output ports. Programming is very easy.")]),e._v(" "),r("p",[r("strong",[e._v("SPI")]),e._v(" - Only 2 chip select lines so max number of devices is very limited. Bus is faster and can be driven over longer cable runs than I2C. Programming more difficult. Device selection very limited unless you are willing to solder SMD.")]),e._v(" "),r("p",[r("strong",[e._v("UART (RS-232)")]),e._v(" - Welcome to the 1970s. Lever shifters are a must. No intelligence at all. Pretty boring stuff actually.")]),e._v(" "),r("h2",{attrs:{id:"i2c-inter-integrated-circuit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#i2c-inter-integrated-circuit","aria-hidden":"true"}},[e._v("#")]),e._v(" I2C - Inter-Integrated Circuit")]),e._v(" "),r("p",[e._v("It's a bus that allows easy communication between components which reside on the same circuit board.")]),e._v(" "),r("p",[e._v("It's a synchronous protocol, and it's the first we see which has some \"intelligence\" in it; the other ones dumbly shifted bits in and out, and that was that.")]),e._v(" "),r("p",[e._v("I2C uses only 2 wires, one for the clock (SCL) and one for the data (SDA). That means that master and slave send data over the same wire, again controlled by the master who creates the clock signal.")]),e._v(" "),r("p",[e._v("I2C doesn't use separate Slave Selects to select a particular device, but has addressing. The first byte sent by the master holds a 7 bit address (so that you can use 127 devices on the bus) and a read/write bit, indicating whether the next byte(s) will also come from the master or should come from the slave.")]),e._v(" "),r("p",[e._v('After each byte, the receiver must send a "0" to acknowledge the reception of the byte, which the master latches with a 9th clock pulse.')]),e._v(" "),r("p",[e._v("If the master wants to write a byte, the same process repeats: the master puts bit after bit on the bus and each time gives a clock pulse to signal that the data is ready to be read.")]),e._v(" "),r("p",[e._v("If the master wants to receive data it only generates the clock pulses. The slave has to take care that the next bit is ready when the clock pulse is given.")]),e._v(" "),r("p",[e._v("This protocol is patented by NXP (formerly Phillips), to save licensing cost, Atmel using the word TWI (2-wire interface) which exactly same as I2C, so any AVR device will not have I2C but it will have TWI.")]),e._v(" "),r("p",[e._v('Two or more signals on the same wire may cause conflicts, and you would have a problem if one device sends a "1" while the other sends a "0". Therefore the bus is wired-OR\'d: two resistors pull the bus to a high level, and the devices only send low levels. If they want to send a high level they simply release the bus.')]),e._v(" "),r("ul",[r("li",[e._v("SDA - Serial data")]),e._v(" "),r("li",[e._v("SCL - Serial clock")])]),e._v(" "),r("h2",{attrs:{id:"spi-serial-peripheral-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spi-serial-peripheral-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" SPI - Serial Peripheral Interface")]),e._v(" "),r("p",[e._v("The SPI bus is a serial communication protocol for controlling and communicating with almost any digital electronic device that accepts a clocked serial stream of bits. SPI is typically used for short distance communication and most commonly found in embedded devices.")]),e._v(" "),r("p",[e._v("A master sends a clock signal, and upon each clock pulse it shifts one bit out to the slave, and one bit in, coming from the slave. Signal names are therefore SCK for clock, MOSI for Master Out Slave In, and MISO for Master In Slave Out.")]),e._v(" "),r("p",[e._v("By using SS (Slave Select) signals the master can control more than one slave on the bus. There are two ways to connect multiple slave devices to one master, one is mentioned above i.e. using slave select, and other is daisy chaining, it uses fewer hardware pins (select lines), but software gets complicated.")]),e._v(" "),r("ul",[r("li",[e._v("MISO - Master Input, Slave Output")]),e._v(" "),r("li",[e._v("MOSI - Master Output, Slave Input")]),e._v(" "),r("li",[e._v("SCLK - Serial Clock")]),e._v(" "),r("li",[e._v("SS - Slave Select")])]),e._v(" "),r("h2",{attrs:{id:"uart-universal-asynchronous-receiver-transmitter-serial"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uart-universal-asynchronous-receiver-transmitter-serial","aria-hidden":"true"}},[e._v("#")]),e._v(" UART - Universal asynchronous receiver-transmitter (Serial)")]),e._v(" "),r("p",[e._v("A computer microchip used for translation between parallel and serial data.")]),e._v(" "),r("p",[e._v("The UART functions to convert parallel data from PC bus lines to serial data for transmission via line drivers to RS-232, RS-422, and RS-485 devices.")]),e._v(" "),r("p",[e._v("UART is responsible for sending and receiving a sequence of bits. At the output of a UART these bits are usually represented by logic level voltages. These bits can become RS-232, RS-422, RS-485, or perhaps some proprietary spec.")]),e._v(" "),r("p",[e._v('This is, essentially, a serial communications interface. The "universal" part means that it can be configured to support many different specific serial protocols. The term is generic, and does not represent a specific standard. At minimum it means that it has a TX and an RX line, which sends a serial data stream and receives a serial data stream.')]),e._v(" "),r("p",[e._v("It's one of the most used serial protocols. Most controllers have a hardware UART on board. It uses a single data line for transmitting and one for receiving data.")]),e._v(" "),r("p",[e._v("Most often 8-bit data is transferred, as follows: 1 start bit (low level), 8 data bits and 1 stop bit (high level). The low level start bit and high level stop bit mean that there's always a high to low transition to start the communication. That's what describes UART. No voltage level, so you can have it at 3.3 V or 5 V, whichever your microcontroller uses.")]),e._v(" "),r("p",[e._v("Note that the microcontrollers which want to communicate via UART have to agree on the transmission speed, the bit-rate, as they only have the start bits falling edge to synchronize. That's called asynchronous communication.")]),e._v(" "),r("ul",[r("li",[e._v("TxD - Transmitter, carries data from DTE to DCE.")]),e._v(" "),r("li",[e._v("RxD - Receiver, carries data from DCE to DTE.")])]),e._v(" "),r("p",[r("strong",[e._v("TTL")]),e._v(" (Transistor Transistor Logic) is not a protocol. It's an older technology for digital logic, but the name is often used to refer to the 5 V supply voltage, often incorrectly referring to what should be called UART.")]),e._v(" "),r("h3",{attrs:{id:"rs-232"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rs-232","aria-hidden":"true"}},[e._v("#")]),e._v(" RS-232")]),e._v(" "),r("p",[e._v("A standard defining the signals (serial communication transmission of data) between two devices, defining the signal names, their purpose, voltage levels, connectors and pinouts.")]),e._v(" "),r("ul",[r("li",[e._v("DTE (data terminal equipment) ex. computer terminal.")]),e._v(" "),r("li",[e._v("DCE (data communication equipment) ex. modem.")])]),e._v(" "),r("h1",{attrs:{id:"breadboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breadboard","aria-hidden":"true"}},[e._v("#")]),e._v(" Breadboard")]),e._v(" "),r("p",[e._v("Red - Power"),r("br"),e._v("\nBlue - Ground"),r("br"),e._v("\nGreen - Tie-points (Do not cross the trench)"),r("br"),e._v("\nTrench - Middle")]),e._v(" "),r("p",[r("img",{attrs:{src:a(211),alt:"TEA"}})]),e._v(" "),r("h1",{attrs:{id:"components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#components","aria-hidden":"true"}},[e._v("#")]),e._v(" Components")]),e._v(" "),r("h4",{attrs:{id:"resistor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resistor","aria-hidden":"true"}},[e._v("#")]),e._v(" Resistor")]),e._v(" "),r("h4",{attrs:{id:"capacitor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#capacitor","aria-hidden":"true"}},[e._v("#")]),e._v(" Capacitor")]),e._v(" "),r("h4",{attrs:{id:"diode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#diode","aria-hidden":"true"}},[e._v("#")]),e._v(" Diode")]),e._v(" "),r("h4",{attrs:{id:"transistor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transistor","aria-hidden":"true"}},[e._v("#")]),e._v(" Transistor")])])},[],!1,null,null,null);t.default=s.exports}}]);