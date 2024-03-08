rh._.exports({"0":[["n_srclrn"]],"1":[[" ","3    ","Managing Source ","Learning ","Transparent bridging relies on a process referred to as ","source learning"," to handle traffic flow. Network devices communicate by sending and receiving data packets that each contain a source MAC address and a destination MAC address. When packets are received on switch network interface (NI) module ports, source learning examines each packet and compares the source MAC address to entries in a ","MAC address database table. If the table does not contain an entry for the source address, then a new record is created associating the address with the port it was learned on. If an entry for the source address already exists in the table, a new one is not created.","Packets are also filtered to determine if the source and destination address are on the same LAN segment. If the destination address is not found in the MAC address table, then the packet is forwarded to all other switches that are connected to the same LAN. If the MAC address table does contain a matching entry for the destination address, then there is no need to forward the packet to the rest of the network.","In This Chapter","This chapter describes how to manage source learning entries in the switch MAC address table (often referred to as the ","forwarding"," or ","filtering"," ","database",") through the Command Line Interface (CLI). CLI commands are used in the configuration examples; for more details about the syntax of commands, see the ","OmniSwitch AOS Release 8 CLI Reference Guide",".","Configuration procedures described in this chapter include:","•    ","“Using Static MAC Addresses” on page 3-3",".","•    ","“Using Static Multicast MAC Addresses” on page 3-5",".","•    ","“Configuring MAC Address Table Aging Time” on page 3-7",".","•    ","“Configuring the Source Learning Status” on page 3-8",".","•    ","“Displaying Source Learning Information” on page 3-9",".","Source Learning ","Defaults ","Parameter Description","Command","Default","Static MAC address operating mode","mac-learning static mac-address","bridging","MAC address aging timer","mac-learning aging-time","300 seconds","MAC source learning status per port","mac-learning","enabled","MAC source learning mode","mac-learning mode","centralized","MAC Address Table Overview","Source learning builds and maintains the ","MAC address table on each switch. New MAC address table entries are created in one of two ways: they are dynamically learned or statically assigned. ","Dynamically learned MAC addresses are those that are obtained by the switch when source learning examines data packets and records the source address and the port and VLAN it was learned on. ","Static MAC addresses are user defined addresses that are statically assigned to a port and VLAN using the ","mac-learning static mac-address"," command. ","Accessing MAC Address Table entries is useful for managing traffic flow and troubleshooting network device connectivity problems. For example, if a workstation connected to the switch is unable to communicate with another workstation connected to the same switch, the MAC address table might show that one of these devices was learned on a port that belonged to a different VLAN or the source MAC address of one of the devices do not appear at all in the address table. ","Using Static MAC Addresses","Static MAC addresses are configured using the ","mac-learning static mac-address"," command. These addresses direct network traffic to a specific port and VLAN. They are particularly useful when dealing with silent network devices. These types of devices do not send packets, so their source MAC address is never learned and recorded in the MAC address table. Assigning a MAC address to the silent device’s port creates a record in the MAC address table and ensures that packets destined for the silent device are forwarded out that port.","When defining a static MAC address for a particular slot/port and VLAN, consider the following:","•    ","Configuring static MAC addresses is only supported on fixed ports.","•    ","The specified slot/port must already belong to the specified VLAN. Use the ","vlan members untagged"," command to assign a port to a VLAN before you configure the static MAC address.","•    ","Only traffic from other ports associated with the same VLAN is directed to the static MAC address slot/port. ","•    ","Static MAC addresses are ","permanent"," addresses. This means that a static MAC address remains in use even if the MAC ages out or the switch is rebooted.","•    ","There are two types of static MAC address behavior supported: ","bridging"," (default) or ","filtering",". Enter ","filtering"," to set up a denial of service to block potential hostile attacks. Traffic sent to or from a filtered MAC address is dropped. Enter ","bridging"," for regular traffic flow to or from the MAC address.","•    ","If a packet received on a port associated with the same VLAN contains a source address that matches a static MAC address, the packet is discarded. The same source address on different ports within the same VLAN is not supported. ","•    ","If a static MAC address is configured on a port link that is down or disabled, an asterisk appears to the right of the MAC address in the display output. The asterisk indicates that this is an invalid MAC address. When the port link comes up, however, the MAC address is then considered valid and the asterisk no longer appears next to the address in the display.","Configuring Static MAC Addresses","To configure a permanent, bridging static MAC address, see the example below:","-> mac-learning vlan 1 port 1/1 static mac-address 00:00:02:CE:10:37 bridging","Use the ","no"," form of this command to clear MAC address entries from the table:","-> no mac-learning vlan 1 port 1/1 static mac-address 00:00:02:CE:10:37 bridging","To verify static MAC address configuration and other table entries, use the ","show mac-learning"," command. For more information about this command, see the ","OmniSwitch AOS Release 8 CLI Reference Guide",".","Static MAC Addresses on Link Aggregate Ports","Static MAC Addresses are not assigned to physical ports that belong to a link aggregate. Instead, they are assigned to a link aggregate ID that represents a collection of physical ports. This ID is specified at the time the link aggregate of ports is created. ","To configure a static MAC address on a link aggregate ID 1 belong to VLAN 1 see the example below: ","-> mac-learning vlan 1 linkagg 1 static mac-address 00:00:02:CE:10:37 bridging","For more information about configuring a link aggregate of ports, see ","Chapter 9, “Configuring Static Link Aggregation”"," and ","Chapter 10, “Configuring Dynamic Link Aggregation.”","Using Static Multicast MAC Addresses","Using static multicast MAC addresses allows you to send traffic intended for a single destination multicast MAC address to selected switch ports within a given VLAN. To specify which ports receive the multicast traffic, a static multicast address is assigned to each selected port for a given VLAN. The ports associated with the multicast address are then identified as egress ports. When traffic received on ports within the same VLAN is destined for the multicast address, the traffic is forwarded only on the egress ports that are associated with the multicast address.","The ","mac-learning multicast mac-address"," command is used to configure a static multicast MAC address. When defining this type of static MAC address for a particular port and VLAN, consider the following:","•    ","A MAC address is considered a multicast MAC address if the least significant bit of the most significant octet of the address is enabled. For example, MAC addresses with a prefix of 01, 03, 05, 13, etc., are multicast MAC addresses. ","•    ","If a multicast prefix value is not present, then the address is treated as a regular MAC address and not allowed with the ","mac-learning vlan multicast mac-address ","command. ","•    ","The multicast addresses within the following ranges are not supported:","01:00:5E:00:00:00 to 01:00:5E:7F:FF:FF","01:80:C2:XX.XX.XX","33:33:XX:XX:XX:XX","•    ","In addition to configuring the same static multicast address for multiple ports within a given VLAN, it is also possible to use the same multicast address across multiple VLANs. ","•    ","The specified port or link aggregate ID must already belong to the specified VLAN. ","Configuring Static Multicast MAC Addresses","The ","mac-learning multicast mac-address"," command is used to define a destination multicast MAC address and assign the address to one or more egress ports within a specified VLAN. For example, the following command assigns the multicast address 01:25:9a:5c:2f:10 to port 1/24 in VLAN 20:","-> mac-learning vlan 20 port 1/1 multicast mac-address 01:25:9a:5c:2f:10","Use the ","no"," form of the ","mac-learning multicast mac-address"," command to delete static multicast MAC address entries:","-> no mac-learning vlan 20 port 1/1 multicast mac-address 01:25:9a:5c:2f:10","If a MAC address, slot/port and VLAN ID are not specified with this form of the command, then all static multicast addresses are deleted. For example, the following command deletes all static MAC addresses, regardless of their slot/port or VLAN assignments:","-> no mac-learning multicast","To verify the static MAC address configuration and other table entries, use the ","show mac-learning"," and ","show mac-learning"," commands. For more information about these commands, see the ","OmniSwitch AOS Release 8 CLI Reference Guide",".","Static Multicast MAC Addresses on Link Aggregate Ports","Static multicast MAC addresses are not assigned to physical ports that belong to a link aggregate. Instead, they are assigned to a link aggregate ID that represents a collection of physical ports. This ID is specified at the time the link aggregate of ports is created and when using the ","mac-address-table static-multicast ","command. ","To configure a static multicast MAC address on a link aggregate ID, use the ","mac-learning multicast mac-address"," command with the ","linkagg"," keyword to specify the link aggregate ID. For example, the following command assigns a static multicast MAC address to link aggregate ID 2 associated with VLAN 455:","-> mac-learning vlan 455 linkagg 2 multicast mac-address 01:95:2A:00:3E:4c","Configuring MAC Address Table Aging Time","Source learning also tracks ","MAC address age and removes addresses from the MAC address table that have aged beyond the aging timer value. When a device stops sending packets, source learning keeps track of how much time has passed since the last packet was received on the switch port of the device. When this amount of time exceeds the aging time value, the MAC is ","aged out"," of the MAC address table. Source learning always starts tracking MAC address age from the time since the last packet was received.","For example, the following sets the aging time for all VLANs to 1200 seconds (20 minutes):","-> mac-learning aging-time 1200","A MAC address learned on any VLAN port ages out when the time since a packet with the particular address was last seen on the port exceeds 1200 seconds.","Note.  ","An inactive MAC address can take up to twice as long as the aging time value specified to age out of the MAC address table. For example, if an aging time of 60 seconds is specified, the MAC ages out any time between 60 and 120 seconds of inactivity.","To set the aging time back to the default value, use the ","default ","parameter. For example, the following sets the aging time for all VLANs back to the default value:","-> mac-learning aging-time default","To display the aging time value use the ","show mac-learning aging-time"," command. For more information about this command, see the ","OmniSwitch AOS Release 8 CLI Reference Guide",".","Configuring the Source Learning Status","The source learning status for a port or link aggregate of ports is configurable using the ","mac-learning"," command. For example:","-> mac-learning port 1/10 disable","-> mac-learning port 1/15-20 disable","-> mac-learning linkagg 10 disable","To enable the source learning status for a port or link aggregate, use the ","source-learning"," command with the ","enable"," option. For example:","-> mac-learning port 1/10 enable","-> mac-learning port 1/15-20 enable","-> mac-learning linkagg 10 enable","Disabling source learning on a port or link aggregate is useful on a ring configuration, where a switch within the ring does not need to learn the MAC addresses that the same switch is forwarding to another switch within the ring,. This functionality is also useful in Transparent LAN Service configurations, where the service provider device does not need to learn the MAC addresses of the customer network.","Configuring the source learning status is not allowed on the following types of switch ports:","•    ","Ports enabled with Learned Port Security (LPS).","•    ","Ports enabled with Universal Network Profile (UNP) functionality.","•    ","Member ports of a link aggregate.","Consider the following guidelines when changing the source learning status for a port or link aggregate:","•    ","Disabling source learning on a link aggregate disables MAC address learning on all member ports of the link aggregate.","•    ","MAC addresses dynamically learned on a port or aggregate are cleared when source learning is disabled.","•    ","Statically configured MAC addresses are not cleared when source learning is disabled for the port or aggregate. In addition, configuring a new static MAC address is allowed even when source learning is disabled.","D","isplaying Source Learning Information","To display MAC Address Table entries, statistics, and aging time values, use the show commands listed below:","show mac-learning","Displays a list of all MAC addresses known to the MAC address table, including static and multicast MAC addresses. ","show mac-learning aging-time","Displays the current MAC address aging timer value by switch or VLAN.","For more information about the resulting displays from these commands, see the ","OmniSwitch AOS Release 8 CLI Reference Guide",". "]],"id":"6"})