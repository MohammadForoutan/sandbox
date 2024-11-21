`timescale 1ns / 1ps

module tb_fulladd4; // Testbench for 4-bit full adder

    // Testbench signals
    reg [3:0] a;      // 4-bit input a
    reg [3:0] b;      // 4-bit input b
    reg c_in;        // Carry input
    wire [3:0] sum;   // 4-bit sum output
    wire c_out;      // Carry output

    // Instantiate the 4-bit full adder
    fulladd4 uut (
        .sum(sum),
        .c_out(c_out),
        .a(a),
        .b(b),
        .c_in(c_in)
    );

    // Task to apply test cases
    task apply_test(input [3:0] a_test, input [3:0] b_test, input c_in_test);
        begin
            a = a_test;
            b = b_test;
            c_in = c_in_test;
            #10; // Wait for 10 time units
            // Display results
            $display("A = %b, B = %b, Cin = %b | Sum = %b, Cout = %b", a, b, c_in, sum, c_out);
        end
    endtask

    // Test procedure
    initial begin
        // Initialize waveform dump
        $dumpfile("fadder.vcd"); // Specify the name of the VCD file
        $dumpvars(0, tb_fulladd4);  // Dump all variables in the testbench

        // Display header
        $display("A      B      Cin  |  Sum   Cout");
        $display("-----------------------------------");

        // Apply test cases
        apply_test(4'b0000, 4'b0000, 0); // 0 + 0 + 0
        apply_test(4'b0001, 4'b0001, 0); // 1 + 1 + 0
        apply_test(4'b0010, 4'b0011, 0); // 2 + 3 + 0
        apply_test(4'b0111, 4'b0001, 0); // 7 + 1 + 0
        apply_test(4'b1111, 4'b0001, 0); // 15 + 1 + 0
        apply_test(4'b1111, 4'b1111, 1); // 15 + 15 + 1
        apply_test(4'b1010, 4'b0101, 1); // 10 + 5 + 1
        apply_test(4'b1100, 4'b0011, 1); // 12 + 3 + 1

        // End simulation
        $finish;
    end
endmodule
