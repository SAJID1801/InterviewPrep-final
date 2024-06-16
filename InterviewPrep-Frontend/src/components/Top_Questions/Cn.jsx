import React from "react";

function Cn() {
  const bodytag = {
    padding: "10px 150px",
    margin: "9px 2px",
    lineHeight: "1.7",
  };
  const h3tag = {
    margin: "33px 2px 15px 2px",
    fontSize: "25px",
    fontWeight: "500",
  };
  return (
    <div style={bodytag}>
      {/* Q.1  */}
      <div>
        <h3 style={h3tag}>
          Q.1 What is a computer network and also explain it's purpose?
        </h3>
        <p>
          A Computer network is a collection of interconnected computing devices
          that can communicate and share resources with each other. These
          computer devices can include computers, severs, printers and other
          hardware components.
        </p>
        <p>
          <strong>Purpose - </strong>The primary purpose of computer network is
          to faciliate the exchange of data and information such as files,
          applications etc among users or devices within an organization or
          across the internet.
        </p>
      </div>

      {/* Q.2  */}
      <div>
        <h3 style={h3tag}>Q.2 What is Internet?</h3>
        <p>
          Internet is a global network that connects billions of computers
          across the world with each other. It uses standard internet protocol
          suite(TCP/IP) to connect billions of computers worldwide. It is setup
          by using cables such as "Optical Fibers" and other wireless and
          networking technologies.
        </p>
      </div>

      {/* Q.3  */}
      <div>
        <h3 style={h3tag}>Q.3 Classifications of Computer Network?</h3>
        <p>
          <b> 1) Based on transmission technology: </b>
        </p>
        <li>BroadCast</li>
        <li>Point-To-Point</li>

        <p>
          <b> 2) Based on Geographical distance: </b>
        </p>
        <li>LAN(Local Area Network)</li>
        <li>MAN(Metropolitan Area Network)</li>
        <li>WAN(Wide Area Network)</li>

        <p>
          <b> 3) Based on Architecture: </b>
        </p>
        <li>Client-Server</li>
        <li>Client-To-Client</li>

        <p>
          <b> 4) Based on Topology: </b>
        </p>
        <li>Mesh</li>
        <li>Bus</li>
        <li>Star</li>
        <li>Ring</li>
        <li>Tree</li>
      </div>

      {/* Q.4  */}
      <div>
        <h3 style={h3tag}>Q.4 Explain Networking Devices?</h3>
        <p>
          <strong>1) Router :</strong> A router is a networking device that
          forwards data packets between computer networks. Routers are used to
          connect networks of different sizes, such as local area networks
          (LANs) and wide area networks (WANs). In addition, Routers use special
          software to determine the best route for data packets to take when
          traveling between networks. Additionally, routers can also provide
          firewall protection and offer other features, such as network address
          translation (NAT), which allows multiple devices on the same network
          to use the same public IP address.{" "}
        </p>
        <p>
          <strong>2) Modem :</strong> A modem, which is short for
          “modulators-demodulators”, is a piece of network hardware that is used
          to convert digital signals into analog signals & vice-versa, in order
          to transmit them over telephone lines. When the signals arrive at the
          destination, another modem will convert the analog signals back to a
          digital format.
        </p>
        <p>
          <strong>3) Hub :</strong> Hubs are used to connect multiple network
          devices together. They can be used to transmit both digital and analog
          information. whenever a particular computer in the networks want's to
          send request to another computer, then it sends the request to hub and
          now hub broadcasts this request to entire network.
        </p>
        <p>
          <strong>4) Switch :</strong> Switches are used to connect multiple
          network devices together. It maintains an updated table which decides
          where to transmit data instead of broadcasting.
        </p>
        <p>
          <strong>5) Bridge :</strong> Bridge in computer network is a smart
          device that is used for creating one bigger network by connecting
          smaller subnetworks.
        </p>
        <p>
          <strong>6) Repeater :</strong> Repeaters are defined as a networking
          device that is used to amplify and generate the incoming signal.
          Repeaters work at the physical layer of the OSI model. The main aim of
          using a repeater is to increase the networking distance by increasing
          the strength and quality of signals.
        </p>
        <p>
          <strong>7) Gateway :</strong> The gateway converts information, data
          or other communications from one protocol or format to another.
        </p>
        <p>
          <strong>8) NIC :</strong> A network interface card (NIC) is a hardware
          component without which a computer cannot be connected over a network.
          It is a circuit board installed in a computer that provides a
          dedicated network connection to the computer. It is also called
          network interface controller, network adapter, or LAN adapter.
        </p>
      </div>

      {/* Q.5  */}
      <div>
        <h3 style={h3tag}>Q.5 What is VPN with it's Advantages?</h3>
        <p>
          A Virtual Private Network (VPN) is a private network connection, which
          permits users to send and receive data securely and anonymously by
          routing their traffic through a secure tunnel. Additionally, VPNs can
          also be used to access geo-restricted websites and services, provide
          an additional layer of security when using public Wi-Fi networks, and
          hide your online activity from your Internet Service Provider (ISP).
        </p>
        <p>
          <strong>Advantages: </strong>
        </p>
        <li>
          VPN is used to connect offices in different geographical locations
          remotely and is cheaper when compared to WAN connections.
        </li>
        <li>
          VPN is used for secure transactions and confidential data transfer
          between multiple offices located in different geographical locations.
        </li>
        <li>
          VPN keeps an organization’s information secured against any potential
          threats or intrusions by using virtualization.
        </li>
        <li>
          VPN encrypts the internet traffic and disguises the online identity.
        </li>
      </div>

      {/* Q.6  */}
      <div>
        <h3 style={h3tag}>Q.6 Explain IP and MAC addresses?</h3>
        <p>
          <strong> IP Address - </strong>An IP address is a unique address that
          is used to identify a device on the internet. Every Host and router on
          internet has an IP address, which encodes it's network number and host
          number.
        </p>
        <p>
          <strong> MAC Address - </strong>The MAC address designates the
          physical location of a device within a local network. MAC Addresses
          are unique 48-bit hardware numbers of a computer that are embedded
          into a network card (known as a Network Interface Card) during
          manufacturing. The MAC Address is also known as the Physical Address
          of a network device. To make communication between two networked
          devices, we need two addresses: IP address and MAC address.
        </p>
      </div>
      {/* Q.7  */}
      <div>
        <h3 style={h3tag}>Q.7 Why we need both IP and MAC addres?</h3>
        <p>
          We have the IP address to identify the device through different
          networks, we still need a MAC address to find the devices on the same
          network.
        </p>
      </div>

      {/* Q.8  */}
      <div>
        <h3 style={h3tag}>Q.8 What is Port Number?</h3>
        <p>
          A port number is the logical address of each application or process
          that uses a network or the Internet to communicate. A port number
          uniquely identifies a network-based application on a computer. Each
          application/program is allocated a 16-bit integer port number. This
          number is assigned automatically by the OS, manually by the user or is
          set as a default for some popular applications. Although an
          application can change its port number, some commonly used
          Internet/network services are allocated with global port numbers such
          as Port Number 80 for HTTP, 23 for Telnet and 25 for SMTP.
        </p>
      </div>

      {/* Q.9  */}
      <div>
        <h3 style={h3tag}>Q.9 What is an IPv4 & IPv6?</h3>
        <p>
          An IPv4 address is a 32-bit dynamic address of a node in the network.
          An IPv4 address has 4 octets of 8-bit each number with a value up to
          255.
        </p>
        <p>
          IPv6 uses 128-bit address. IPv6 is an alphanumeric address that
          consists of 8 fields and each field contains 2 octets, which are
          separated by colon. This means that IPv6 offers 1,028 times more
          addresses than IPv4, which essentially solves the “running out of
          addresses” problem (at least for the foreseeable future).
        </p>
      </div>

      {/* Q.10  */}
      <div>
        <h3 style={h3tag}>Q.10 Explain OSI Model?</h3>
        <p>The OSI model has seven layers.</p>
        <img
          height="600px"
          width="500px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/381/original/Layers_of_OSI_Model.png?1619607169"
          alt=""
        />
        <p>
          <strong>1) Physical Layer - </strong> Data in Bits. It is concerned
          with transmitting raw bits over a communication channel.Chooses which
          type of transmission mode is to be selected for the transmission. The
          available transmission modes are Simplex, Half Duplex and Full Duplex.
        </p>
        <p>
          <strong>2) DataLink Layer - </strong> Data in Frame. It ensures
          reliable transmission By providing framming, Error detection &
          correction features.
        </p>
        <p>
          <strong>3) Network Layer - </strong> Data in packets. It is
          responsible for logical addressing, routing and forwarding of data
          packets across different networks.{" "}
        </p>
        <p>
          <strong>4) Transport Layer - </strong> Data in segments. Segmentation
          done here and It also provides 'Flow Control' mechanism to manage data
          transmission between source & destination devices.
        </p>
        <p>
          <strong>5) Session Layer - </strong>Session layer establishes, manages
          and terminate the communication sessions between applications on
          different devices.{" "}
        </p>
        <p>
          <strong>6) Presentation Layer - </strong>It cares about 'syntax,
          symmetry & data structure'. It make sures that data is presenteed in
          correct format. encryption/decryption done here.
        </p>
        <p>
          <strong>7) Application Layer - </strong>It provides services and
          interface that allows applications to communicate with network. Common
          protocols are HTTP, SMTP, FTP, DNS.
        </p>
      </div>

      {/* Q.11  */}
      <div>
        <h3 style={h3tag}>Q.11 Describe the TCP/IP Reference Model.</h3>
        <img
          width="280px"
          height="300px"
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/TCP_Model_2.png"
          alt=""
        />
      </div>

      {/* Q.12  */}
      <div>
        <h3 style={h3tag}>Q.12 Explain HTTP and HTTPS protocols?</h3>
        <p>
          <b>HTTP - </b>Hyper text transfer protocol is used to access &
          transmit data on world wide web(www). It helps the web browsers and
          web servers for communication. HTTP is an application layer protocol
          built upon the TCP. It uses port 80 by default. It is an
          connectionless protocol.
        </p>
        <p>
          <b>HTTPS - </b>HTTPS is the HyperText Transfer Protocol Secure or
          Secure HTTP. It is an advanced and secured version of HTTP. On top of
          HTTP, SSL/TLS protocol is used to provide security. It enables secure
          transactions by encrypting the communication and also helps identify
          network servers securely. It uses port 443 by default.
        </p>
      </div>

      {/* Q.13  */}
      <div>
        <h3 style={h3tag}>Q.13 What is the SMTP protocol?</h3>
        <p>
          SMTP is the Simple Mail Transfer Protocol. SMTP sets the rule for
          communication between servers. This set of rules helps the software to
          transmit emails over the internet. It supports both End-to-End and
          Store-and-Forward methods. It is in always-listening mode on port 25.
        </p>
      </div>

      {/* Q.14  */}
      <div>
        <h3 style={h3tag}>Q.14 What is the DNS?</h3>
        <p>
          'Domain Name System' translates the domain names into their
          corresponding IP address & Vice Versa. It is a decentralized and
          hierarchical naming system for devices/services connected to the
          Internet. It uses port 53 by default.
        </p>
      </div>

      {/* Q.15  */}
      <div>
        <h3 style={h3tag}>Q.15 What is the TCP protocol?</h3>
        <p>
          TCP stands for Transmission Control Protocol which is an connection
          oriented protocol. It is a set of rules that decides how a computer
          connects to the Internet and how to transmit the data over the
          network. It creates a virtual network when more than one computer is
          connected to the network and uses the three ways handshake model to
          establish the connection which makes it more reliable
        </p>
      </div>

      {/* Q.16  */}
      <div>
        <h3 style={h3tag}>Q.16 What is the UDP protocol?</h3>
        <p>
          UDP is the User Datagram Protocol and is based on Datagrams. Mainly,
          it is used for multicasting and broadcasting. Its functionality is
          almost the same as TCP Protocol except for the three ways of
          handshaking and error checking. It uses a simple transmission without
          any hand-shaking which makes it less reliable.
        </p>
      </div>

      {/* Q.17  */}
      <div>
        <h3 style={h3tag}>Q.17 What is the ICMP protocol?</h3>
        <p>
          ICMP is the Internet Control Message Protocol. It is a network layer
          protocol used for error handling. It is mainly used by network devices
          like routers for diagnosing the network connection issues and crucial
          for error reporting and testing if the data is reaching the preferred
          destination in time. It uses port 7 by default.
        </p>
      </div>

      {/* Q.18  */}
      <div>
        <h3 style={h3tag}>Q.18 What is the DHCP protocol?</h3>
        <p>
          Dynamic Host Configuration Protocol (DHCP) is a client/server protocol
          that automatically provides an Internet Protocol (IP) host with its IP
          address and other related configuration information such as the subnet
          mask and default gateway.
        </p>
      </div>

      {/* Q.19  */}
      <div>
        <h3 style={h3tag}>Q.19 What is the ARP & RARP protocol?</h3>
        <p>
          <b>ARP - </b>ARP is Address Resolution Protocol. It is a network-level
          protocol used to convert the IP address to MAC address. ARP request is
          broadcast and response is unicast. ARP request is never generated for
          the device of other network.
        </p>
        <p>
          <b>RARP - </b>It does the reverse of ARP protocol.
        </p>
      </div>

      {/* Q.20  */}
      <div>
        <h3 style={h3tag}>Q.20 What is the NAT?</h3>
        <p>
          IP addresses are scarce(not enough). Suppose an ISP might give 65534
          host numbers, but if it has more customers than that, so there is
          problem.
        </p>
        <p>
          The basic idea behind 'Network Address Translation' is to assign each
          company a single IP addresses(few no. of them) for internet traffic
          and within the company we can use private IP addresses and allow these
          multiple devices to access the internet through a single public
          address.
        </p>
        <p>
          To achieve this translation of a 'private IP address' to 'public IP
          address' is required. And NAT is a process in which one or more
          private IP addresses is translated into one or more public IP
          addresses and vice versa.
        </p>
      </div>

      {/* Q.21  */}
      <div>
        <h3 style={h3tag}>Q.21 What is the FTP protocol?</h3>
        <p>
          FTP is a File Transfer Protocol. It is an application layer protocol
          used to transfer files and data reliably and efficiently between
          hosts. It can also be used to download files from remote servers to
          your computer. It uses port 27 by default.
        </p>
      </div>

      {/* Q.22  */}
      <div>
        <h3 style={h3tag}>Q.22 What is the subnet?</h3>
        <p>
          A subnet is a network inside a network achieved by the process called
          subnetting which helps divide a network into subnets. It is used for
          getting a higher routing efficiency and enhances the security of the
          network. It reduces the time to extract the host address from the
          routing table.
        </p>
        <img
          width="700px"
          height="260px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/387/original/Subnet.png?1619608848"
          alt=""
        />
      </div>

      {/* Q.23  */}
      <div>
        <h3 style={h3tag}>Q.23 What is Firewall?</h3>
        <p>
          The firewall is a network security system that is used to monitor the
          incoming and outgoing traffic and blocks the same based on the
          firewall security policies. It acts as a wall between the internet
          (public network) and the networking devices (a private network). It is
          either a hardware device, software program, or a combination of both.
          It adds a layer of security to the network.
        </p>
        <img
          width="700px"
          height="240px"
          src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/389/original/Firewall.png?1619609397"
          alt=""
        />
      </div>

      {/* Q.24  */}
      <div>
        <h3 style={h3tag}>Q.24 What is the Subnetting?</h3>
        <p>
          When a bigger network is divided into smaller networks, to maintain
          security, then that is known as Subnetting. So, maintenance is easier
          for smaller networks. For example, if we consider a class A address,
          the possible number of hosts is 2<sup>24</sup> for each network, it is
          obvious that it is difficult to maintain such a huge number of hosts,
          but it would be quite easier to maintain if we divide the network into
          small parts.
        </p>
      </div>

      {/* Q.25  */}
      <div>
        <h3 style={h3tag}>Q.25 What is port?</h3>
        <p>
          A port is a communication endpoint used in networks for sending and
          receiving data. It is a logical construct that acts as a portal for
          allowing communication to and from a computer.
        </p>
      </div>

      {/* Q.26  */}
      <div>
        <h3 style={h3tag}>Q.26 What is packet?</h3>
        <p>
          A packet is a unit of data sent over a network. It contains a header
          that includes source and destination addresses and other data, such as
          sequencing information and error-checking data.
        </p>
      </div>

      {/* Q.27  */}
      <div>
        <h3 style={h3tag}>Q.27 What is proxy server?</h3>
        <p>
          A proxy server is a system or router that provides a gateway between
          users and the internet. Therefore, it helps prevent cyber attackers
          from entering a private network. It is a server, referred to as an
          “intermediary” because it goes between end-users and the web pages
          they visit online.
        </p>
        <p>
          As a proxy server has its own IP address, it acts as a go-between for
          a computer and the internet. Your computer knows this address, and
          when you send a request on the internet, it is routed to the proxy,
          which then gets the response from the web server and forwards the data
          from the page to your computer’s browser, like Chrome, Safari,
          Firefox, or Microsoft Edge{" "}
        </p>
      </div>

      {/* Q.28  */}
      <div>
        <h3 style={h3tag}>Q.28 What is bandwidth?</h3>
        <p>
          Network bandwidth is the maximum rate at which data transfer occurs
          across any particular path of the network. Bandwidth is basically a
          measure of the amount of data that can be sent and received at any
          instance of time through the path.
        </p>
      </div>
    </div>
  );
}

export default Cn;
