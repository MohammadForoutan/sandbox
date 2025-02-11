`timescale 1ns / 1ps  // Define the time scale for the simulation

module tb_not;  // Testbench module

    // Declare testbench signals
    reg a;            // Input signal for the NOT gate
    wire out;         // Output signal from the NOT gate

    // Instantiate the NOT gate
    not_gate uut (
        .a(a),      // Connect input a
        .out(out)     // Connect output
    );

    // Add VCD file generation
    initial begin
        $dumpfile("not.vcd");  // Create a VCD file named "not_gate.vcd"
        $dumpvars(0, tb_not);  // Dump all variables in the testbench
    end

    // Test procedure
    initial begin
        // Display the header
        $display("Time(ns) | Input A | Output");
        $monitor("%0t | %b     | %b", $time, a, out);

        // Test case 1: A = 0
        a = 0;  // Apply input A = 0
        #3;     // Wait for 3 ns

        // Test case 2: A = 1
        a = 1;  // Apply input A = 1
        #3;     // Wait for 3 ns

        // End the simulation
        $finish;
    end

endmodule
