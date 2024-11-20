`timescale 1ns / 1ps

module tb_cla_4bit;

    // Testbench signals
    reg [3:0] A;      // 4-bit input A
    reg [3:0] B;      // 4-bit input B
    reg Cin;          // Carry input
    wire [3:0] Sum;   // 4-bit Sum output
    wire Cout;        // Carry output

    // Instantiate the CLA module
    cla_4bit uut (
        .A(A),
        .B(B),
        .Cin(Cin),
        .Sum(Sum),
        .Cout(Cout)
    );

    // Test procedure
    initial begin
        // VCD file generation
        $dumpfile("cla_4bit.vcd"); // Specify the name of the VCD file
        $dumpvars(0, tb_cla_4bit);  // Dump all variables in the testbench

        // Display header
        $display("A      B      Cin  |  Sum   Cout");
        $display("-----------------------------------");

        // Test case 1
        A = 4'b0000; B = 4'b0000; Cin = 0; #10;
        $display("%b  %b  %b     |  %b  %b", A, B, Cin, Sum, Cout);

        // Test case 2
        A = 4'b0011; B = 4'b0001; Cin = 0; #10;
        $display("%b  %b  %b     |  %b  %b", A, B, Cin, Sum, Cout);

        // Test case 3
        A = 4'b0101; B = 4'b0011; Cin = 0; #10;
        $display("%b  %b  %b     |  %b  %b", A, B, Cin, Sum, Cout);

        // Test case 4
        A = 4'b1111; B = 4'b0001; Cin = 0; #10;
        $display("%b  %b  %b     |  %b  %b", A, B, Cin, Sum, Cout);

        // Test case 5
        A = 4'b1001; B = 4'b0110; Cin = 1; #10;
        $display("%b  %b  %b     |  %b  %b", A, B, Cin, Sum, Cout);

        // Test case 6
        A = 4'b1110; B = 4'b0001; Cin = 1; #10;
        $display("%b  %b  %b     |  %b  %b", A, B, Cin, Sum, Cout);

        // End simulation
        $finish;
    end

endmodule
