import React from "react";

function OS() {
  const bodytag = {
    padding: "10px 150px",
    margin: "9px 2px",
  };
  const p_li = {
    lineHeight: "1.7",
  };
  const h3tag = {
    margin: "33px 2px 15px 2px",
    fontSize: "25px",
    fontWeight: "500",
  };
  const imgtag = {
    margin: "40px",
  };
  return (
    <div style={bodytag}>
      <div>
        {/* Q.1  */}
        <div>
          <h3 style={h3tag}>
            Q.1 What is Operating System? What are its basic functions? why It
            is Important?
          </h3>
          <p style={p_li}>
            An Operating System is the program that acts as an intermediary
            between computer user and computer hardware. And also manages and
            handles all resources of a computer such as hardware and software.
            The first OS was introduced in the early 1950s known as GMOs. An OS
            is responsible for managing, handling, and coordinating overall
            activities and sharing of computer resources.
          </p>
          <p style={p_li}>
            <strong>Functions of OS: </strong>
          </p>
          <p style={p_li}>
            There are many functions of the OS. Some of the important functions
            of OS are given below:
          </p>
          <li style={p_li}>Memory and Processor Management</li>
          <li style={p_li}>Providing user interface to users</li>
          <li style={p_li}>File Management and Device Management</li>
          <li style={p_li}>Scheduling of resources and jobs</li>
          <li style={p_li}>Error Detection</li>
          <li style={p_li}>Security</li>
          <p style={p_li}>
            <strong>Importance of OS:</strong>
          </p>
          <p style={p_li}>
            OS is the most essential and vital part of a computer without which
            it is considered useless. It enables an interface or acts like a
            link for interaction between computer software that is installed on
            OS and users. It also helps to communicate with hardware and also
            maintains balance among hardware and CPU. It also provides services
            to users and a platform for programs to run on. It performs all
            common tasks applications require.
          </p>
        </div>

        {/* Q.2  */}
        <div>
          <h3 style={h3tag}>Q.2 Program vs Process vs Thread</h3>
          <li style={p_li}>
            <strong>Program:</strong>
          </li>
          <p style={p_li}>
            A program is a set of instructions written in a programming language
            that performs a specific task or set of tasks. It is typically
            stored in a file on disk and represents an executable entity.
            Programs can be compiled or interpreted
          </p>
          <li style={p_li}>
            <strong>Process:</strong>
          </li>
          <p style={p_li}>
            A process is an instance of a program in execution. When a program
            is loaded into memory and executed, it becomes a process. A process
            is an independent entity with its own memory space, resources, and
            execution context. It has its own program counter, stack, and
            variables. Processes are managed by the operating system, and each
            process runs in its own protected memory space. Processes can be
            concurrent and communicate with each other through inter-process
            communication mechanisms.
          </p>
          <li style={p_li}>
            <strong>Thread:</strong>
          </li>
          <p style={p_li}>
            A thread is a unit of execution within a process. It represents a
            sequence of instructions that can be scheduled and executed
            independently. Threads share the same memory space and resources
            within a process. Multiple threads within a process can run
            concurrently, allowing for parallel execution of tasks. Threads
            within the same process can communicate and share data more easily
            compared to inter-process communication. However, each thread has
            its own program counter and stack.
          </p>
        </div>

        {/* Q.3  */}
        <div>
          <h3 style={h3tag}>
            Q.3 What's the main purpose of an OS? What are the different types
            of OS?
          </h3>
          <p style={p_li}>
            The main purpose of an OS is to execute user programs and make it
            easier for users to understand and interact with computers as well
            as run applications. It is specially designed to ensure that the
            computer system performs better by managing all computational
            activities. It also manages computer memory, processes, and
            operation of all hardware and software.
          </p>
          <p style={p_li}>
            <strong>Types of OS:</strong>
          </p>
          <li style={p_li}>
            Batched OS (Example: Payroll System, Transactions Process, etc.)
          </li>
          <p style={p_li}></p>
          <li>Multi-Programmed OS (Example: Windows O/S, UNIX O/S, etc.)</li>
          <p style={p_li}></p>
          <li style={p_li}>Timesharing OS (Example: Multics, etc.)</li>
          <p style={p_li}></p>
          <li>Distributed OS (LOCUS, etc.)</li>
          <p style={p_li}></p>
          <li style={p_li}>Real-Time OS (PSOS, VRTX, etc.)</li>
          <p style={p_li}></p>
        </div>

        {/* Q.4  */}
        <div>
          <h3 style={h3tag}>Q.4 What is Bootstarp Program</h3>
          <p style={p_li}>
            Bootstarp Program is a firmware stored in ROM that initializes OS
            during startup i.e., first code that is executed whenever computer
            system startups. OS is loaded through a bootstrapping process or
            program commonly known as booting. Overall OS only depends on the
            bootstrap program to perform and work correctly. It also locates the
            kernel and loads it into the main memory.
          </p>
        </div>

        {/* Q.5  */}
        <div>
          <h3 style={h3tag}>Q.5 What is System Call?</h3>
          <p style={p_li}>
            System calls provide the interface between a process and OS.
            Typically written in high-level languages(c or c++). system calls
            can be made directly or by using high-level API's
          </p>
        </div>

        {/* Q.6  */}
        <div>
          <h3 style={h3tag}>Q.6 what are the states of a process?</h3>
          <p style={p_li}>
            As a process executes, it changes it's State. A process can be in
            following states:
          </p>
          <img
            style={imgtag}
            src="https://www.researchgate.net/profile/Ibrahim-Abdullahi-7/publication/260973132/figure/fig1/AS:614330252918789@1523479154482/Process-State-Diagram.png"
            alt=""
            width={500}
            height={430}
          />
          <p style={p_li}>
            <strong>(i) New -</strong> The Process is being created.
          </p>
          <p style={p_li}>
            <strong>(ii) Running -</strong> instructions are being executed.
          </p>
          <p style={p_li}>
            <strong>(iii) Waiting -</strong> The Process is waiting for some
            events to occur(such as I/O completion).
          </p>
          <p style={p_li}>
            <strong>(iv) Ready -</strong> The Process is waiting to be assigned
            to a processor.
          </p>
          <p style={p_li}>
            <strong>(v) Terminated-</strong> The Process has finished execution.
          </p>
        </div>

        {/* Q.7  */}
        <div>
          <h3 style={h3tag}>Q.7 What is PCB?</h3>
          <p style={p_li}>
            Each process is represented in OS by 'Process Control Block (PCB)'.
            It cantains many pieces of information associated with a specific
            process. It Includes:
          </p>
          <li style={p_li}>Process State</li>
          <li style={p_li}>Program Counter</li>
          <li style={p_li}>CPU registers</li>
          <li style={p_li}>CPU scheduling information</li>
          <li style={p_li}>Memory management information</li>
          <li style={p_li}>I/O status information</li>
          <li style={p_li}>Accounting information</li>
        </div>

        {/* Q.8  */}
        <div>
          <h3 style={h3tag}>
            Q.8 What are a pipe, socket, kernel, and monolithic kernel?
          </h3>
          <p style={p_li}>
            <strong># Socket:</strong>
          </p>
          <p style={p_li}>
            Sockets are used to establish communication between processes. It is
            mainly used for client server-based systems. When two processes or
            systems want to communicate with each other, sockets are the
            endpoints on either end of the communicating process. A socket is
            identified by an IP address concatenated by the port number. When a
            process on a client system wants to communicate and request
            information from the server, it is assigned a socket consisting of
            the IP address of that system with the port number.
          </p>

          <p style={p_li}>
            <strong># Pipe:</strong>
          </p>
          <p style={p_li}>
            The pipe is generally a connection among two or more processes that
            are interrelated to each other. It is a mechanism that is used for
            inter-process communication using message passing. One can easily
            send information such as the output of one program process to
            another program process using a pipe. It can be used when two
            processes want to communicate one-way i.e., inter-process
            communication (IPC).
          </p>

          <p style={p_li}>
            <strong># Kernel:</strong>
          </p>
          <p style={p_li}>
            A Kernel is a control module of an operating system. It is the one
            structure that loads first and remains in the memory. It lies
            between a system program and hardware. The kernel uses system calls
            to perform all the functions including CPU scheduling, memory
            management, etc. It is also known as a command-line interpreter.
          </p>
          <p style={p_li}>The main functions of the kernel are:</p>
          <li style={p_li}>
            It provides a mechanism for the creation and deletion of processes.
          </li>
          <li style={p_li}>
            It provides CPU scheduling, memory management, and I/O management.
          </li>
          <li style={p_li}>
            It provides a mechanism for interprocess communication.
          </li>

          <p style={p_li}>
            <strong># monolithic Kernel</strong>
          </p>
          <p style={p_li}>
            The kernel has various functionalities like signal terminal handling
            character, I/O system terminals drivers file system, swapping,
            block, input/output system, disk, and tape drivers CPU scheduling
            page replacement demand paging virtual memory and so on. Here every
            functionality is packed into one level and this is why it is called
            a monolithic structure. The problem caused by this is, that in
            monolithic structures implementations and maintenance become very
            difficult.
          </p>
        </div>

        {/* Q.9  */}
        <div>
          <h3 style={h3tag}>
            Q.9 Explain different types of CPU scheduling algorithms?
          </h3>
          <p style={p_li}>
            <strong># FCFS</strong>
          </p>
          <p style={p_li}>
            FCFS (First-Come-First-Serve) is the simplest scheduling algorithm.
            The basic idea is the process that comes first is scheduled first.
            It follows the principle of FIFO (First-in-First-Out). It is a
            non-preemptive algorithm.
          </p>
          <p style={p_li}>
            <strong># SJF</strong>
          </p>
          <p style={p_li}>
            The idea of the shortest job first algorithm is to consider the jobs
            in increasing order of their CPU burst time. This algorithm is
            non-preemptive. Being a non-preemptive algorithm, the first process
            assigned to the CPU is executed till completion then the process
            whose burst time is minimum is assigned next to the CPU and hence it
            continues.
          </p>
          <p style={p_li}>
            <strong># SRTF</strong>
          </p>
          <p style={p_li}>
            In the shortest remaining time first scheduling, whenever the new
            job arrives we compare its burst time with the remaining time of the
            currently running job and if it is less, then we preempt the
            currently running job and schedule the newly arrived process. It is
            a preemptive version of SJF(Shortest Job First) scheduling.
          </p>
          <p style={p_li}>
            <strong># Priority</strong>
          </p>
          <p style={p_li}>
            In priority scheduling, every job is assigned a priority and the CPU
            is assigned to the highest priority job among all the jobs in the
            ready queue. If two processes have the same priority, then we give
            priority to the process that came first. Priority scheduling can be
            preemptive or non-preemptive. A preemptive priority scheduling
            algorithm will preempt the CPU if the priority of the newly arrived
            process is higher than the priority of the currently running
            process. A non-preemptive priority scheduling algorithm will put the
            new process at the head of the ready queue.
          </p>

          <p style={p_li}>
            <strong># Round Robin</strong>
          </p>
          <p style={p_li}>
            It is the most popular scheduling algorithm. In round-robin
            scheduling, we maintain a time quantum and we maintain the ready
            queue as a circular queue. We pick processes one by one in a
            circular manner and assign them for example 2 units of time, which
            is quantum. If the process is going to take less than 2 units of
            time then that process finishes and immediately releases the CPU. If
            the process needs 2 units or more than 2 units, we give it 2 units
            and then preempt it and move to the next process. This algorithm is
            of preemptive nature.
          </p>
        </div>

        {/* Q.10  */}
        <div>
          <h3 style={h3tag}>Q.10 Explain Starvation & Ageing?</h3>
          <p style={p_li}>
            <strong># Starvation</strong>
          </p>
          <p style={p_li}>
            Priority scheduling suffers from the problem of starvation. It is
            the situation in which the continuous arrival of a high priority
            process keeps the lowest priority process always in waiting state.
          </p>
          <p style={p_li}>
            <strong># Ageing</strong>
          </p>
          <p style={p_li}>
            It is used to avoid the starvation. It is a technique of
            periodically increasing the priority of processes that are waiting
            in the system for a long time. By doing this every process gets
            chance to get the CPU.
          </p>
        </div>

        {/* Q.11  */}
        <div>
          <h3 style={h3tag}>
            Q.11 What is a deadlock? Necessary conditions for deadlock.
          </h3>
          <p style={p_li}>
            In a multiprogramming environment, several processes may compete for
            a finite number of resources. A process requests resources and if
            the resources are not available at that time, the process enters a
            waiting state. Sometimes, a waiting process is never again able to
            change state because the resources it has requested are held by
            other waiting processes. This situation is called deadlock.
          </p>
          <p style={p_li}>
            <strong># Necessary Conditions</strong>
          </p>
          <p style={p_li}>
            <strong>1. Mutual exclusion</strong>
          </p>
          <p style={p_li}>
            {" "}
            Deadlock can happen only when resources are non-shareable, Means
            only one process at a time can use that resource.
          </p>

          <p style={p_li}>
            <strong>2. Hold and wait</strong>
          </p>
          <p style={p_li}>
            A process must be holding at least one resource and waiting to
            acquire additional resources that are currently being held by the
            other processes.
          </p>

          <p style={p_li}>
            <strong>3. No preemption</strong>
          </p>
          <p style={p_li}>
            A resource can't be preempted, Means a resource can be released only
            voluntarily by process ie. after execution of process.
          </p>

          <p style={p_li}>
            <strong>4. Circular wait</strong>
          </p>
          <p style={p_li}>
            In circular wait, processes are waiting in a circle for each other.
          </p>
          <br />
          <p style={p_li}>
            We can understand deadlock by a real-world example. For example,
            consider a railway track where two trains are coming from opposite
            sides. Both trains are in front of each other and they are stopped
            because they both need the other side of the track. So this is a
            situation where no train can make progress because both trains are
            holding one side of the track waiting for the other side of the
            track. And both are waiting in a circular manner and we cannot do
            preemption. We cannot make the train go out of the track and free
            the track. This situation is a deadlock.
          </p>
        </div>

        {/* Q.12  */}
        <div>
          <h3 style={h3tag}>
            Q.12 What is synchronization? why we need synchronization? Also
            explain semaphore.
          </h3>
          <p style={p_li}>
            Synchronization is the way by which processes that share the same
            memory space are managed in an operating system. It helps maintain
            the consistency of data by using variables or hardware so that only
            one process can make changes to the shared memory at a time.
          </p>
          <p style={p_li}>
            <strong> # Why Synchroniztion</strong>
          </p>
          <p style={p_li}>
            To Understand why do we need synchronization, we need to understand
            following two terms:
          </p>
          <p style={p_li}>
            <strong>Critical Section - </strong> It is part of the program,
            where shared resources are accessed by various processes.
          </p>
          <p style={p_li}>
            <strong>Race Condition - </strong> Race Condition is when two or
            more cooperating processes parallely executes their critical
            section.
          </p>
          <p style={p_li}>To avoid race condition we need synchronization.</p>
          <p>
            <strong># Semaphore</strong>
          </p>
          <p style={p_li}>
            It is an synchronization tool that provides more sophisticated way
            for process to synchronize their activities. There are basically two
            atomic operations that are possible:
          </p>
          <li style={p_li}>Wait()</li>
          <li style={p_li}>signal()</li>
          <p style={p_li}>
            <strong>Types of Semaphores:</strong>
          </p>
          <p style={p_li}>There are two main types of semaphores:</p>
          <p style={p_li}>
            <strong>(i) Binary semaphore:</strong> A binary semaphore is a
            synchronization object that can only have two values: 0 and 1. It is
            used to signal the availability of a single resource, such as a
            shared memory location or a file.
          </p>
          <p style={p_li}>
            <strong>(ii) Counting semaphore:</strong> A counting semaphore is a
            synchronization object that can have a value greater than 1. It is
            used to control access to a finite number of resources, such as a
            pool of database connections or a limited number of threads.
          </p>
        </div>

        {/* Q.13  */}
        <div>
          <h3 style={h3tag}>
            Q.13 What is IPC? What are the different IPC mechanisms?
          </h3>
          <p style={p_li}>
            IPC (Interprocess Communication) is a mechanism that requires the
            use of resources like a memory that is shared between processes or
            threads. With IPC, OS allows different processes to communicate with
            each other. It is simply used for exchanging data between multiple
            threads in one or more programs or processes. In this mechanism,
            different processes can communicate with each other with the
            approval of the OS.
          </p>
          <p style={p_li}>
            <strong>Different IPC Mechanisms:</strong>
          </p>
          <li style={p_li}>Pipes</li>
          <li style={p_li}>Message Passing</li>
          <li style={p_li}>Sockets</li>
          <li style={p_li}>Share Memory</li>
          <li style={p_li}>Signals</li>
          <li style={p_li}>Semaphores</li>
        </div>

        {/* Q.14  */}
        <div>
          <h3 style={h3tag}>
            Q.14 What is Fragmentation? Types of Fragmentation.
          </h3>
          <p style={p_li}>
            Fragmentation is the problem that arises in contiguous allocation.
            In fragmentation, memory splits into many small pieces and some part
            of this piece remains unused and memory is not able to be used
            effectively.
          </p>
          <p style={p_li}>
            <strong>Types:</strong>
          </p>
          <p style={p_li}>
            <b>(i) Internal Fragmentation - </b>When a process is allocated to a
            memory block and if the process is smaller than the allocated block.
          </p>
          <p style={p_li}>
            <b>(ii) External Fragmentation - </b>There is enough memory space to
            complete a request but it is not contiguous.
          </p>
        </div>

        {/* Q.15  */}
        <div>
          <h3 style={h3tag}>Q.15 What is paging and why do we need it?</h3>
          <p style={p_li}>
            It is an efficient memory management technique. It is a
            non-contiguous memory allocation technique.
          </p>
          <li style={p_li}>
            It involves breaking physical memory into fixed-sized blocks called
            frames and breaking logical memory into blocks of the same size
            called pages. In paging, the main memory or physical memory is
            divided into the fixed-size block called a frame, and the logical
            address space of the user process or user job is divided into a
            fixed-size block called a page.{" "}
          </li>
          <li style={p_li}>The page size or the frame size should be equal.</li>
          <li style={p_li}>
            The size of the page and frame is decided by the operating system of
            the computer.
          </li>
          <li style={p_li}>
            The Operating system maintains a data structure called a page table.
            The information contained in the page table helps in mapping and
            framing.{" "}
          </li>
          <li style={p_li}>
            The information included in the page table is allocated frames
            present in the main memory.{" "}
          </li>
          <li style={p_li}>
            The page table mainly consists of two fields: page no. and frame no.
          </li>
        </div>

        {/* Q.16  */}
        <div>
          <h3 style={h3tag}>Q.16 What is Demand paging and Segmentation?</h3>
          <p style={p_li}>
            <strong># Demand paging</strong>
          </p>
          <p style={p_li}>
            Sometimes we may not initially need the entire program in memory. To
            solve this problem we use a technique called demand paging. In
            demand paging, we initially load pages only as they are needed. It
            is commonly used in virtual memory systems. In-demand paged virtual
            memory pages are only loaded when they are demanded during program
            execution. Pages that are never demanded are thus never loaded into
            physical memory.
          </p>
          <p style={p_li}>
            To swap the process into the memory a lazy swapper is used, it never
            swaps a page into the memory unless that page will be needed. A
            pager is used for demand paging because a pager is concerned with
            the individual pages of a process, unlike a swapper which
            manipulates the entire process. When a process is to be swapped in,
            the pager guesses which pages will be used before the process is
            swapped out again. The pager only brings the guessed pages into the
            memory. Thus, it avoids reading into memory pages that are not going
            to be used. And doing this decreases the swap time and the amount of
            physical memory needed.
          </p>

          <p style={p_li}>
            <strong># Segmentation</strong>
          </p>
          <p style={p_li}>
            Segmentation supports the user's point of view. In segmentation,
            memory is divided into segments of variable size and each segment is
            allocated to a process. A logical grouping of instructions such as
            subroutine, array, or data is called a segment. Every program is a
            collection of these segments.
          </p>
          <p style={p_li}>
            The main program includes various data structures such as objects,
            arrays, stacks, variables, etc. Each of these segments is of
            variable length where length is the purpose of the segment in the
            program. Elements within a segment are identified by their offset
            from the beginning of the segment.
          </p>
        </div>

        {/* Q.17  */}
        <div>
          <h3 style={h3tag}>Q.17 Define Virtual Memory?</h3>
          <p style={p_li}>
            Virtual memory is a technique that allows the execution of processes
            that are not completely in memory. One major advantage of this
            scheme is that a program can be larger than physical memory.
          </p>
          <p style={p_li}>
            Code of particular process needs to be in memory to execute it, but
            entire program rarely used. Entire program's code not needed at same
            time. Thus It allows large processes to be executed which specifies
            the increase in CPU utilization. It abstracts main memory into an
            extremely large and uniform array of storage and separates logical
            memory from physical memory which is viewed by the user. Virtual
            memory can be implemented by using demand paging and segmentation
            systems.{" "}
          </p>
        </div>

        {/* Q.18  */}
        <div>
          <h3 style={h3tag}>Q.18 What is Page fault and thrashing?</h3>
          <p style={p_li}>
            <b># Page Fault:</b>
          </p>
          <p style={p_li}>
            Page Fault occurs if a program tries to access a piece of memory
            that does not exist in main memory. Or if 'valid-invalid' bit in
            page table entry is "i"(invalid) then it is page fault.
          </p>
          <li style={p_li}>
            <b>handling Page Fault:</b>
          </li>
          <p style={p_li}>(i) Invalid reference.</p>
          <p style={p_li}>(ii) Just not in main memory.</p>
          <p style={p_li}>(iii) Find free frame in main memory.</p>
          <p style={p_li}>
            (iv) Bring missing page at free frame from secondary storage.
          </p>
          <p style={p_li}>(v) Reset table to indicate page now in memory</p>
          <p style={p_li}>
            (vi) Restart instruction that caused the page fault.
          </p>

          <p style={p_li}>
            <b># Thrashing:</b>
          </p>
          <p style={p_li}>
            Thrashing in os is a phenomenon that occurs in computer systems when
            the system spends an excessive amount of time on page swapping
            rather than executing useful work. It is caused by a high level of
            page faults, which happens when the system needs to retrieve a page
            from the disk because it is not present in memory.
          </p>
        </div>

        {/* Q.19  */}
        <div>
          <h3 style={h3tag}>Q.19 What is Context Switching?</h3>
          <p style={p_li}>
            Context switching is basically a process of saving the context of
            one process and loading the context of another process. It is one of
            the cost-effective and time-saving measures executed by CPU the
            because it allows multiple processes to share a single CPU.
            Therefore, it is considered an important part of a modern OS. This
            technique is used by OS to switch a process from one state to
            another i.e., from running state to ready state. It also allows a
            single CPU to handle and control various different processes or
            threads without even the need for additional resources.
          </p>
        </div>

        {/* Q.20  */}
        <div>
          <h3 style={h3tag}>Q.20 Key difference between OS & Kernel?</h3>
          <p style={p_li}>
            <b>Kernel:</b> Kernel is a system program that controls all programs
            running on the computer. The kernel is basically a bridge between
            the software and hardware of the system. It is considered as central
            part of OS.
          </p>
          <p style={p_li}>
            <b>Operating System:</b> Operating system is a system program that
            runs on the computer to provide an interface to the computer user so
            that they can easily operate on the computer.
          </p>
          <img
            style={imgtag}
            src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/153/original/kernel_oS.png?1615553527"
            alt=""
            width={400}
            height={500}
          />
        </div>

        {/* Q.21  */}
        <div>
          <h3 style={h3tag}>Q.21 What are various sections of the process?</h3>
          <p style={p_li}>
            There are basically four sections in the process as given below:
          </p>
          <img
            style={imgtag}
            src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/155/original/OS_Process.png?1615554162"
            height={430}
            width={300}
          />
          <p style={p_li}>
            <b>(i) Stack : </b> It is used for local variables and returns
            addresses.
          </p>
          <p style={p_li}>
            <b>(ii) Heap : </b> It is used for dynamic memory allocation.
          </p>
          <p style={p_li}>
            <b>(iii) Data : </b> It stores global and static variables.
          </p>
          <p style={p_li}>
            <b>(iv) Code or text : </b> It comprises compiled program code.
          </p>
        </div>

        {/* Q.22  */}
        <div>
          <h3 style={h3tag}>Q.22 What do you mean by Belady’s Anomaly?</h3>
          <p style={p_li}>
            In the Operating System, process data is loaded in fixed-sized
            chunks and each chunk is referred to as a page. The processor loads
            these pages in the fixed-sized chunks of memory called frames.
            Belady’s Anomaly is a phenomenon in which if we increase the number
            of frames in memory, then the number of page faults also increases.
            It is generally experienced when we use FIFO (First in First out)
            page replacement algorithm.
          </p>
        </div>

        {/* Q.23  */}
        <div>
          <h3 style={h3tag}>
            Q.23 What is RAID structure in OS? What are the different levels of
            RAID configuration?
          </h3>
          <p style={p_li}>
            RAID (Redundant Arrays of Independent Disks) is a method used to
            store data on Multiple hard disks therefore it is considered as data
            storage virtualization technology that combines multiple hard disks.
            It simply balances data protection, system performance, storage
            space, etc. It is used to improve the overall performance and
            reliability of data storage. It also increases the storage capacity
            of the system and its main purpose is to achieve data redundancy to
            reduce data loss.{" "}
          </p>
          <img
            style={imgtag}
            src="https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/139/original/RAID_Level.png?1615545501"
            width={420}
            height={460}
          />
          <p style={p_li}>
            <strong># Different levels of RAID:</strong>
          </p>
          <p style={p_li}>
            <b># RAID 0</b> - Non-redundant striping: This level is used to
            increase the performance of the server.
          </p>
          <p style={p_li}>
            <b># RAID 1</b> - Mirroring and duplexing: This level is also known
            as disk mirroring and is considered the simplest way to implement
            fault tolerance.
          </p>
          <p style={p_li}>
            <b># RAID 2</b> - Memory-style error-correcting codes: This level
            generally uses dedicated hamming code parity I.e., a liner form of
            error correction code.
          </p>
          <p style={p_li}>
            <b># RAID 3</b> - Bit-interleaved Parity: This level requires a
            dedicated parity drive to store parity information.
          </p>
          <p style={p_li}>
            <b># RAID 4</b> - Block-interleaved Parity: This level is similar to
            RAID 5 but the only difference is that this level confines all
            parity data to a single drive.
          </p>
          <p style={p_li}>
            <b># RAID 5</b> - Block-interleaved distributed Parity: This level
            provides far better performance than disk mirroring and fault
            tolerance.
          </p>
          <p style={p_li}>
            <b># RAID 6</b> - P+Q Redundancy: This level generally provides
            fault tolerance for two drive failures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OS;
