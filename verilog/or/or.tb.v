`timescale 1ns / 1ps  // Define the time scale for the simulation

module tb_or;  // Testbench module

    // Declare testbench signals
    reg a, b;            // Input signals for the OR gate
    wire out;         // Output signal from the OR gate

    // Instantiate the OR gate
    or_gate uut (
        .a(a),      // Connect input a
        .b(b),      // Connect input b
        .out(out)     // Connect output
    );

    // Add VCD file generation
    initial begin
        $dumpfile("or.vcd");  // Create a VCD file named "or_gate.vcd"
        $dumpvars(0, tb_or);  // Dump all variables in the testbench
    end

    // Test procedure
    initial begin
        // Display the header
        $display("Time(ns) | Input A | Input B | Output");
        $monitor("%0t | %b     | %b     | %b", $time, a, b, out);

        // Test case 1: A = 0, B = 0
        a = 0;  // Apply input A = 0
        b = 0;  // Apply input B = 0
        #3;     // Wait for 3 ns

        // Test case 2: A = 0, B = 1
        a = 0;  // Apply input A = 0
        b = 1;  // Apply input B = 1
        #3;     // Wait for 3 ns

        // Test case 3: A = 1, B = 0
        a = 1;  // Apply input A = 1
        b = 0;  // Apply input B = 0
        #3;     // Wait for 3 ns

        // Test case 4: A = 1, B = 1
        a = 1;  // Apply input A = 1
        b = 1;  // Apply input B = 1
        #3;     // Wait for 3 ns

        // End the simulation
        $finish;
    end

endmodule
