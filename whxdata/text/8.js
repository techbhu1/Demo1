rh._.exports({"0":[["c_about"]],"1":[[" ","About This Guide","This ","OmniSwitch AOS Release 8 CLI Reference Guide"," is a comprehensive resource to all Command Line Interface (CLI) commands available on the OmniSwitch.","Supported Platforms","The information in this guide applies only to the following products:","•    ","OmniSwitch 6360"," Series","•    ","OmniSwitch 6465"," Series","•    ","OmniSwitch 6560"," Series","•    ","OmniSwitch 6570M Series","•    ","OmniSwitch 6860"," Series","•    ","OmniSwitch 6865"," Series","•    ","OmniSwitch 6900"," Series","•    ","OmniSwitch 9900"," Series","Who Should Read this Manual?","The audience for this user guide is network administrators and IT support personnel who need to configure, maintain, and monitor switches and routers in a live network. Anyone wishing to gain knowledge on the details of all CLI commands available on the OmniSwitch will benefit from the material in this reference guide. However, advanced users who have already familiarized themselves with the OmniSwitch CLI commands will benefit most from the detailed content in this guide.","When Should I Read this Manual?","Read this guide whenever you want detailed information on individual CLI commands. Although this guide provides helpful information during any stage of the configuration process, it is a good idea to first familiarize yourself with the software features available on the switch before investigating the detailed command information in this guide. ","Overview information, procedures, and live network examples on switch software features can be found in the ","OmniSwitch AOS Release 8 Switch Management Guide",", ","OmniSwitch AOS Release 8 Network Configuration Guide",","," ","OmniSwitch AOS Release 8 Advanced Routing Configuration Guide",", and ","OmniSwitch AOS Release 8 Data Center Switching Guide",". Once you are familiar with the procedures and base CLI commands in these configuration guides you can obtain more detailed information on the individual commands in this guide.","What is in this Manual?","This reference guide includes information on every CLI command available in the switch. Command reference information is included for base software commands as well as commands associated with optional software packages, such as Advanced Routing (multicast routing protocols and OSPF). The information provided for each CLI command includes:","•    ","Command description.","•    ","Syntax.","•    ","Description of all keywords and variables included in the syntax.","•    ","Default values.","•    ","Usage guidelines, which include tips on when and how to use the command.","•    ","Examples of command lines using the command.","•    ","Related commands with descriptions.","•    ","Release history, which indicates the release when the command was introduced.","•    ","SNMP information, such as the MIB files related to a set of CLI commands. In addition each CLI command includes the corresponding MIB variables that map to all parameters included in a command.","What is Not in this Manual?","Primarily a reference, this guide does not provide step-by-step instructions on how to set up particular features on the switch. It also does not provide overview or application examples on software features. For comprehensive information on how to configure particular software features in the switch, consult the appropriate configuration guide.","This guide also does not provide any information on the network management applications, WebView and OmniVista. Further information on WebView and OmniVista can be found in the context-sensitive on-line help available with those applications.","How is the Information Organized?","Each chapter in this guide includes reference material for all commands related to a single software feature, such as server load balancing or link aggregation. Typically commands in a single chapter will share a common prefix.","Text Conventions","The following table contains text conventions and usage guidelines for CLI commands as they are documented in this guide",".","bold text","Indicates basic command and keyword syntax.","Example: ","show snmp station","italicized text","Indicates user-specific information such as IP addresses, slot numbers, passwords, names, etc.","Example: ","no snmp station ","ip_address","Italicized text that is not enclosed with straight brackets (","[ ]",")"," indicates required information.","[ ]"," (Straight Brackets)","Indicates optional parameters for a given command.","Example: ","show aaa server"," ","[","server_name","]","Here, you can enter either of the following options:","show aaa server","show aaa server ","server_name"," (where ","server_name"," is the user-specified server name, e.g., ","show aaa server myserver1",")","Note that this example includes"," italicized text",". The optional parameter in this case is a user-specified server name.","{ }"," (Curly Braces)","Indicates that the user must choose between one or more parameters.","Example: ","port mirroring {enable | disable}","Here, you must choose one of the following:","port mirroring enable ","or ","port mirroring disable","|"," (Vertical Pipes)","Used to separate parameter choices within a command string. For","example, the command string","show health threshold [rx | txrx | memory | cpu]","separates the choices ","rx",", ","txrx",", ","memory, ","and ","cpu",".","Examples:","show health threshold rx","show health threshold txrx","show health threshold memory","show health threshold cpu","“ ”"," (Quotation Marks)","Used to enclose text strings that contain spaces. The quotation marks are required input on the command line.","Example: ","vlan 2 “new test vlan”","Documentation Roadmap","The OmniSwitch user documentation suite was designed to supply you with information at several critical junctures of the configuration process.The following section outlines a roadmap of the manuals that will help you at each stage of the configuration process. Under each stage, we point you to the manual or manuals that will be most helpful to you.","Stage 1: Using the Switch for the First Time","Pertinent Documentation:"," ","OmniSwitch Hardware Users Guide","Release Notes","This guide provides all the information you need to get your switch up and running the first time. It provides information on unpacking the switch, rack mounting the switch, installing NI modules, unlocking access control, setting the switch’s IP address, and setting up a password. It also includes succinct overview information on fundamental aspects of the switch, such as hardware LEDs, the software directory structure, CLI conventions, and web-based management.","At this time you should also familiarize yourself with the Release Notes that accompanied your switch. This document includes important information on feature limitations that are not included in other user guides.","Stage 2: Gaining Familiarity with Basic Switch Functions","Pertinent Documentation:"," ","OmniSwitch Hardware Users Guide","OmniSwitch AOS Release 8 Switch Management Guide","Once you have your switch up and running, you will want to begin investigating basic aspects of its hardware and software. Information about switch hardware is provided in the ","OmniSwitch Hardware Users Guide",". This guide provide specifications, illustrations, and descriptions of all hardware components, such as chassis, power supplies, Chassis Management Modules (CMMs), Network Interface (NI) modules, and cooling fans. It also includes steps for common procedures, such as removing and installing switch components.","The ","OmniSwitch AOS Release 8 Switch Management Guide"," ","is the primary users guide for the basic software features on a single switch. This guide contains information on the switch directory structure, basic file and directory utilities, switch access security, SNMP, and web-based management. It is recommended that you read this guide before connecting your switch to the network.","Stage 3: Integrating the Switch Into a Network","Pertinent Documentation:"," ","OmniSwitch AOS Release 8 Network Configuration Guide","OmniSwitch AOS Release 8 Advanced Routing Configuration Guide","OmniSwitch AOS Release 8 Data Center Switching Guide","When you are ready to connect your switch to the network, you will need to learn how the OmniSwitch implements fundamental software features, such as 802.1Q, VLANs, Spanning Tree, and network routing protocols. The ","OmniSwitch AOS Release 8 Network Configuration Guide"," contains overview information, procedures, and examples on how standard networking technologies are configured on the OmniSwitch.","The ","OmniSwitch AOS Release 8 Advanced Routing Configuration Guide"," includes configuration information for networks using advanced routing technologies (OSPF and BGP) and multicast routing protocols (DVMRP and PIM-SM).","The ","OmniSwitch AOS Release 8 Data Center Switching Guide"," includes configuration information for data center networks using virtualization technologies, such as Data Center Bridging (DCB) protocols, Virtual eXtensible LAN (VxLAN), and Fibre Channel over Ethernet (FCoE) network convergence.","Anytime","The ","OmniSwitch AOS Release 8 CLI Reference Guide"," contains comprehensive information on all CLI commands supported by the switch. This guide includes syntax, default, usage, example, related CLI command, and CLI-to-MIB variable mapping information for all CLI commands supported by the switch. This guide can be consulted anytime during the configuration process to find detailed and specific information on each CLI command.","Related Documentation","The following are the titles and descriptions of all the related OmniSwitch user manuals:","•    ","OmniSwitch 6360, 6465, 6560, 6570M, 6860, 6865, 6900, 9900"," Hardware Users Guides","Describes the hardware and software procedures for getting an OmniSwitch up and running as well as complete technical specifications and procedures for all OmniSwitch chassis, power supplies, fans, and Network Interface (NI) modules.","•    ","OmniSwitch AOS Release 8 CLI Reference Guide","Complete reference to all CLI commands supported on the OmniSwitch. Includes syntax definitions, default values, examples, usage guidelines and CLI-to-MIB variable mappings.","•    ","OmniSwitch AOS Release 8 Switch Management Guide","Includes procedures for readying an individual switch for integration into a network. Topics include the software directory architecture, image rollback protections, authenticated switch access, managing switch files, system configuration, using SNMP, and using web management software (WebView).","•    ","OmniSwitch AOS Release 8 Network Configuration Guide","Includes network configuration procedures and descriptive information on all the major software features and protocols included in the base software package. Chapters cover Layer 2 information (Ethernet and VLAN configuration), Layer 3 information (routing protocols, such as RIP and IPX), security options (authenticated VLANs), Quality of Service (QoS), link aggregation, and server load balancing.","•    ","OmniSwitch AOS Release 8 Advanced Routing Configuration Guide","Includes network configuration procedures and descriptive information on all the software features and protocols included in the advanced routing software package. Chapters cover multicast routing (DVMRP and PIM-SM), Open Shortest Path First (OSPF), and Border Gateway Protocol (BGP).","•    ","OmniSwitch AOS Release 8 Data Center Switching Guide","Includes an introduction to the OmniSwitch data center switching architecture as well as network configuration procedures and descriptive information on all the software features and protocols that support this architecture. Chapters cover Data Center Bridging (DCB) protocols, Virtual Network Profile (vNP), VxLAN, and FCoE/FC transit and gateway functionality.","•    ","OmniSwitch AOS Release 8 Transceivers Guide","Includes SFP and XFP transceiver specifications and product compatibility information.","•    ","OmniSwitch AOS Release 8 Specifications Guide","Includes Specifications table information for the features documented in the Switch Management Guide, Network Configuration Guide, Advanced Routing Guide, and Data Center Switching Guide.","•    ","Technical Tips, Field Notices","Includes information published by Alcatel-Lucent Enterprise’s Customer Support group.","•    ","Release Notes","Includes critical Open Problem Reports, feature exceptions, and other important information on the features supported in the current release and any limitations to their support.","Technical Support","An Alcatel-Lucent Enterprise service agreement brings your company the assurance of 7x24 no-excuses technical support. You’ll also receive regular software updates to maintain and maximize your Alcatel-Lucent Enterprise product’s features and functionality and on-site hardware replacement through our global network of highly qualified service delivery partners. ","With 24-hour access to Alcatel-Lucent Enterprise’s Service and Support web page, you’ll be able to view and update any case (open or closed) that you have reported to Alcatel-Lucent Enterprise’s technical support, open a new case or access helpful release notes, technical bulletins, and manuals. ","Access additional information on Alcatel-Lucent Enterprise’s Service Programs:","Web: https://myportal.al-enterprise.com","Phone: 1-800-995-2696","Email: ebg_global_supportcenter@al-enterprise.com"]],"id":"8"})